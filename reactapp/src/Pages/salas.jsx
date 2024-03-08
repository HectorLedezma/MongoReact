import { useEffect, useState } from "react";
import { Connection } from "../Conection/connection";
import SalaTag from "../Components/SalaTag";


function Salas(){
    const con = new Connection();
    const CreaList = (data) =>{
        //console.log('data: ',data);
        let lista = [];
        for(let i = 0;i<data.length;i++){
            lista.push(
                <SalaTag data={data[i]}/>
            )
        }
        //console.log('lista: ',lista);
        return lista;
    }
    const [data,setData] = useState([<div/>]);

    const CargaData = () =>{
        con.leerUno('sala',{"Ocupada":false}).then(datos=>{
            ///
            setData(CreaList(datos))
        })
    }

    useEffect(CargaData);

    return(//se puede mostrar la vista de las salas
        <div>
            {data}
        </div>
    )
}

export default Salas