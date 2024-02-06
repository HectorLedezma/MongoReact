import { useRef, useState } from "react";

function BuscaUser(){
    const [tags,setTags] = useState([])
    const tagRef = useRef();
    const nomRef = useRef();
    const apeRef = useRef();
    const rutRef = useRef();
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
                            //ev.preventDefault();
                            togInteres();
                            //setInte(!listInt);
                            setTags(tags.concat(
                                [
                                    <label 
                                        key={"tagInter_"+intereses[i]} 
                                        className="btn bg-info ms-3 p-1 border rounded"
                                        onClick={ev=>{
                                            ev.preventDefault();
                                            setTags(tags.filter(tag=>tag.key !== "tagInter_"+intereses[i]))
                                            console.log('eliminando: '+intereses[i])
                                            setIntereses(intereses.concat(intereses[i]))
                                        }}
                                    >
                                        {intereses[i]}
                                    </label>
                                ]
                            ))
                            setIntereses(intereses.filter(interes => interes !== intereses[i]));
                            //console.log(intereses)
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
    return(
        <form className="p-3">
            <div className="mb-2">
                <label style={{width:"50%"}}>{'Nombre: '}</label>
                <input ref={nomRef} type="text" style={{width:"50%"}}/>
            </div>
            <div className="mb-2">
                <label style={{width:"50%"}}>{'Apellido: '}</label>
                <input ref={apeRef} type="text" style={{width:"50%"}}/>
            </div>
            <div className="mb-2">
                <label style={{width:"50%"}}>{'RUT: '}</label>
                <input ref={rutRef} className="input" type="text" style={{width:"50%"}}/>
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
            <div className="d-flex justify-content-center">
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={ev=>{
                        ev.preventDefault();
                        let tags = [];
                        for(let i = 0;i<tagRef.current.childNodes.length;i++){
                            tags.push(tagRef.current.childNodes[i].childNodes[0].nodeValue);
                        }
                        
                        let params = {};
                        if(nomRef.current.value !== ""){
                            params["nombre"] = nomRef.current.value;
                        }
                        if(nomRef.current.value !== ""){
                            params["apellido"] = apeRef.current.value;
                        }
                        if(rutRef.current.value !== ""){
                            params["rut"] = rutRef.current.value;
                        }
                        if(tags.length !== 0){
                            params["intereses"] = tags;
                        }
                        console.log({params});
                    }}
                >
                    Buscar
                </button>
            </div>
        </form>
    );
}

export default BuscaUser