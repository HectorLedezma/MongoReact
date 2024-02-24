//import db  from './MongoDB/models';
//import cors from 'cors';
const express = require('express');
const cors = require('cors');
const app = express();
const APIRoutes = require('./MongoDB/routes')
const bodyParser = require('body-parser');
const MongoDB = require('./MongoDB/Connection')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Servidor Node.js en http://localhost:${port}`);
});
MongoDB();
//MySQLDB();
app.use('/data',APIRoutes);


