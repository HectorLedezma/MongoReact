const jwt = require('jsonwebtoken');
const moment = require('moment');

function CreateToken(user){
    const jornada = 12;
    const payload = {
        rut : user.rut,
        iat : moment().unix(),
        exp : moment().add(jornada,'hours').unix()
    }
    console.log(payload);
    return jwt.sign(payload,'claveTekken');
}

module.exports = CreateToken