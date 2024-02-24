// models/usuarioModel.js
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  rut:String,
  nombre: String,
  correo:String,
  password:String,
  intereses:Array
});

const SchemaSalas = new mongoose.Schema({
  Numero:String,
  Ubicacion: Object,
  Implementos: Array,
  Horario: Array
})

const TokenSchema = new mongoose.Schema({
  rut:String,
  state:Boolean
})

const Usuario = mongoose.model('Usuario', usuarioSchema,'User');
const Salas = mongoose.model('Sala',SchemaSalas,'Salas');
const Token = mongoose.model('Token',TokenSchema,'Token');
module.exports = {
  Usuario,
  Salas,
  Token
};

