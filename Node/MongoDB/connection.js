const mongoose = require('mongoose');

const uri = 'mongodb://user:pass@localhost:27017/';

module.exports = () =>{
  const connect = () =>{
    mongoose.connect(
      uri,{dbName:"Leaservice"}
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