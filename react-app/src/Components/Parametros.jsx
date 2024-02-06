import BuscaUser from "./BuscaUser";


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
        default:
            break;
    }
}

export default Paramets