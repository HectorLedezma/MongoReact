
import { useEffect, useState } from "react";

import axios from "axios";
const uri = "http://localhost:8000/"

export class Connection {
    constructor(){
        this.blog = [];
    }

    async login(params){
        try {
            await axios.get(uri+"data/login",params);
        } catch (error) {
            console.log(error)
        }
    }

    async log(params){
        try {
            return (await axios.get(uri+"data/usuario/token",{headers:{'token':params}})).data;
        } catch (error) {
            return false;
        }
    }

    async logout(params){
        try {
            await axios.post(uri+'data/logout',params)   
        } catch (error) {
            console.log(error)
        }
    }

    async crear(coll,params){
        try {
            await axios.post(uri+"data/"+coll,params)
        } catch (error) {
            console.log(error)
        }
    }
    async leer(col){
        
        try {
            const res = await axios.get(uri+"data/"+col);
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
            const res = await axios.post(uri+"data/"+col,params);
            this.blog = res.data;
        } catch (error) {
            this.blog = String(error);
        }
        return this.blog
    }
    async leerSiHay(col,params){
        
        try {
            //const req = await axios.request(bod)
            const res = await axios.post(uri+"data/"+col,params);
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


