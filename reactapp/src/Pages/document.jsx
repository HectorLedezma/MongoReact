import { useEffect, useState } from "react"
import { Connection } from "../Connection/connection";

import { LuTreeDeciduous } from "react-icons/lu";
import { GiFruitBowl } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { FaThermometerHalf } from "react-icons/fa";

import '../Styles/colors.css'
import '../Styles/responsive.css'
import '../Styles/borders.css'
import { useNavigate } from "react-router-dom";

function Documents(props){
    const navi = useNavigate();
    const [load,SetLoad] = useState(false);
    const [render,SetRender] = useState(
        <div className="d-flex justify-content-center">
            <h1 className="text-light" key="0">Cargando</h1>
        </div>
    )

    const ListaNombres = (list) =>{
        let elementList = [];
        list.forEach(element => {
            elementList.push(
                <li key={element}>{element}</li>
            )
        });
        return(
            <ul>{elementList}</ul>
        )
    }

    useEffect(()=>{
        if(!load){
            CargaDatos();
        }

    })

    const CargaDatos = () =>{
        const con = new Connection();
        try {
            con.AllDataPlant({"_id":props.id}).then(doc=>{
                SetRender(
                    <div className="document-page">
                        <div className="d-flex justify-content-center">
                            <h1 className="">{doc.nombre_cientifico}</h1>
                        </div>
                        <div className="doc-body m-3 p-3 justify-content-center">
                            <div className="d-flex justify-content-center m-3">
                                <img className="doc-image rounded" src={doc.image} alt={doc.nombre_cientifico} />
                            </div>
                            <div className="doc-ficha m-3 d-flex flex-wrap justify-content-start">
                                <div className="doc-field m-3">
                                    <h5 className="ms-2"><LuTreeDeciduous />Nombres comunes:</h5>
                                    {ListaNombres(doc.nombre_comun)}
                                </div>
                                <div className="doc-field m-3">
                                    <h5 className="ms-2"><GiFruitBowl />Partes comestibles:</h5>
                                    {ListaNombres(doc.comestible)}
                                </div>
                                <div className="doc-field d-flex m-3">
                                    <div className="d-flex align-items-center">
                                        <h5 className="ms-2"><BiWorld />Origen:</h5>
                                        <label className="ms-2 mb-1">{doc.origen}</label>
                                    </div>
                                </div>
                                <div className="doc-field m-3">
                                    <h5 className="ms-2"><FaThermometerHalf />Condiciones climaticas:</h5>
                                    <ul>
                                        <li>
                                            {"Minimo: "+doc.temperatura.minimo+"°C"}
                                        </li>
                                        <li>
                                            {"Minimo: "+doc.temperatura.maximo+"°C"}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                SetLoad(true);
            }).catch(()=>{
                SetRender(
                    <div className="document-page">
                        <div id="liveAlertPlaceholder">
                            <div>
                            </div>
                            <div>
                                <div class="alert alert-danger alert-dismissible" role="alert">   
                                <div>
                                    Documento no encontraldo
                                </div>
                                <button 
                                    type="button" 
                                    class="btn-close" 
                                    data-bs-dismiss="alert" 
                                    aria-label="Close"
                                    onClick={ev=>{
                                        ev.preventDefault();
                                        navi('/');
                                    }}
                                >
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })   
        } catch (error) {
            navi('/')
        }
    }

    return(
        <div>
            {render}
        </div>
    )
}

export default Documents