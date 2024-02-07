import cryptoJs from "crypto-js";
import { useRef, useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import { Connection } from "../Conection/connection";

function NewUser(){

    const rutRef = useRef();
    const nomRef = useRef();
    const mailRef = useRef();
    const passRef = useRef();
    const pass2Ref = useRef();

    function validaRut(rut){
        let ok = false;
        let spg = rut.replace(/[.-]/g, '');
        let snd = spg.slice(0, -1);
        let r_u_t = snd.split("")
        let t_u_r = r_u_t.reverse();
        let tur = t_u_r.join("");
        
        let multi = 2;
        let sum = 0;
        for(let i = 0;i<tur.length;i++){
            if(multi > 7){
                multi = 2;
            }
            //console.log(tur[i]);
            sum = sum+parseInt(tur[i]*multi);
            multi = multi+1;
        }
        
        let dv = 11-(sum%11);
        let dvu = rut[rut.length-1];
        if(dvu === 'k' || dvu === 'K'){
            dvu = dvu.toUpperCase();
        }
        //console.log('dvu: ',dvu);
        if(dv===11){
            dv = "0";
        }else if(dv === 10){
            dv="K";
        }
        //console.log('dv: ',dv);
        if(String(dv) === dvu){
            ok = true;
        }else{
            ok = false
        }
        return ok;
    }
    const [ocupado,setOcupado] = useState(false);
    function existe(rut){
        const con = new Connection();
        con.leerUno('/usuario/',{"rut":limpiaRut(rut)}).then(data=>{
            if(data !== null){
                setOcupado(true);
            }else{
                setOcupado(false);
            }
        })

    }

    function limpiaRut(rut){
        let spg = rut.replace(/[.-]/g, '');
        let snd = spg.slice(0, -1);
        let nRut = spg;
        if(spg[spg.length-1] === 'k' || spg[spg.length-1] === 'K'){
            nRut = snd + 'k';
        }
        return nRut;
    }

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
                rut: limpiaRut(rut),
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
            <div className="mt-1 mb-1 d-flex justify-content-center">
                <input placeholder="RUT" ref={rutRef} onChange={ev=>{
                    ev.preventDefault();
                    setRutOk(validaRut(rutRef.current.value))
                    //console.log(limpiaRut(rutRef.current.value));
                    existe(rutRef.current.value);
                }} style={{width:"75%"}}/>
            </div>
            <div className="d-flex justify-content-center">
                <p className="text-danger text-center" hidden={rutOk}>El RUT no es valido</p>
                <p className="text-danger text-center" hidden={!ocupado}>El usuario ya existe</p>
            </div>
            <div className="mt-1 mb-1 d-flex justify-content-center">
                <input placeholder="Nombre" ref={nomRef} style={{width:"75%"}}/>
            </div>
            <div className="mt-1 mb-1 d-flex justify-content-center">
                <input placeholder="Correo" ref={mailRef} type="email" style={{width:"75%"}}/>
            </div>
            <div className="mt-1 mb-1 d-flex justify-content-center">
                <input placeholder="Contraseña" ref={passRef} type="password" style={{width:"75%"}}/>
            </div>
            <div className="mt-1 mb-1 d-flex justify-content-center">
                <input onChange={
                    ev=>{
                        ev.preventDefault();
                        if(passRef.current.value !== pass2Ref.current.value){
                            setPassOk(false);
                        }else{
                            setPassOk(true);
                        }
                    }
                } placeholder="Confirma la contraseña" ref={pass2Ref} type="password" style={{width:"75%"}}/>
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
            <ToastContainer autoClose={5000}/>
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