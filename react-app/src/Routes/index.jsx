import React, { useState } from 'react';
import {Routes,Route } from 'react-router-dom'
import MainPage from '../Pages/main';
import RouteCare from '../Varios/RouteCare';
import Cookies from 'universal-cookie';

function Rutas(){
    //const RNG = Math.random() * (99999 - 10000) + 10000;
    const [log,setLog] = useState(false);
    const cookie = new Cookies;
    const isLoged = () =>{
        
    }

    return(
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/login' element={<MainPage/>}/>
            <Route element={<RouteCare active={cookie.get("UserRut") !== undefined}/>}>
                <Route path='/user' element={<MainPage/>}/>
            </Route>
            <Route path='/salas' element={<MainPage/>}/>
        </Routes>
    )
}

export default Rutas;