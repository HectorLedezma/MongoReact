import { useEffect, useRef, useState } from "react";
//import { Connection } from "../Conection/connection";
//import SalaTag from "../Components/SalaSheet";
import { Dropdown, Form } from "react-bootstrap";
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
    
    
    
*/  
    const [data,setData] = useState([]);
    const [params,setParams] = useState({"Ocupada":false})
    const [title,setTitle] = useState(' desocupadas')
    const [droptitle,setDroptitile] = useState('Buscar por...');
    const One = (<OneString/>);
    const Two = (<TwoString/>);
    const Mul = (<MultiString/>);

    const [input,setInput] = useState(One);

    const [inputVal,setInputVal] = useState(0);
    
    const [isChecked, setIsChecked] = useState(false);

    const [inputNodes,setInputNodes] = useState([]);

    const ConsultOne = (nodes) =>{
        console.log(nodes[0].childNodes[0].value);
        setParams({"Numero":nodes[0].childNodes[0].value})
    }
    const ConsultTwo = (nodes) =>{
        console.log(nodes[0].childNodes[0].value);
        console.log(nodes[1].childNodes[0].value);
    }
    const ConsultMulti = (nodes) =>{
        const list = nodes[1].childNodes;
        for(let i = 0;i<list.length;i++){
            console.log('Objeto:',list[i].attributes[0].value);
            console.log('Cantidad:',list[i].attributes[1].value);
            console.log(' ');

        }
        
    }

    const inputRef = useRef();

    const handleSwitchChange = () => {
        setIsChecked(!isChecked);
        if(isChecked){
            setTitle(' desocupadas');
        }else{
            setTitle('')
        }
    };


    function esperar(tiempo) {
        return new Promise(resolve => {
          setTimeout(resolve, tiempo);
        });
      }

    const ConsultBuild = (nodes) =>{
        try {
            setInputNodes(nodes);
            switch (inputVal) {
                case 0:
                    ConsultOne(nodes);
                    break;
                case 1:
                    ConsultTwo(nodes);
                    break;
                case 2:
                    ConsultMulti(nodes);
                    break;
                default:
                    break;
            }   
        } catch (error) {
            
        }
    }

    const CargaData = () =>{
        
        /*
        con.leerUno('sala',params).then(datos=>{
            ///
            esperar(500)
            setData(CreaList(datos))
        })
        */
    }

    useEffect(CargaData);


    
    return(//se puede mostrar la vista de las salas
        <div className="row justify-content-center">
            <div className="d-flex justify-content-center m-3">
                <div className="ms-3 me-3">
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            {droptitle}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={ev=>{
                                ev.preventDefault();
                                setDroptitile('Identificador');
                                setInput(One);
                                setInputVal(0);
                            }}>Identificador</Dropdown.Item>
                            <Dropdown.Item onClick={ev=>{
                                ev.preventDefault();
                                setDroptitile('Ubicacion');
                                setInput(Two);
                                setInputVal(1);
                            }}>Ubicación</Dropdown.Item>
                            <Dropdown.Item onClick={ev=>{
                                ev.preventDefault();
                                setDroptitile('Implementos');
                                setInput(Mul);
                                setInputVal(2);
                            }}>Implementos</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form>
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Incluir salas ocupadas"
                            className="text-light m-2"
                            checked={isChecked}
                            onChange={handleSwitchChange}
                        />
                    </Form>
                </div>
                <form style={{width:'175vh'}} ref={inputRef} onSubmit={ev=>{
                    ev.preventDefault();
                    //console.log('Submit \n',inputRef.current)
                    ConsultBuild(inputRef.current.childNodes[0].childNodes);
                }}>
                    {input}
                </form>
            </div>
            <h1 className="text-light text-center m-3">Listado de salas{title}</h1>
            {(data.length === 0)?<h2 className="text-info text-center m-3">No hay salas disponibles</h2>:data}
        </div>
    )
}

export default Salas