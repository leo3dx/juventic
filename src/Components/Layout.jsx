import React,{Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import imagenes from "./imagenes";
import "./Layout.css";
import "../Assets/scripts/script"
import Inicio from "./Rutas/Inicio";
import QuienesSomos from "./Rutas/QuienesSomos";
import Menu from "./Rutas/Menu";
import Contacto from "./Rutas/Contacto";
import MapaSitio from "./Rutas/MapaSitio";
import Carrito from "./Rutas/Carrito";
import Pedido from "./Rutas/Pedido";
import Login from "./Rutas/Login";
import Admin from "./Rutas/Admin";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
  
    render() { 
        return ( 
            <>
            <Router>
                <div className="container-fluid p-0 bg-gray">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                    <div className="container-fluid">
                        <Link to="/juventic" className="navbar-brand fs-4 fw-bold" ><img className="logo" src={imagenes.logo} alt="Logo" />Sal&Salsa</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto me-6 fs-6">
                            <Link to="/juventic" id="inicio"  className="nav-link" aria-current="page" >Inicio</Link>
                            <Link to="/juventic/quienessomos" className="nav-link" >Quienes Somos</Link>
                            <Link to="/juventic/menu" className="nav-link" >Menú</Link>
                            <Link to="/juventic/servicios" className="nav-link">Servicios</Link>
                            <Link to="/juventic/contacto" className="nav-link">Contáctenos</Link>
                            <Link to="/juventic/mapasitio" className="nav-link">Mapa del Sitío</Link>
                            <Link to="/" className="nav-link">Reserva Ya</Link>
                            <Link to="/juventic/carrito" className="nav-link"><img src={imagenes.logoCarrito} width="30px" alt="" /> Carrito</Link>
                            <Link to="/juventic/login" className="nav-link">Iniciar sesión</Link>
                        </div>
                        </div>
                    </div>
                    </nav>
                    {/* Rutas */}
                        <Route path="/juventic" exact component={Inicio}></Route>
                        <Route path="/juventic/quienessomos" component={QuienesSomos}></Route>
                        <Route path="/juventic/menu" exact component={Menu}></Route>
                        <Route path="/juventic/contacto" component={Contacto}></Route>
                        <Route path="/juventic/mapasitio" exact component={MapaSitio}></Route>
                        <Route path="/juventic/pedido" exact component={Pedido}></Route>
                        <Route path="/juventic/carrito" exact component={Carrito}></Route>
                        <Route path="/" exact component={Inicio}></Route>
                        <Route path="/juventic/login" exact component={Login}></Route>
                        <Route path="/juventic/admin" exact component={Admin}></Route>
                    {/* Fin de rutas */}

                    
                    <footer class="bg-danger">
                           <div className="row">
                               <div className="col text-center">
                                   <img className="logo2" src={imagenes.logo2} alt="" />
                               </div>
                               <div className="col">
                                   <div class="ps-5 row">
                                        <p class="fs-3">Información</p>
                                        <div class="col-4">
                                            <span>Restaurante sal&salsa Ltda</span><br/>
                                            <span>Calle 19 No. 7-30. Bogotá</span>
                                        </div>
                                        <div className="col-4">
                                            <span>reservas@salysalsa.com</span><br/>
                                            <span>Tel: 312 325 25 321</span>
                                        </div>
                                   </div>
                               </div>
                           </div>
                           <div class="text-center text-white mt-3">
                               <span>
                               @Copyright 2021
                               </span>
                           </div>
                    </footer>
                </div>
            </Router>
            </>
         );
    }
}
 
export default Layout;