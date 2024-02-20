import Cookies from "universal-cookie";

function Profile(){
    return(<div>
        <h1 className="text-light">perfil de usuario</h1>
        <button 
            className="btn btn-primary"
            onClick={ev=>{
                ev.preventDefault();
                const cookie = new Cookies();
                console.log(cookie.get('UserRut'))
            }}
        >
            ver
        </button>
    </div>)
}

export default Profile