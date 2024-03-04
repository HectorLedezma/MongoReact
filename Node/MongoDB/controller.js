const {Usuario,Salas,Token} = require('./models');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CreateToken = require('../Token/token');

//C de usuario
const addUser = async (req,res) =>{
  try {
    await Usuario.create(req.body);
    res.send(
      "Ok"
    )  
  } catch (error) {
    console.log('Hubo un error en subir los datos')
    console.log(error)
    res.send("Error")
  }
}

// R de usuario
const getUsers = async (req,res) =>{
  console.log('Getting all users')
  try {
    const docs = await Usuario.find(req.body);
    res.json(
      docs
    )  
  } catch (error) {
    console.log('Hubo un error en obtener los datos')
    console.log(error)
    res.send('Hubo un error en obtener los datos')
  }
}
const getOneUser = async (req,res) =>{
  const token = req.header('token');
  try {
    const tokenFree = jwt.verify(token, 'claveTekken');
    const consul ={
      rut:tokenFree.rut,
      password:tokenFree.pass
    };
    const docs = await Usuario.findOne(consul);
    res.json(
      docs
    )  
  } catch (error) {
    console.log('Hubo un error en obtener los datos')
    //console.log(error)
    res.send('Hubo un error en obtener los datos')
  }
}

const hayUser = async (req,res) =>{
  console.log('Getting one user')
  try {
    let hay = false;
    const doc = await Usuario.findOne(req.body);
    //console.log('body: ',req.body);
    //console.log('user: ',doc)
    if(doc !== null && Object.keys(req.body).length > 0){
      hay = true;
    }
    //console.log('hay: ',hay);
    res.json(hay);
  } catch (error) {
    res.json(false)
  }
}

// Función para iniciar sesión y generar token
const iniciarSesion = async (req, res) => {
  // Lógica para verificar credenciales y generar token JWT
  console.log('Login one user')
  try {
    console.log('body: ',req.body);
    if(Object.keys(req.body).length > 0){
      const docs = await Usuario.findOne(req.body);
      //console.log('User log: ',docs);
      const Tekken = CreateToken(docs);
      //console.log('Token a entregar: ',Tekken);
      res.json(Tekken)
    }else{
      res.send('Hubo un error al ingresar usuario')
    }
    //console.log(Tekken);
  } catch (error) {
    console.log('Hubo un error al ingresar usuario')
    console.log(error)
    res.send('Hubo un error al ingresar usuario')
  }
};

// U de usuario


// D de usuario


/////////////////////////////////////////////


//C de Salas

//R de Salas
const getSalas = async (req,res) =>{
  console.log('Getting all Sala');
  try {
    const docs = await Salas.find();
    res.json(
      docs
    );
  } catch (error) {
    console.log('Hubo un error en obtener los datos')
    console.log(error)
    res.send('Hubo un error en obtener los datos')
  }
}
const getSala = async (req,res) =>{
  console.log('Getting one Sala');

  const consul = req.body;
  try {
    console.log("query",consul)
    const docs = await Salas.find(consul);
    res.json(
      docs
    );
  } catch (error) {
    console.log('Hubo un error en obtener los datos')
    console.log(error)
    res.send('Hubo un error en obtener los datos')
  }
}
//U de Salas

//D de Salas


const login = async (req,res) =>{
  try {
    if(Object.keys(req.body).length !== 0){
      console.log(req.body)
      await Token.updateOne(req.body.find,{"state":true});
    }
  } catch (error) {
    console.log('Hubo un error en actualizar los datos')
    console.log(error)
  }
}

const log = async (req,res) =>{
  try {
    //console.log(Object.keys(req.body).length)
    let docs = {};
    if(Object.keys(req.body).length !== 0){
      console.log("log",req.body)
      docs = await Token.findOne(req.body);
    }
    res.json(
      docs
    )
  } catch (error) {
    console.log('Hubo un error en obtener los datos')
  }
}

const logout = async (req,res) =>{
  try {
    if(Object.keys(req.body).length !== 0){
      await Token.updateOne(req.body,{"state":false});
    }
  } catch (error) {
    console.log('Hubo un error en actualizar los datos')
    console.log(error)
  }
}

module.exports = {
  addUser,
  getUsers,
  getOneUser,
  iniciarSesion,
  hayUser,
  getSalas,
  getSala,
  login,
  log,
  logout
}
