import { MdDelete } from "react-icons/md";


function SalaTag(props){
    return (
        <div key={props.prevKey} obj={props.obj} cant={props.cant} className="bg-info m-2 p-1 rounded">
            <label className="d-flex">{props.obj+' x'+props.cant} 
                <MdDelete 
                    className="ms-1 text-danger col align-self-center" 
                    size={25} 
                    role="button" 
                    title="Quitar" 
                />
            </label>
        </div>
    )
}

export default SalaTag