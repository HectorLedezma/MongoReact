import { useRef, useState } from "react";
import { Rut } from "../Varios/TemaRut"
import { HiEye,HiEyeOff,HiLockClosed,HiMail,HiUser } from "react-icons/hi";
import { Connection } from "../Conection/connection";
import { toast } from "react-toastify";
import cryptoJs from "crypto-js";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function OldUser(){
    const gestRut = new Rut();
    const [rutOk,setRutOk] = useState(true);
    const rutRef = useRef();
    const pasRef = useRef();
    const mailRef = useRef();
    const [view,setView] = useState(true);
    const navigate = useNavigate();

    const passInput = (
        <div className="mt-1 mb-3 d-flex justify-content-center input-group border border-primary rounded" style={{width:"75%"}}>
            <div className="input-group-text">
                <HiLockClosed />
            </div>
            <input ref={pasRef} className="form-control" placeholder="Contraseña" type={!view? "text":"password"}/>
            <div className="input-group-text">
                <div role="button" onClick={ev=>{ev.preventDefault();setView(!view);}}>{view ? (<HiEye/>):(<HiEyeOff />)}</div>
            </div>
        </div>
    )

    const mailInput = (
        <div className="mt-1 mb-3 d-flex justify-content-center input-group border border-primary rounded" style={{width:"75%"}}>
            <div className="input-group-text">
                <HiMail/>
            </div>
            <input ref={mailRef} className="form-control" placeholder="Correo" type="text"/>
        </div>
    )

    const [rec,setRec] = useState(false);

    const ingresa = (rut,pass) => {
        const con = new Connection();
        con.login({"rut":gestRut.limpiaRut(rut),"password":cryptoJs.SHA256(pass).toString()}).then(token => {
            if(token !== ''){
                let cookie = new Cookies();
                const caduca = 5;
                const caducaDate = new Date();
                caducaDate.setMinutes(caducaDate.getMinutes()+caduca);
                //console.log('Token de usuario',token);
                cookie.set("UserToken",token,{expires:caducaDate,sameSite:'strict'});
                navigate('/user');
            }else{
                //console.log('Token: ',token)
                toast.error("El RUT o contraseña son incorrectos",{position:'top-center',autoClose:5000});
            }
        }).catch(error=>{
            console.log(error)
        })
        /*con.leerUno('/usuario/',{"rut":gestRut.limpiaRut(rut)}).then(data=>{
            if(data !== null){
                if(data.password === cryptoJs.SHA256(pass).toString()){
                    try {
                        let cookie = new Cookies();
                        const caduca = 2;
                        const caducaDate = new Date();
                        caducaDate.setMinutes(caducaDate.getMinutes()+caduca);
                        cookie.set(
                            "UserRut",
                            data.rut,
                            {expires:caducaDate,sameSite:'strict'}  
                        );
                        con.login({find:{rut:data.rut}})
                        navigate('/user')
                    } catch (error) {
                        console.log(error)
                    }
                }else{
                    toast.error("El RUT o contraseña son incorrectos",{position:'top-center',autoClose:5000});    
                }
            }else{
                console.log('error')
                toast.error("El usuario no existe",{position:'top-center',autoClose:5000});
            }
        })*/
    }

    return(
        <div className="bg-light rounded">
            <form className="m-3 p-3">
                <h3 className="text-center">{`${rec?'¿Olvidaste tu contraseña?':'¿Ya tienes una cuenta?'}`}</h3>
                <h4 className="text-center">{`${rec?'Recupera aquí':'Ingresa aquí'}`}</h4>
                <div className="d-flex justify-content-center">
                    <div className="mt-3 mb-1 input-group border border-primary rounded" style={{width:"75%"}}>
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
                    {rec ? mailInput:passInput}
                </div>
                <div className="mt-3 mb-3 d-flex justify-content-center">
                    <button className="btn btn-primary btn-lg"
                        onClick={ev=>{
                            ev.preventDefault();
                            if(!rec){
                                ingresa(
                                    rutRef.current.value,
                                    pasRef.current.value
                                );
                            }else{
                                console.log('Recuperar')
                                console.log(rutRef.current.value);
                                console.log(mailRef.current.value);
                            }
                        }}
                    >{`${rec?'Recuperar':'Ingresar'}`}</button>
                </div>
            </form>
            <div>
                <div className="mt-3 d-flex justify-content-center">
                    <h6>{`¿${rec? 'Recordaste':'Olvidaste'} tu contraseña?`}</h6>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    <p 
                        role="button" 
                        className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                        onClick={ev=>{
                            ev.preventDefault();
                            setRec(!rec);
                        }}>
                        {rec? "Ingresa aquí":"Recupera aquí"}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OldUser