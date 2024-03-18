import { FaSearch } from "react-icons/fa";

function OneString(){
    return (
        <div>
            <div className="d-flex justify-content-center input-group border border-primary rounded">
                <input className="form-control" placeholder="ID de sala" type="text"/>
            </div>
            <div className="mt-2 row justify-content-center">
                <button 
                    className="btn btn-primary btn-lg" 
                    type="submit" 
                    style={{width:'20%'}}
                >
                    Buscar<FaSearch className="ms-2"/>
                </button>
            </div>
        </div>
    )
}

export default OneString;