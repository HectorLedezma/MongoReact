import Cookies from "universal-cookie";
import Login from "../Pages/Login";
//import { useNavigate } from "react-router-dom";
import { Connection } from "../Connection/connection";
//import cryptoJs from "crypto-js";
//import { Rut } from "../Varios/TemaRut";
import Profile from "../Components/Profile";
import Salas from "../Pages/salas";
import { useEffect, useState } from "react";
import Default from "../Pages/default";

function Body(props){
    //const gestRut = new Rut();
    const [log,setLog] = useState(false);
    
    useEffect(()=>{
        const con = new Connection();
        con.log(cookie.get('UserToken')).then(loged =>{
           // console.log('logueado: (body)',loged);
            setLog(loged)
        }).catch(()=>{
            console.log("no hay token")
        });
    })
    const cookie = new Cookies();
    //const navi = useNavigate();
    switch (props.route) {
        case '/salas':
            return(//se puede mostrar la vista de las salas
                <Salas/>
            )
        case '/user':
            if(log){
                return(//perfil de usuario
                    <Profile/>
                )
            }else{
                return(//ingreso de usuario
                    <Login/>
                )
            }
            
        case '/login':
            return(//ingreso de usuario
                <Login/>
            )
        default:
            return(
                <Default/>
            )
    }
}

export default Body;