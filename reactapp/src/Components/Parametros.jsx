import BuscaUser from "./BuscaUser";
import Login from "./Login";

function Paramets(props){

    switch (props.type) {
        case 1://Usuarios
            return(<BuscaUser/>)
        case 2://Salas
            return(
                <form>
                    <label>Numero</label>
                    <input type="text"/>
                </form>
            );
        case 3:
            return(<Login/>)    
        default:
        break;
    }
}

export default Paramets