import { Navigate, Outlet } from "react-router-dom"

function RouteCare(active,RPath = '/login'){
    if(!active){
        return (<Navigate to={RPath} replace/>)
    }
    return (<Outlet/>)
}

export default RouteCare