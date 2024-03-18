
/*
    tintero:
        filtro de ocupado y todos
        color al texto
        campo de ocupados
*/


function SalaTag(props){
    const Implements = (list) =>{
        //console.log('list: ',list)
        let newList = [];
        for(let i = 0; i<list.length; i++){
            newList.push(
                <li>
                    <label><p className="me-2">{list[i].Cantidad}</p></label>
                    <label><p className="">{list[i].Objeto}</p></label>
                </li>
            )
        }
        //console.log('new list: ',newList)
        return newList;
    }

    const Implementos = Implements(props.data.Implementos);


    return(
        <div className="bg-light p-3 m-3 rounded border border-primary border-3" style={{width:'90%'}}>
            <div className="d-flex">
                <label className="me-2 fs-3 fw-bold text-primary-emphasis"><p>Sala:</p></label>
                <label className="fs-3"><p>{props.data.Numero}</p></label>
            </div>
            <div className="d-flex">
                <label className="me-2 fs-3 fw-bold text-primary-emphasis"><p>Ubicacion:</p></label>
                <div>
                    <div>
                        <label><p className="me-2 fs-3 fw-bold text-primary">Edificio:</p></label>
                        <label><p className="fs-3">{props.data.Ubicacion.Edificio}</p></label>
                    </div>
                    <div>
                        <label className="me-2 fs-3 fw-bold text-primary" ><p>Piso:</p></label>
                        <label className="fs-3"><p>{props.data.Ubicacion.Piso}</p></label>
                    </div>
                </div>
                
            </div>
            <div className="d-flex">
                <label className="me-2 fs-3 fw-bold text-primary-emphasis"><p>En uso:</p></label>
                <label className="fs-3"><p className={props.data.Ocupada? 'text-danger':'text-success'}>{props.data.Ocupada? 'Si':'No'}</p></label>
            </div>
            <div className="d-flex">
                <label className="me-2 fs-3 fw-bold text-primary-emphasis"><p>Implementos:</p></label>
                <ul className="fs-3">
                    {Implementos}
                </ul>
            </div>
        </div>
    )
}

export default SalaTag;