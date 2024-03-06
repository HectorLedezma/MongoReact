import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { Connection } from "../Conection/connection";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiLogOut } from "react-icons/fi";

function Profile(){
    const navi = useNavigate();
    const coockie = new Cookies();
    const [data,setData] = useState({});
    const cargaData = () =>{
        const con = new Connection();
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
            toast.error("Lo siento, tu sesión a expirado", {position:'top-center',autoClose:5000});
            navi('/login')
        })
    }
    
    useEffect(cargaData)

    const logout = () =>{
        
        const con = new Connection();
        con.crear('token',{"Token":coockie.get('UserToken')})

        coockie.remove('UserToken');
        navi('/login');
    }

    return(
        <div  className="p-3">
        <div className="bg-light m-3 p-3 rounded">
            <div className="text-center">
                <h1 className="fs-1 text-primary fw-bolder">Perfil de usuario</h1>
            </div>
            <div>
                <div className="d-flex align-items-baseline">
                    <p className="me-1 fw-bolder fs-2 text-primary">Nombre:</p>
                    <p className="fs-3">{data.Nombre}</p>
                </div>
                <div className="d-flex align-items-baseline">
                    <p className="me-1 fw-bolder fs-2 text-primary">RUT:</p>
                    <p className="fs-3">{data.RUT}</p>
                </div>
                <div className="d-flex align-items-baseline">
                    <p className="me-1 fw-bolder fs-2 text-primary">Correo:</p>
                    <p className="fs-3">{data.Correo}</p>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-danger btn-lg align-items-center"
                onClick={logout}
                ><FiLogOut className="mb-1 me-2" style={{'height':'100%'}}/>Cerrar sesion</button>
            </div>
        </div>
    </div>)
}

export default Profile