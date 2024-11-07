// models/usuarioModel.js
const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
  Token:String
})


const Token = mongoose.model('Token',TokenSchema,'Token');


module.exports = {
  Token
};

