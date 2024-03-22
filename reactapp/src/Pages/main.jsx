import {React, useEffect, useRef, useState} from 'react';
import {Outlet,NavLink,useLocation,useNavigate } from 'react-router-dom'
import PageProfile from '../Images/PageProfile.svg'
import { FaUser } from "react-icons/fa";
//import {Connection/*, TraeSala]*/} from '../Conection/connection';
//import Table from '../Components/table';
//import Paramets from '../Components/Parametros';
import Cookies from 'universal-cookie';
import Body from '../Components/Body';
import { Connection } from '../Conection/connection';

// style={{width:"100%"}}
function MainPage(props){
    const navi = useNavigate();
    const [navVal,setNavVal] = useState(0);
    const nav2 = useRef();
    const nav3 = useRef();

    //const [datos,setDatos] = useState([])

    /*const EvalNav = (navList) =>{
        console.log(navList.hidden)
        console.log(navList.inert)
        console.log(navList.isConnected)
        console.log(navList.isContentEditable)
        console.log(navList.spellcheck)
        console.log(navList.translate)
        console.log('___')
        //for(let i = 0; i<navList.length; i++){
        //    console.log(navList[i])
        //}
    }*/


    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

/*
    const cargar = (route,params) =>{
        const conn = new Connection();//se establece conexión a la API

        let leer = conn.leerUno(route,params);// se llama la data de la DB en una promesa
        leer.then(data => {
            setDatos(data)
            console.log(data);//se imprime la data en la promesa
        })
        .catch(error => {
            console.error("Error al leer los datos:", error);
        });
    }
    <div>
                <h1>{rutaActual}</h1>
            </div>

                                    <NavLink onClick={
                                            ev=>{
                                                ev.preventDefault();
                                                setNavVal(1)
                                                //setDatos([])
                                                setTipo(0)
                                            }
                                        } 
                                    ref={nav0} 
                                    className={`text-black link-light nav-link me-1 ms-1 ${(navVal === 1) ? 'border rounded p-1 m-1' : ''}`}>
                                            Limpiar
                                    </NavLink>

                                    <NavLink onClick={
                                            ev=>{
                                                ev.preventDefault();
                                                setNavVal(2);
                                                //cargar('/usuarios/todo',{})
                                                setTipo(1)
                                            }
                                        } 
                                    ref={nav1} 
                                    className={`text-black link-light nav-link me-1 ms-1 ${(navVal === 2) ? 'border rounded p-1 m-1' : ''}`}>
                                            Usuarios
                                    </NavLink>
*/

    const location = useLocation();
    const cookie = new Cookies();
    const [logued,setLog] = useState(false);
    
    const cargaLog = () =>{
        const con = new Connection();
        con.log(cookie.get('UserToken')).then(loged =>{
            //console.log('logueado (main): ',loged);     
            setLog(loged)
        })
    }

    useEffect(()=>{
        const con = new Connection();
        con.log(cookie.get('UserToken')).then(loged =>{
            //console.log('logueado (main): ',loged);     
            setLog(loged)
        })
    })

    return(
        <div className='d-flex flex-column' style={{'minHeight':'100vh','margin':'0'}}>
            <header className='bg-primary p-2 d-flex align-items-center text-light'>
                
                <img alt="profile" className='border border-2 rounded-circle' src={PageProfile} style={{width:"100px"}}/>
                <div className='m-2 page-titulo' style={{width:"100%"}}>
                    <h1>Pagina de Prueba</h1>
                    <h3>encabezado de la pagina</h3>
                </div>

                <div className='ms-2 me-2'>
                    <nav className="navbar navbar-expand-lg bg-primary">
                        <div className="container-fluid justify-content-end">
                            
                            <button 
                                className="navbar-toggler " 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#navbarNavAltMarkup" 
                                aria-controls="navbarNavAltMarkup" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                                onClick={toggleNavbar}
                                >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            
                            <div 
                                className={`collapse navbar-collapse mt-2 fs-4 ${isOpen ? 'show' : ''}`} 
                                id="navbarNavAltMarkup"
                            >                
                                <div 
                                    className="
                                        nav-menu z-3
                                        navbar-nav 
                                        align-items-center 
                                        justify-content-end 
                                        bg-primary
                                    " 
                                >
                                    
                                    <NavLink onClick={
                                            ev=>{
                                                ev.preventDefault();
                                                setNavVal(3);
                                                navi('/salas')
                                            }
                                        } ref={nav2} 
                                        className={
                                            `
                                                text-black 
                                                link-light 
                                                nav-link 
                                                me-3 ms-3 
                                                ${(navVal === 3) ? 'border rounded p-1 m-1' : ''}
                                            `
                                        }>
                                            Salas
                                    </NavLink>

                                    <NavLink onClick={
                                            ev=>{
                                                ev.preventDefault();
                                                setNavVal(4);
                                                cargaLog();
                                                if(logued){
                                                    navi('/user')
                                                }else{
                                                    navi('/login')
                                                }
                                                
                                            }
                                        } 
                                    ref={nav3} 
                                    className={
                                        `
                                            text-black 
                                            link-light 
                                            nav-link 
                                            me-3 ms-3 
                                            d-flex 
                                            ${(navVal === 4) ? 'border rounded p-1 m-1' : ''}
                                        `
                                        }>
                                        {logued? "User":"Login"} <FaUser className='mt-2 ms-2' size={20}/>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                
            </header>
            
            <div className='bg-dark' style={{'flex':'1'}}>
                {/*<Paramets type={tipo}/>*/}
                <Body route={location.pathname}/>
            </div>
            <footer className='bg-info d-flex justify-content-center' style={{'height':'10%'}}>
                <p >Proyecto LeaService</p>
            </footer>
            <Outlet/>
        </div>
    )
}

export default MainPage;