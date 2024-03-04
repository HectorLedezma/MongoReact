const jwt = require('jsonwebtoken');
const moment = require('moment');

function CreateToken(user){
    const jornada = 1;
    const payload = {
        rut : user.rut,
        pass: user.password,
        iat : moment().unix(),
        exp : moment().add(jornada,'minutes').unix()
    }
    //console.log(payload);
    return jwt.sign(payload,'claveTekken');
}

module.exports = CreateToken