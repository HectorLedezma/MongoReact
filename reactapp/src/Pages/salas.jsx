import { useState } from "react";
//import { Connection } from "../Conection/connection";
//import SalaTag from "../Components/SalaSheet";
import { Dropdown } from "react-bootstrap";
import MultiString from "../Components/MultiString";
import TwoString from "../Components/TwoString";
import OneString from "../Components/OneString";


function Salas(){
/*
    const con = new Connection();

    const CreaList = (data) =>{
        //console.log('data: ',data);
        let lista = [];
        for(let i = 0;i<data.length;i++){
            lista.push(
                <SalaTag key={i} data={data[i]}/>
            )
        }
        //console.log('lista: ',lista);
        return lista;
    }
    
    const [data,setData] = useState([]);
    const [params,setParams] = useState({"Ocupada":false})
    const [title,setTitle] = useState(' desocupadas')
*/    
    const [droptitle,setDroptitile] = useState('Buscar por...');



    


    const [input,setInput] = useState(<OneString/>);
/*
    function esperar(tiempo) {
        return new Promise(resolve => {
          setTimeout(resolve, tiempo);
        });
      }

    const CargaData = () =>{

        con.leerUno('sala',params).then(datos=>{
            ///
            esperar(500)
            setData(CreaList(datos))
        })
    }
*/
    //useEffect(CargaData);

    return(//se puede mostrar la vista de las salas
        <div className="row justify-content-center">
            <div className="d-flex justify-content-center m-3">
                <Dropdown className="ms-3 me-3">
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {droptitle}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={ev=>{
                            ev.preventDefault();
                            setDroptitile('Identificador');
                            setInput(<OneString/>);
                        }}>Identificador</Dropdown.Item>
                        <Dropdown.Item onClick={ev=>{
                            ev.preventDefault();
                            setDroptitile('Ubicacion');
                            setInput(<TwoString/>);
                        }}>Ubicación</Dropdown.Item>
                        <Dropdown.Item onClick={ev=>{
                            ev.preventDefault();
                            setDroptitile('Implementos');
                            setInput(<MultiString/>);
                        }}>Implementos</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div style={{width:'175vh'}}>
                    {input}
                </div>
            </div>
            <h1 className="text-light text-center m-3">Listado de salas{/*title*/}</h1>
            {/*data*/}
        </div>
    )
}

export default Salas