import { useState } from "react"
import NewUser from "../Components/Nuevo";
import OldUser from "../Components/Antiguo";

import '../Styles/responsive.css'
import '../Styles/colors.css'

function Login(){
    const AntiguoUsuario = () =>{
        return(
            <div className="">
                <div className="d-flex justify-content-center">
                    <h6>¿Ya tienes tu cuenta?</h6>
                </div>
                <div className="d-flex justify-content-center">
                    <p className="d-flex justify-content-center">
                        Inicia sesión
                    </p>
                    <p role="button" className="ms-1 link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                        onClick={ev=>{
                            ev.preventDefault();
                            console.log('Inicia sesión');
                            cambio();
                        }}
                    >
                        aqui
                    </p>
                </div>
            </div>
        )
    }

    const NuevoUsuario = () =>{
        return(
            <div className="">
                <div className="d-flex justify-content-center">
                    <h6>¿Primera vez en el sitio?</h6>
                </div>
                <div className="d-flex justify-content-center">
                    <p className="d-flex justify-content-center">
                        {'Crea una cuenta'}
                    </p>
                    <p role="button" className="ms-1 link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                        onClick={ev=>{
                            ev.preventDefault();
                            cambio();
                        }}
                    >
                        {'aqui'}
                    </p>
                </div>
            </div>
        )
    }

    const [active,setActive] = useState(true);
    const [footer,setFooter] = useState(<NuevoUsuario/>)

    const cambio = () =>{
        setActive((prevActive) => {
            const nuevoEstado = !prevActive;
            setFooter(nuevoEstado ? <NuevoUsuario /> : <AntiguoUsuario />);
            return nuevoEstado;
        });
    }

    return(
        <div className="login-page">
            <div className="carousel-inner">
                <div className={`carousel-item ${active ? 'active' : ''}`}>
                    <OldUser/>
                    
                </div>
                <div className={`carousel-item ${!active ? 'active' : ''}`}>
                    <NewUser/>
                    
                </div>

            </div>
            <div id="carouselExample" className="login-footer bg-light mt-n1 carousel d-flex justify-content-center">
                {footer}
            </div>
        </div>
    )
}

export default Login