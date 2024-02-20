const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  port:3030,
  user: "root",
  password: ""
});


module.exports = () =>{
    const connect = () =>{
        con.connect(function(err) {
            if (err) throw err;
            console.log("Conectado a MySQL");
        });
    }
    connect();
}