// middleware/auth.js
const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
  const token = req.header('token');

  if (!token) {
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
