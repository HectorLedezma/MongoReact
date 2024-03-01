import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { Connection } from "../Conection/connection";
import { useNavigate } from "react-router-dom";

function Profile(){

    const [data,setData] = useState(null);
    const navi = useNavigate();
    useEffect(()=>{
        const con = new Connection();
        const coockie = new Cookies();
        try {
            con.leerUnoget('gusuario/',{'token':coockie.get('UserToken')}).then(datos=>{
                console.log('datos de usuario: ',datos);
                setData(data);
            })   
        } catch (error) {
            console.log('Error en Profile: ',error);
            navi('/login')
        }
    })


    return(<div>
        <h1 className="text-light">perfil de usuario</h1>
        <h3 className="text-light">{data}</h3>
        <button 
            className="btn btn-primary"
            onClick={ev=>{
                ev.preventDefault();
                //const cookie = new Cookies();
                
            }}
        >
            ver
        </button>
    </div>)
}

export default Profile