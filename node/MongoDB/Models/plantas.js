const mongoose = require('mongoose');

const PlantasSchema = new mongoose.Schema({
  nombre_comun:Array,
  nombre_cientifico:String,
  image:String,
  comestible:Array,
  origen:String,
  temperatura:Object
})

const Plantas = mongoose.model('Plantas',PlantasSchema,'Plantas');

module.exports = {
  Plantas
};