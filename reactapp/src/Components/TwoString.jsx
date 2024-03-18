import { useRef } from "react";
import { FaSearch } from "react-icons/fa";


function TwoString(){
    const twoRef = useRef();
    const threeRef = useRef();
    
    return (
        <div>
            <div className="mb-2 d-flex justify-content-center input-group border border-primary rounded">
                <input ref={twoRef} className="form-control" placeholder="Edificio" type="text"/>
            </div>
            <div className="mt-2 mb-2 d-flex justify-content-center input-group border border-primary rounded">
                <input ref={threeRef} className="form-control" placeholder="Piso" type="text"/>
            </div>
            <div className="mt-2 row justify-content-center">
                <button className="btn btn-primary btn-lg" type="submit" style={{width:'20%'}}>
                    Buscar<FaSearch className="ms-2"/>
                </button>
            </div>
        </div>
    )
}

export default TwoString;