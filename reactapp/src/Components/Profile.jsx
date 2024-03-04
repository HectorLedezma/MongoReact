import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { Connection } from "../Conection/connection";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Profile(){
    const navi = useNavigate();
    const [data,setData] = useState({});
    const cargaData = () =>{
        const con = new Connection();
        const coockie = new Cookies();
        con.leerUnoget('gusuario/',{'token':coockie.get('UserToken')}).then(datos=>{
            //console.log('datos de usuario: ',datos);
            const newDatos = {
                "Nombre":datos.nombre,
                "RUT":datos.rut,
                "Correo":datos.correo
            }
            //console.log(newDatos);
            setData(newDatos);
        }).catch(error=>{
            //console.log('Error en Profile: ',error);
            toast.error("Los siento, tu sesión a expirado",{position:'top-center',autoClose:5000});
            navi('/login')
        })
    }
    
    useEffect(cargaData)


    return(<div  className="p-3">
        <div className="bg-light m-3 p-3">
            <div className="text-center">
                <h1 className="">perfil de usuario</h1>
            </div>
            <div>
                <div>
                    <h3>Nombre:</h3>
                    <h4>{data.Nombre}</h4>
                </div>
                <div>
                    <h3>RUT:</h3>
                    <h5></h5>
                </div>
                <div>
                    <h3>Correo:</h3>
                    <h5></h5>
                </div>
            </div>
        </div>
        
        {/*<h3 className="text-light">{data}</h3>*/}
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