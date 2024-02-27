function Table(props){
    //Docs(JSONs)
    //Keys => Value (JSON, Dato, Array)
    /*
    let doc = []
    for(let i = 0;i<props.data.length;i++){//documentos
        let cam = []
        for (const key in props.data[i]) {
            if (props.data[i].hasOwnProperty(key)) {
                try {
                    cam.push(<h1>{key + ' : '}{props.data[i][key]}</h1>)    
                } catch (error) {
                    console.log('No se pudo mostrar: ',key)   
                }
                //console.log(key + ':', props.data[i][key]);
            }
        }
        doc.push(<div key={i} className="m-3 border p-3">{cam}</div>)
    }
    */


    
    try {
        const encabezados = Object.keys(props.data[0])
        return(
            <table className="table">
                <thead>
                    <tr>
                        {encabezados.map((encabezado) => (
                            <th key={encabezado}>{encabezado}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((fila) => (
                    <tr key={fila.id}>
                        {encabezados.map((encabezado) => (
                        <td key={encabezado}>
                            {Array.isArray(fila[encabezado])
                            ? fila[encabezado].join(', ')
                            : fila[encabezado]}
                        </td>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>
        )
    } catch (error) {
        return(<div></div>)
    }
    
}

export default Table