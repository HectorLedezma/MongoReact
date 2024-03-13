import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

function OneString(){
    const oneRef = useRef();
    return (
        <div className="d-flex justify-content-center input-group border border-primary rounded">
            <input ref={oneRef} className="form-control" placeholder="ID de sala" type="text"/>
            <div className="input-group-text" role="button">
                <FaSearch/>
            </div>
        </div>
    )
}

export default OneString;