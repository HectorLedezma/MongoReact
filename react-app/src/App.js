import React from 'react';
import Rutas from './Routes/index.jsx';
import {BrowserRouter} from 'react-router-dom'
import './Styles/responsive.css'
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//<Rutas/><Outlet/>
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Rutas/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
