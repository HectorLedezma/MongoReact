import { useRef, useState } from "react";
import { Connection } from "../Connection/connection";




function DjangoTest(){

    const [result,SetResult] = useState(<div></div>);
    const bodyContent = useRef();

    const sendData = (data) =>{
        console.log(data.value);
        const con = new Connection();

        con.ConsulPost({"content":data.value}).then(res=>{
            SetResult(
                <div>
                    <p>{res}</p>
                </div>
            );
        }).catch(ex=>{
            SetResult(
                <div>
                    <p className="text-danger">{ex}</p>
                </div>
            );
        });
    }


    return(
        <div>
            <form onSubmit={ev=>{
                ev.preventDefault();
                sendData(bodyContent.current);
            }}>
                <label>Body Content:</label>
                <input ref={bodyContent} type="text" placeholder="Body Content"/>
                <button type="submit">Ingresar</button>
            </form>
            <div>
                {result}
            </div>
        </div>
    )
}

export default DjangoTest