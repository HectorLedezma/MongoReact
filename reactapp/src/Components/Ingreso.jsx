import { useRef, useState } from "react";
import { Rut } from "../Varios/TemaRut"
import { HiEye,HiEyeOff,HiLockClosed,HiUser } from "react-icons/hi";
import { Connection } from "../Conection/connection";
import { toast } from "react-toastify";
import cryptoJs from "crypto-js";


function Ingreso(){

    const gestRut = new Rut();
    const [rutOk,setRutOk] = useState(true);
    const rutRef = useRef();
    const pasRef = useRef();

    const [view,setView] = useState(true);

    const ingresa = (rut,pass) => {
        const con = new Connection();
        con.leerUno('/usuario/',{"rut":gestRut.limpiaRut(rut)}).then(data=>{
            if(data !== null){
                if(data.password === cryptoJs.SHA256(pass).toString()){
                    //console.log('archivo: ingreso.jsx');
                }else{
                    toast.error("El RUT o contraseña son incorrectos",{position:'top-center',autoClose:5000});    
                }
            }else{
                console.log('error')
                toast.error("El usuario no existe",{position:'top-center',autoClose:5000});
            }
        })
    }
    return(
        <form className="m-3 p-3">
                <h3 className="text-center">¿Ya tienes una cuenta?</h3>
                <h4 className="text-center">Ingresa aquí</h4>
                <div className="d-flex justify-content-center">
                    <div className="mt-3 mb-1 input-group" style={{width:"75%"}}>
                        <div className="input-group-text">
                            <HiUser/>
                        </div>
                        <input className="form-control" type="text" ref={rutRef} placeholder="RUT de usuario" onChange={ev=>{
                            ev.preventDefault();
                            setRutOk(gestRut.validaRut(rutRef.current.value));
                        }}/>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <p className="text-danger text-center" hidden={rutOk}>El RUT no es valido</p>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="mt-1 mb-3 d-flex justify-content-center input-group" style={{width:"75%"}}>
                        <div className="input-group-text">
                            <HiLockClosed />
                        </div>
                        <input ref={pasRef} className="form-control" placeholder="Contraseña" type={!view? "text":"password"}/>
                        <div className="input-group-text">
                            <div role="button" onClick={ev=>{ev.preventDefault();setView(!view);}}>{view ? (<HiEye/>):(<HiEyeOff />)}</div>
                        </div>
                    </div>
                </div>
                <div className="mt-3 mb-3 d-flex justify-content-center">
                    <button className="btn btn-primary btn-lg"
                        onClick={ev=>{
                            ev.preventDefault();
                            ingresa(rutRef.current.value,pasRef.current.value);
                        }}
                    >Ingresar</button>
                </div>
            </form>
    );
}

export default Ingreso