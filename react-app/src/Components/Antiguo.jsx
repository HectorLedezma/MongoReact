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
            <div className="mt-3 mb-3 d-flex justify-content-center">
                <button className="btn btn-primary btn-lg">Ingresar</button>
            </div>
            <div className="mt-3 d-flex justify-content-center">
                <h6>¿Olvidaste tu contraseña?</h6>
            </div>
            <div className="mb-3 d-flex justify-content-center">
                <p role="button" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Recupera aquí</p>
            </div>
        </form>
    )
}

export default OldUser