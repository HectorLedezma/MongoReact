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
  console.log('Getting one user')
  try {
    const docs = await Usuario.findOne(req.body);
    res.json(
      docs
    )  
  } catch (error) {
    console.log('Hubo un error en obtener los datos')
    console.log(error)
    res.send('Hubo un error en obtener los datos')
  }
}

// Función para iniciar sesión y generar token
const iniciarSesion = async (req, res) => {
  // Lógica para verificar credenciales y generar token JWT
  console.log('Login one user')
  try {
    const docs = await Usuario.findOne(req.body);
    //console.log(docs);
    const Tekken = CreateToken(docs);
    res.json(Tekken)
    //console.log(Tekken);
  } catch (error) {
    console.log('Hubo un error en obtener los datos')
    console.log(error)
    res.send('Hubo un error en obtener los datos')
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
  getSalas,
  getSala,
  login,
  log,
  logout
}
