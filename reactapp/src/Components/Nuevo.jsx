import cryptoJs from "crypto-js";
import { useEffect, useRef, useState } from "react"
import { toast } from "react-toastify";
import { Connection } from "../Conection/connection";
import { Rut } from "../Varios/TemaRut";
import { HiUser,HiMail, HiEye, HiEyeOff, HiLockClosed } from "react-icons/hi";

function NewUser(){
    const gestRut = new Rut();

    const rutRef = useRef();
    const nomRef = useRef();
    const mailRef = useRef();
    const passRef = useRef();
    const pass2Ref = useRef();

    
    const [ocupado,setOcupado] = useState(false);
    const [view,setView] = useState(true);
    const [view2,setView2] = useState(true);
    //const [primera,setPrimera] = useState(true);
    function existe(rut){
        const con = new Connection();
        con.leerSiHay('/usuario/hay',{"rut":gestRut.limpiaRut(rut)}).then(data=>{
            //console.log(rut,' existe: ',data)
            setOcupado(data);
            /*if(data !== null){
                setOcupado(true);
            }else{
                setOcupado(false);
            }*/
        })

    }

    useEffect(()=>{
        if(rutOk){
            console.log('consultando rut...')
            existe(rutRef.current.value);
        }
    })

    const crear=(rut,nom,mail,pass)=>{
        let errorMeseage = ["Los campos\n"];
        if(rut === ""){
            errorMeseage.push(' "RUT"')
        }
        if(nom === ""){
            errorMeseage.push(' "Nombre"');
        }
        if(mail === ""){
            errorMeseage.push(' "Correo"');
        }
        if(pass === ""){
            errorMeseage.push(' "Contraseñas"');
        }

        if(errorMeseage.length === 1){
            pass = cryptoJs.SHA256(pass).toString();
            let params = {
                rut: gestRut.limpiaRut(rut),
                nombre: nom,
                correo:mail,
                password:pass
            }
            const con = new Connection();
            con.crear('/usuarios/new',params);
            toast.success("usuario "+nom+" creado con éxito",{autoClose:5000});     
        }else{
            let errM = '';
            for(let i=0;i<errorMeseage.length;i++){
            //  [0,1,2,3]
                if(i >= 2){
                    if(i !== errorMeseage.length-1){
                        errM = errM+","
                    }else{
                        errM = errM+" y"
                    }
                }
                errM = errM+errorMeseage[i];
            }
            errM = errM+'\n no pueden estar vacíos'
            console.log(errM)
            toast.error(errM,{position:"top-center",autoClose:5000})
        }
        
    }

    const [passOk,setPassOk] = useState(true);
    const [rutOk,setRutOk] = useState(true);
    //const [obligOk,setObligOk] = useState(false);
    
    return(
        <form className="m-3 p-3 bg-light rounded">
            <h3 className="text-center">¿Nuevo Usuario?</h3>
            <h4 className="text-center">Regístrate aquí</h4>
            <div className=" d-flex justify-content-center">
                <div className="mt-1 mb-1 input-group" style={{width:"75%"}}>
                    <div className="input-group-text">
                        <HiUser/>
                    </div>
                    <input className="form-control" placeholder="RUT" ref={rutRef} onChange={ev=>{
                        ev.preventDefault();
                        setRutOk(gestRut.validaRut(gestRut.limpiaRut(rutRef.current.value)));
                        //console.log(limpiaRut(rutRef.current.value));
                        
                        
                    }}/>
                </div>
            </div>
            
            <div className="d-flex justify-content-center">
                <p className="text-danger text-center me-1 ms-1" hidden={rutOk}>El RUT no es valido</p>
                <p className="text-danger text-center me-1 ms-1" hidden={!ocupado}>El usuario ya existe</p>
            </div>
            <div className=" d-flex justify-content-center">
                <div className="mt-1 mb-1 input-group"  style={{width:"75%"}}>
                    <div className="input-group-text">
                        <HiUser/>
                    </div>
                    <input className="form-control" placeholder="Nombre" ref={nomRef}/>
                </div>
            </div>
            <div className=" d-flex justify-content-center">
                <div className="mt-1 mb-1 input-group" style={{width:"75%"}}>
                    <div className="input-group-text">
                        <HiMail/>
                    </div>
                    <input className="form-control" placeholder="Correo" ref={mailRef} type="email"/>
                </div>
            </div>
            <div className=" d-flex justify-content-center">
                <div className="mt-1 mb-1 input-group" style={{width:"75%"}}>
                    <div className="input-group-text">
                        <HiLockClosed />
                    </div>
                    <input className="form-control" placeholder="Contraseña" ref={passRef} type={!view? "text":"password"}/>
                    <div className="input-group-text">
                        <div role="button" onClick={ev=>{ev.preventDefault();setView(!view);}}>{view ? (<HiEye/>):(<HiEyeOff/>)}</div>
                    </div>
                </div>
            </div>
            <div className=" d-flex justify-content-center">
                <div className="mt-1 mb-1 input-group" style={{width:"75%"}}>
                    <div className="input-group-text">
                        <HiLockClosed />
                    </div>
                    <input className="form-control" onChange={
                        ev=>{
                            ev.preventDefault();
                            if(passRef.current.value !== pass2Ref.current.value){
                                setPassOk(false);
                            }else{
                                setPassOk(true);
                            }
                        }
                    } placeholder="Confirma la contraseña" ref={pass2Ref} type={!view2? "text":"password"}/>
                    <div className="input-group-text">
                        <div role="button" onClick={ev=>{ev.preventDefault();setView2(!view2);}}>{view2 ? (<HiEye/>):(<HiEyeOff/>)}</div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <p className="text-danger text-center" hidden={passOk}>las contraseñas no coinciden</p>
            </div>
            <div className="mt-1 mb-1 d-flex justify-content-center">
                <button onClick={
                    ev=>{
                        ev.preventDefault();
                        if((passOk && rutOk)){
                            crear(
                                rutRef.current.value,
                                nomRef.current.value,
                                mailRef.current.value,
                                passRef.current.value
                            );
                        }else{
                            toast.error("Hay campos inválidos",{position:'top-center',autoClose:5000});
                        }
                    }
                } className="btn btn-primary btn-lg">Registrar</button>
            </div>
        </form>
    )
}
/**
 * 
            <div className="mt-1 mb-1 d-flex justify-content-center">
                <input placeholder="Apellido" ref={apeRef} style={{width:"75%"}}/>
            </div>
            <div className="mt-1 mb-1 d-flex justify-content-center">
                <input placeholder="Nombre de usuario (Opcional)" ref={nusRef} style={{width:"75%"}}/>
            </div>
 */
export default NewUser