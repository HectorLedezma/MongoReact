import {React, useRef, useState} from 'react';
import {Outlet,NavLink} from 'react-router-dom'
import PageProfile from '../Images/PageProfile.svg'
import { FaUser, FaSearch } from "react-icons/fa";
import {Connection/*, TraeSala]*/} from '../Conection/connection';
import Table from '../Components/table';
import Paramets from '../Components/Parametros';

// style={{width:"100%"}}
function MainPage(){
    const searchBtn = useRef();

    const [navVal,setNavVal] = useState(0);
    const nav0 = useRef();
    const nav1 = useRef();
    const nav2 = useRef();
    const nav3 = useRef();

    const [datos,setDatos] = useState([])

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

    //const buscaSalas = () =>{
    //    return 
    //}

    const searchSubmint = () =>{
        console.log(searchBtn.current.value)
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const [tipo,setTipo] = useState(0);

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

    return(
        <div>
            <header className='bg-primary p-2 d-flex align-items-center text-light'>
                <img alt="profile" className='border border-2 rounded-circle' src={PageProfile} style={{width:"100px"}}/>
                <div className='m-2 page-titulo'>
                    <h1>Pagina de Prueba</h1>
                    <h3>encabezado de la pagina</h3>
                </div>
                <div className='ms-2 me-2' style={{width:"100%"}}>
                    <nav className="navbar navbar-expand-lg bg-primary">
                        <div className="container-fluid">
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
                                <form onSubmit={ev=>{
                                    ev.preventDefault();
                                    searchSubmint();
                                }} className='input-group' style={{height:"100%"}}>
                                    <input ref={searchBtn} className='form-control' type='text'/>
                                    <span onClick={
                                        ev=>{
                                            ev.preventDefault();
                                            searchSubmint();
                                        }
                                    } className="input-group-text" role="button" id="basic-addon2"><FaSearch /></span>
                                </form>
                                <div className="
                                    navbar-nav 
                                    align-items-center 
                                    justify-content-end 
                                    bg-primary
                                " 
                                style={{width:"100%"}}>
                                    <NavLink onClick={
                                            ev=>{
                                                ev.preventDefault();
                                                setNavVal(1)
                                                setDatos([])
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
                                    <NavLink onClick={
                                            ev=>{
                                                ev.preventDefault();
                                                setNavVal(3);
                                                //cargar('/salas/',{})
                                                setTipo(2)
                                            }
                                        } ref={nav2} 
                                        className={`text-black link-light nav-link me-1 ms-1 ${(navVal === 3) ? 'border rounded p-1 m-1' : ''}`}>
                                            Salas
                                    </NavLink>
                                    <NavLink onClick={
                                            ev=>{
                                                ev.preventDefault();
                                                setNavVal(4);
                                            }
                                        } 
                                    ref={nav3} 
                                    className={`text-black link-light nav-link me-1 ms-1 d-flex ${(navVal === 4) ? 'border rounded p-1 m-1' : ''}`}>
                                        Login <FaUser className='mt-2 ms-2' size={20}/>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                    {/*
                        <div role="button" className='text-black link-light d-flex justify-content-end align-items-center me-1 ms-1'>                
                    </div>*/}
                </div>
                
            </header>
            <div>
                
            </div>
            <div className=''>
                <button className='m-3 btn btn-outline-primary' onClick={
                    ev =>{
                        ev.preventDefault();
                        console.log('se presionó el botón')
                    }
                }>
                    Sala
                </button>
                {/*<Table data={datos}/>*/}
                <Paramets type={tipo}/>
            </div>
            <Outlet/>
        </div>
    )
}

export default MainPage;