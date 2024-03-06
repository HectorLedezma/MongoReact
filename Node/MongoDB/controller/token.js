const { Token } = require("../models")



//C

async function addToken(req,res){
    try{
        await Token.create(req.body)
        res.send(
            "Ok"
        )  
    } catch (error) {
        console.log('Hubo un error en subir los datos')
        console.log(error)
        res.send("Error")
    }
}

//R

async function getTokens(req,res){
    try {
        const docs = await Token.find();
        res.json(
          docs.map((obj)=>{
            return obj.Token
          })
        )  
      } catch (error) {
        console.log('Hubo un error en obtener los datos')
        console.log(error)
        res.send('Hubo un error en obtener los datos')
      }
}
function getTokensInter(){
    try {
        const docs = Token.find();
        return docs.map((obj)=>{
            return obj.Token
        })  
      } catch (error) {
        console.log('Hubo un error en obtener los datos')
        console.log(error)
        //res.send('Hubo un error en obtener los datos')
      }
}
//U
//D

async function cleanToken(req,res){
    try{
        await Token.deleteMany()
        res.send(
            "Ok"
        )  
    } catch (error) {
        console.log('Hubo un error en limpiar los datos')
        console.log(error)
        res.send("Error")
    }
}


module.exports = {
    addToken,
    getTokens,
    getTokensInter,
    cleanToken
}