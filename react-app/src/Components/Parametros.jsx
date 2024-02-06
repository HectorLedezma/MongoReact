//import { useState } from "react";

import { useState } from "react";


function Paramets(props){
    
    const [tags,setTags] = useState([<div/>])

    const inteList = () =>{
        const intereses = ["ciencia","tecnología","salud","social","psicología","política","recreación","innovación","negocios","deporte"];
        let Ilist = [];
        for(let i = 0; i<intereses.length;i++){
            Ilist.push(
                <li 
                    className="dropdown-item"
                    role="button"
                    onClick={
                        ev=>{
                            ev.preventDefault();
                            
                            togInteres();
                            setTags(tags.concat([<label className="bg-info me-3 mt-3 p-1 border rounded">{intereses[i]}</label>]))
                        }
                    }
                >
                    {intereses[i]}
                </li>
            )
        }
        return Ilist;
    }
    
    const [listInt,setInte] = useState(false);
    const togInteres = () =>{
        setInte(!listInt);
    }


    switch (props.type) {
        case 1://Usuarios
            return(
                <form className="p-3">
                    <div className="mb-2">
                        <label style={{width:"50%"}}>{'Nombre: '}</label>
                        <input type="text" style={{width:"50%"}}/>
                    </div>
                    <div className="mb-2">
                        <label style={{width:"50%"}}>{'Apellido: '}</label>
                        <input type="text" style={{width:"50%"}}/>
                    </div>
                    <div className="mb-2">
                        <label style={{width:"50%"}}>{'RUT: '}</label>
                        <input className="input" type="text" style={{width:"50%"}}/>
                    </div>
                    <div className="mb-2">
                        <div className="dropdown">
                            <button onClick={togInteres} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">
                                Intereses
                            </button>
                            <ul className={`dropdown-menu dropdown-menu-dark ${listInt ? 'show' : ''}`}>
                                {inteList()}
                            </ul>
                        </div>
                        <div>{tags}</div>
                    </div>
                </form>
            );
        case 2://Salas
            return(
                <form>
                    <label>Numero</label>
                    <input type="text"/>
                </form>
            );
        default:
            break;
    }
}

export default Paramets