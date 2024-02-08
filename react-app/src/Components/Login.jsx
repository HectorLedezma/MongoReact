import { useState } from "react"
import NewUser from "./Nuevo";
import OldUser from "./Antiguo";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function Login(){
    //const [textBtn,setTextBtn] = useState("Nuevo usuario?");
    //const [render,setRender] = useState(<OldUser/>);
    const [active,setActive] = useState(true);
    const [textTip,setTip] = useState("Usuario nuevo");
    const cambio = () =>{
        if(!active){
            setTip("Usuario nuevo")    
        }else{
            setTip("Usuario antiguo")
        }
        setActive(!active);
    }
    return(
        <div className="p-3">
            <div id="carouselExample" className="carousel slide d-flex">
                <OverlayTrigger placement="top" overlay={(<Tooltip id="tooltip">{textTip}</Tooltip>)}>
                    <button className="carousel-control-prev position-static" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" data-bs-toggle="tooltip" data-bs-title="Another tooltip" onClick={ev=>{
                            ev.preventDefault();
                            cambio();
                        }}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                </OverlayTrigger>
                <div className="carousel-inner">
                    <div className={`carousel-item ${active ? 'active' : ''}`}>
                        <OldUser/>
                    </div>
                    <div className={`carousel-item ${!active ? 'active' : ''}`}>
                        <NewUser/>
                    </div>
                </div>
                <OverlayTrigger placement="top" overlay={(<Tooltip id="tooltip">{textTip}</Tooltip>)}>
                    <button className="carousel-control-next position-static" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={ev=>{
                            ev.preventDefault();
                            cambio();
                        }}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </OverlayTrigger>
            </div>
            {/*
            <div className="d-flex justify-content-center">
                {render}
            </div>
            <div className="d-flex justify-content-center">
                <button 
                    className="btn btn-info btn-lg mb-3"
                    onClick={ev=>{
                        ev.preventDefault();
                        if(textBtn === "Nuevo usuario?"){
                            setTextBtn("Usuario antiguo?")
                            setRender(<NewUser/>)
                        }else{
                            setTextBtn("Nuevo usuario?")
                            setRender(<OldUser/>)
                        }
                    }}
                >
                    {textBtn}
                </button>
            </div>*/}
        </div>
    )
}

export default Login