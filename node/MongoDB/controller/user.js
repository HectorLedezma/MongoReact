const jwt = require('jsonwebtoken');
const CreateToken = require('../../Token/token');
const { Usuario } = require('../models');
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
        console.log('User log: ',docs);
        if(docs === null){
            console.error('credencial incorrecta',docs.id);

        }else{
            console.log('credencial correcta')
            const Tekken = CreateToken(docs);
            res.json(Tekken)
        }
        
        //console.log('Token a entregar: ',Tekken);
        
      }else{
        console.log('request sin cuerpo')
        res.send('Hubo un error al ingresar usuario')
      }
      //console.log(Tekken);
    } catch (error) {
      console.log('callback')
      //console.log(error)
      res.json('');
    }
  };
  
  // U de usuario
  
  
  // D de usuario
  
  module.exports = {
    addUser,
    getUsers,
    getOneUser,
    iniciarSesion,
    hayUser
}