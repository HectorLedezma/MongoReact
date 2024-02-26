import Cookies from "universal-cookie";
import Login from "../Pages/Login";
import { useNavigate } from "react-router-dom";
import { Connection } from "../Conection/connection";
import cryptoJs from "crypto-js";
import { Rut } from "../Varios/TemaRut";
import Profile from "./Profile";
import Salas from "../Pages/salas";

function Body(props){
    const gestRut = new Rut();
    const logueado = (rut,token) =>{
        const con = new Connection();
        let si = false;
        con.log({rut:gestRut.limpiaRut(rut)}).then(data=>{
            console.log("token",data);
            si = data.state && (data.tokenID === cryptoJs.SHA256(token).toString());
        }).catch(error=>{console.log(error)})
        console.log(si)
        return si;
    }
    
    const cookie = new Cookies();
    const navi = useNavigate();
    switch (props.route) {
        case '/salas':
            return(//se puede mostrar la vista de las salas
                <Salas/>
            )
        case '/user':
            const cookie = new Cookies();
            if(cookie.get('UserRut') !== undefined){
                return(//perfil de usuario
                    <Profile/>
                )
            }else{
                navi('/login');
                break;
            }
            
        case '/login':
            return(//ingreso de usuario
                <Login/>
            )
        default:
            return(
                <div>
                    <h1 className="text-light">pagina por defecto</h1>
                </div>
            )
    }
}

export default Body;