import { useRef, useState } from "react";


function Paramets(props){
    
    const [tags,setTags] = useState([])
    const tagRef = useRef();
    const [intereses,setIntereses] = useState(["ciencia","tecnología","salud","social","psicología","política","recreación","innovación","negocios","deporte"]);
    
    const [listInt,setInte] = useState(false);
    const togInteres = () =>{
        setInte(!listInt);
    }

    const inteList = () =>{
        let Ilist = [];
        for(let i = 0; i<intereses.length;i++){
            Ilist.push(
                <li 
                    className="dropdown-item"
                    role="button"
                    key={"liInter_"+i}
                    onClick={
                        ev=>{
                            ev.preventDefault();
                            //setInte(!listInt);
                            setTags(tags.concat(
                                [<label key={"tagInter_"+i} className="bg-info ms-3 p-1 border rounded">{intereses[i]}</label>]
                            ))
                            setIntereses(intereses.filter(interes => interes !== intereses[i]));
                            console.log(intereses)
                            setList(inteList())
                        }
                    }
                >
                    {intereses[i]}
                </li>
            )
        }
        return Ilist;
    }
    const [list,setList] = useState(inteList())

    


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
                    <div className="mb-2 d-flex text-center">
                        <div className="dropdown">
                            <button onClick={
                                ev=>{
                                    ev.preventDefault();
                                    togInteres();
                                    //console.log(intereses)
                                    setList(inteList())
                                }

                            } className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">
                                Intereses
                            </button>
                            <ul key="userInter" className={`dropdown-menu dropdown-menu-dark ${listInt ? 'show' : ''}`}>
                                {list}
                            </ul>
                        </div>
                        <div className="align-self-center" ref={tagRef}>{tags}</div>
                    </div>
                    <button type="button" className="btn btn-primary">Buscar</button>
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