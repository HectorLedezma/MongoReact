const {Plantas} = require('../Models/plantas');


//C
//R
const GetResumen = async (req,res) =>{
    try {
        const docs = await Plantas.find().select('nombre_comun nombre_cientifico image')
        console.log("Acceso desde: "+req.headers.host);
        res.json(docs);
    } catch (error) {
        console.log('Hubo un error en obtener los datos');
        console.log(error);
        res.send(error)
    }
}
//U
//D

module.exports = {
    GetResumen
}