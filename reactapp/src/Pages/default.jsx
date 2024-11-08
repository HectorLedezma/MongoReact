import { useEffect, useState } from "react";
import { Connection } from "../Connection/connection";
import '../Styles/colors.css';
import '../Styles/responsive.css'
import '../Styles/borders.css'
import '../Styles/functions.css'
import { Outlet, useNavigate } from "react-router-dom";

function Default(){

    const [data,SetData] = useState([<h1 key="0">Cargando</h1>]);
    const [loaded,SetLoad] = useState(false);
    const navi = useNavigate();

    useEffect(()=>{
        if(!loaded){
            EnsamblaData();
        }
    });

    const EnsamblaData = () =>{
        const con = new Connection();

        const nombre_comun = (lista) =>{
            const i = Math.floor(Math.random() * lista.length)
            return (
                <h3 className="me-3 ms-3 mt-2 mb-2" key={lista[i]}>
                    {lista[i]}
                </h3>
            );
        }

        con.resumenPlant().then(result=>{
            let list = [];
            result.forEach(d=>{
                list.push(
                    <div className="plant-card border-3 rounded m-3" key={d._id} onClick={ev=>{
                        ev.preventDefault();
                        navi('/document/'+d._id);
                    }}>
                        <div className="d-flex justify-content-center">
                            {nombre_comun(d.nombre_comun)}
                        </div>
                        <div className="d-flex justify-content-center">
                            <img className="plant-image m-3 rounded" src={d.image} alt={d.nombre_cientifico} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <h5 className="me-3 ms-3">
                                {d.nombre_cientifico}
                            </h5>
                        </div>
                    </div>
                )
            })
            //return list;
            SetData(list);
            SetLoad(true);
        }).catch(e=>{
            console.log(e);
            SetData([<h1 className="text-ligth" key="1">Hubo un Problema al cargar los datos</h1>]);
        });

    }

    return(
        <div className="d-flex flex-wrap justify-content-evenly">
            {data}
            <Outlet/>
        </div>
    )
}

export default Default;

