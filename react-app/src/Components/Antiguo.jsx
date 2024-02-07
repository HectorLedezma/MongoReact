function OldUser(){
    return(
        <form className="m-3 p-3 bg-light rounded">
            <h3 className="text-center">¿Ya tienes una cuenta?</h3>
            <h4 className="text-center">Ingresa aquí</h4>
            <div className="mt-3 mb-1 d-flex justify-content-center">
                <input style={{width:"75%"}} placeholder="Nombre de usuario" type="email"/>
            </div>
            <div className="mt-1 mb-3 d-flex justify-content-center">
                <input placeholder="Contraseña" style={{width:"75%"}} type="password"/>
            </div>
            <div className="mt-3 mb-1 d-flex justify-content-center">
                <button className="btn btn-primary btn-lg">Ingresar</button>
            </div>
        </form>
    )
}

export default OldUser