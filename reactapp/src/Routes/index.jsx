import React, { useState, useEffect } from 'react';
import {Routes,Route } from 'react-router-dom'
import MainPage from '../Pages/main';
import RouteCare from '../Varios/RouteCare';
import Cookies from 'universal-cookie';
import { Connection } from '../Conection/connection';

function Rutas(){
    const cookie = new Cookies;
    const [log,setLog] = useState(false);
    
    useEffect(()=>{
        const con = new Connection();
        con.log(cookie.get('UserToken')).then(loged =>{
            console.log('logueado: ',loged);
            setLog(loged)
        })
    })

    return(
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/login' element={<MainPage/>}/>
            <Route element={<RouteCare active={log}/>}>
                <Route path='/user' element={<MainPage/>}/>
            </Route>
            <Route path='/salas' element={<MainPage/>}/>
        </Routes>
    )
}

export default Rutas;