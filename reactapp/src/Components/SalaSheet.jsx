
/*
    tintero:
        filtro de ocupado y todos
        color al texto
        campo de ocupados
*/

import { FaBuilding, FaCheck, FaDoorOpen } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdElevator, MdEmojiObjects, MdEventBusy } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { CgSandClock } from "react-icons/cg";


function SalaTag(props){
    const Implements = (list) =>{
        //console.log('list: ',list)
        
            let newList = [];
            try {
                for(let i = 0; i<list.length; i++){
                    newList.push(
                        <li key={list[i].Objeto+" x"+list[i].Cantidad}>
                            <label><p className="me-2">{list[i].Cantidad}</p></label>
                            <label><p className="">{list[i].Objeto}</p></label>
                        </li>
                    )
                }   
            } catch (error) {
                
            }
            //console.log('new list: ',newList)
            return newList;    
        
        
    }

    const Implementos = Implements(props.data.Implementos);

    try {
        return(
            <div className="bg-light p-3 m-3 rounded border border-primary border-3" style={{width:'90%'}}>
                <div className="d-flex justify-content-around">
                    <div className="d-flex me-3">
                        <label className="me-2 fs-3 fw-bold text-primary-emphasis"><p><FaDoorOpen className="me-1 pb-2"/>Sala:</p></label>
                        <label className="fs-3"><p>{props.data.Identificador}</p></label>
                    </div>
                    <div className="d-flex me-3 ms-3">
                        <label className="me-2 fs-3 fw-bold text-primary-emphasis"><p><FaLocationDot className="me-1 pb-2"/>Ubicacion:</p></label>
                        <div>
                            <div>
                                <label><p className="me-2 fs-3 fw-bold text-primary"> <FaBuilding className="me-1 pb-2"/>Edificio:</p></label>
                                <label><p className="fs-3">{props.data.Edificio}</p></label>
                            </div>
                            <div>
                                <label className="me-2 fs-3 fw-bold text-primary" ><p><MdElevator className="pb-1"/> Piso:</p></label>
                                <label className="fs-3"><p>{props.data.Piso}</p></label>
                            </div>
                        </div>
                        
                    </div>
                    <div className="d-flex ms-3">
                        <label className="me-2 fs-3 fw-bold text-primary-emphasis"><p><MdEventBusy className="me-2 pb-1"/>En uso:</p></label>
                        <label className="fs-3"><p className={props.data.Ocupada? 'text-danger':'text-success'}>{props.data.Ocupada? 'Si':'No'}{props.data.Ocupada? <ImCross className="ms-1"/>:<FaCheck className="ms-1"/>}</p></label>
                    </div>
                </div>
                
                <div className="d-flex">
                    <label className="me-2 fs-3 fw-bold text-primary-emphasis"><p><MdEmojiObjects className="me-2 pb-1"/>Implementos:</p></label>
                    <ul className="fs-3">
                        {Implementos}
                    </ul>
                </div>
            </div>
        )    
    } catch (error) {
        return (<label className="fs-3 fw-bold text-light text-center"><p><CgSandClock />Cargando...</p></label>)
    }
    
}

export default SalaTag;