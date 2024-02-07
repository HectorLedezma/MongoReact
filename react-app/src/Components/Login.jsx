import { useState } from "react"
import NewUser from "./Nuevo";
import OldUser from "./Antiguo";

function Login(){
    //const [textBtn,setTextBtn] = useState("Nuevo usuario?");
    //const [render,setRender] = useState(<OldUser/>);
    const [active,setActive] = useState(true);
    return(
        <div className="p-3">
            <div id="carouselExample" className="carousel slide d-flex">
                <button className="carousel-control-prev position-static" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={ev=>{
                        ev.preventDefault();
                        setActive(!active);
                    }}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <div className="carousel-inner">
                    <div className={`carousel-item ${active ? 'active' : ''}`}>
                        <OldUser/>
                    </div>
                    <div className={`carousel-item ${!active ? 'active' : ''}`}>
                        <NewUser/>
                    </div>
                </div>
                <button className="carousel-control-next position-static" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={ev=>{
                        ev.preventDefault();
                        setActive(!active);
                    }}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
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