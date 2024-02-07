
import { useEffect, useState } from "react";

import axios from "axios";
const uri = "http://localhost:8000/data/"

export class Connection {
    constructor(){
        this.blog = [];
    }
    async crear(coll,params){
        try {
            await axios.post(uri+coll,params)
        } catch (error) {
            console.log(error)
        }
    }
    async leer(col){
        
        try {
            const res = await axios.get(uri+col);
            //console.log(res)
            this.blog = res.data;
        } catch (error) {
            this.blog = String(error);
        }
        return this.blog
    }
    async leerUno(col,params){
        
        try {
            //const req = await axios.request(bod)
            const res = await axios.post(uri+col,params);
            this.blog = res.data;
        } catch (error) {
            this.blog = String(error);
        }
        return this.blog
    }
}


export const TraeSala = ()=>{
    const [lis,setLis] = useState([{}]);
    //const [dat,setDat] = useState(<BiciList rut={props.rut} data={lis}/>);
    useEffect(()=>{
        Traelista();
        
    });

    function esperar(tiempo) {
        return new Promise(resolve => {
          setTimeout(resolve, tiempo);
        });
      }

    const Traelista = async()=>{
        try{
            const res = await axios.get(`${uri}salas`);
            await esperar(250);
            setLis(res.data);
        }catch(error){
            console.log(error)
        }
    }

    return lis
}


