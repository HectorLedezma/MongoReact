import React from "react";
import { Outlet } from "react-router-dom";

function Login(){
    return (
        <div className="">
            <h1>Hola inmundo</h1>
            <Outlet/>
        </div>
    )
}

export default Login;