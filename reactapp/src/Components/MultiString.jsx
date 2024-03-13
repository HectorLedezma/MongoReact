import { useRef, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";



function MultiString(){
    const objRef = useRef();
    const cantRef = useRef();

    const [tags,setTags] = useState([])

    const buscaKeys = (obj,cant) => {
        let newCant = cant;
        for(let i = 0; i< tags.length;i++){
            console.log(tags[i].props.obj,obj);
            if(tags[i].props.obj === obj){
                console.log('coinside')
                newCant = Number(tags[i].props.cant)+Number(cant)+"";
                tags.splice(i,1);
            }
        }
        console.log('newKey:',obj+' x'+newCant);
        return(
            <div key={obj+' x'+newCant} obj={obj} cant={newCant} className="bg-info m-2 p-1 rounded">
                <label className="d-flex">{obj+' x'+newCant} 
                    <MdDelete 
                        className="ms-1 text-danger col align-self-center" 
                        size={25} 
                        role="button" 
                        title="Quitar" 
                        onClick={ev=>{
                            ev.preventDefault();
                            Quitar(obj);
                        }}
                    />
                </label>
            </div>
        )
    }

    const Agregar = (obj,cant) =>{
        if(obj !== '' && cant !== ''){
            try {
                const prevComp = buscaKeys(obj,cant);
                
                setTags(
                    tags.concat([prevComp])
                );
       
            } catch (error) {
                console.log('error de key: ',error)
            }
            objRef.current.value = '';
            cantRef.current.value = '';
        }

    }
    const Quitar = (obj) =>{
        console.log('quitando ',obj)
        setTags((prevTags) => {
            const updatedTags = [...prevTags];
            for(let i = 0;i<updatedTags.length;i++){
                if(updatedTags[i].props.obj === obj){
                    updatedTags.splice(i, 1);
                    console.log(obj,' quitado');
                }
            }
            console.log(updatedTags)
            return updatedTags;
        });
    }

    const checkNumber = (input) =>{
        //console.log('funcion checkeo')
        const nums = ['0','1','2','3','4','5','6','7','8','9'];
        
        if(!nums.includes(input[input.length-1])){
            //console.log(intput);
            input = input.substring(0, input.length - 1);
        }
        //console.log(input);
        cantRef.current.value = input;
        //return input
    }
    

    return (<div>
        
        <div className="bg-light p-3 rounded me-2 ms-2">
            
            <div className="mb-2 d-flex justify-content-center input-group border border-primary rounded">
                <input ref={objRef} className="form-control" 
                placeholder="Objeto" type="text"/>
            </div>

            <div className="mt-2 mb-2 d-flex justify-content-center input-group border border-primary rounded">
                <input ref={cantRef} onChange={ev=>{ev.preventDefault();
                checkNumber(cantRef.current.value)}} className="form-control" 
                placeholder="Cantidad" title="Ingrese solo números" required/>
            </div>
            
        </div>

        <div className="d-flex justify-content-center">
            {tags}
        </div>

        <div className="mt-2 row justify-content-center">
            <button className="btn btn-primary me-3" style={{width:'20%'}}
            onClick={ev=>{
                ev.preventDefault();
                Agregar(objRef.current.value,cantRef.current.value);
                
            }}
            >Agregar <FaPlus className="ms-2"/></button>

            <button className="btn btn-primary ms-3" style={{width:'20%'}}
            onClick={ev=>{
                ev.preventDefault();
                console.log(tags);
            }}
            >Buscar <FaSearch className="ms-2"/></button>
        </div>
    </div>);
}

export default MultiString;