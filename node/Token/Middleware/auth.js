// middleware/auth.js
const jwt = require('jsonwebtoken');
const { getTokens } = require('../../MongoDB/controller/token');
const {Axios} = require('axios');

const http = require('http');

// Opciones para la solicitud
const options = {
  hostname: 'localhost',
  port: 8000,
  path: '/data/token/get',
  method: 'GET',
};
let TokenList = [];
function setList(nl){
  TokenList = nl;
}

const req = http.request(options, (res) =>{
  let data = [];

  // Recibir datos
  res.on('data', (chunk) => {
    //console.log('chunk: ', chunk);
    data += chunk;
    //console.log('data: ', data);
  });

  // Fin de la respuesta
  res.on('end', () => {
    //console.log('datos: ',data.toString())
    setList(data);
  });
});

const lista = () =>{
  // Manejar errores en la solicitud
  req.on('error', (e) => {
    console.error(`Error en la solicitud: ${e.message}`);
  });

  // Finalizar la solicitud
  req.end()
  //console.log(TokenList);
  //req;
  //const ax = new Axios();
  //return (await ax.get('http://localhost:8000/data/token/get')).data
}

const verificarToken = (req, res, next) => {
  const token = req.header('token');
  //console.log('Token de usuario: ',lista());
  lista()
  //console.log(TokenList[0]);
  if (token === '' || JSON.parse(TokenList).includes(token)) {
    return res.status(401).json({ msg: 'No hay token, autorización denegada' });
  }
  try {
    //console.log(token);
    const decoded = jwt.verify(token, 'claveTekken');
    //console.log('decoded: ',decoded);
    req.usuario = decoded.usuario;
    
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token no válido' });
  }
};

function hayToken(req,res){
  const token = req.header('token');
  //console.log('Token: ',req)
  let hay = false;
  if (!token) {
    hay = false;
  }

  try {
    
    jwt.verify(token, 'claveTekken');
    hay = true;
  } catch (error) {
    hay = false;;
  }
  res.json(hay);
}

module.exports = {verificarToken,hayToken};
