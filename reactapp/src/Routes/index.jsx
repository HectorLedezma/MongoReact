import React, { useState, useEffect } from 'react';
import {Routes,Route, useParams } from 'react-router-dom'
import MainPage from '../Pages/main';
import RouteCare from '../Varios/RouteCare';
import Cookies from 'universal-cookie';
import { Connection } from '../Connection/connection';

function Rutas(){
    const cookie = new Cookies();
    const [log,setLog] = useState(false);
    
    useEffect(()=>{
        const con = new Connection();
        con.log(cookie.get('UserToken')).then(loged =>{
            //console.log('logueado: ',loged);
            setLog(loged)
        })
    });

    const MainID = () =>{
        let {id} = useParams();
        return <MainPage id={id}/>
    }

    return(
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/login' element={<MainPage/>}/>
            <Route element={<RouteCare active={log}/>}>
                <Route path='/user' element={<MainPage/>}/>
            </Route>
            <Route path='/salas' element={<MainPage/>}/>
            <Route path='/document'>
                <Route path=':id' element={<MainID/>}/>
            </Route>
        </Routes>
    )
}

export default Rutas;