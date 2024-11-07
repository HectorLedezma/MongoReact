const mongoose = require('mongoose');

require('dotenv').config();

const uri = process.env.MONGO_DB_CONNECTION_STRING;

module.exports = () =>{
  const connect = () =>{
    mongoose.connect(
      uri,{dbName:process.env.MONGO_DB_DATABASE_NAME}
    ).then(
      () => { console.log('Conectado a MongoDB') },
      err => { console.log('Hubo un error en la conexión\n'+err) }
    );
  }
  connect();
}

/*mongoose.connect(, {dbName:'Leaservice'});

const db = mongoose.connection;


mongoose.connection.on('connected', () => {
  console.log('Conectado a MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error de conexión a MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Desconectado de MongoDB');
});


return db;*/