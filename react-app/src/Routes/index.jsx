import React from 'react';
import {Routes,Route } from 'react-router-dom'
import Login from '../Pages/login';
import MainPage from '../Pages/main';

function Rutas(){
    return(
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<MainPage/>}/>
        </Routes>
    )
}

export default Rutas;