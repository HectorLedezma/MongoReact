// models/usuarioModel.js
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  rut:String,
  nombre: String,
  apellido: String,
  intereses:Array
});

const SchemaSalas = new mongoose.Schema({
  Numero:String,
  Ubicacion: Object,
  Implementos: Array,
  Horario: Array
})


const Usuario = mongoose.model('Usuario', usuarioSchema,'User');
const Salas = mongoose.model('Sala',SchemaSalas,'Salas')

module.exports = {
  Usuario,
  Salas
};

