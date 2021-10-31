import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  
class  Mapa extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
             <>
                    <div class="container">
                        <h1>Mapa del sitio</h1>
                        <div class="row">
                            {/* Columna de General*/}
                            <div class="col">
                                <h2>General</h2>
                                <Link to="/juventic/" class="text-decoration-none fw-bold">Inicio</Link><br />
                                <Link to="/juventic/quienessomos" class="text-decoration-none fw-bold">Quienes somos</Link><br />
                                <Link to="/juventic/menu" class="text-decoration-none fw-bold">Menu</Link><br />
                                <Link to="/juventic/servicios" class="text-decoration-none fw-bold">Servicios</Link><br />
                                <Link to="/juventic/mapasitio" class="text-decoration-none fw-bold">Mapa del sitio</Link>
                            </div>
                            {/* Columna de Quienes Somos*/}
                            <div class="col">
                                <h2>Quienes somos</h2>
                                <h6>Nuestra historia</h6>
                                <h6>Empleados</h6>
                                <h6>Testimonios</h6>
                            </div>
                            {/* Columna de menu */}
                            <div class="col">
                                <h2>El menu</h2>
                                <h6>Pizza</h6>
                                <h6>Papas a la francesa</h6>
                                <h6>Perro caliente</h6>
                                <h6>Salchipapa</h6>
                                <h6>Hamburguesa</h6>
                                <h6>Alitas BBQ</h6>
                                <h6>Carne asada</h6>
                                <h6>Nuggets de pollo</h6>
                                <h6>Pinchos de pollo</h6>
                                <h6>Tacos</h6>
                                <h6>Chorizo santarosano</h6>
                                <h6>Burritos</h6>
                            </div>
                            {/* Columna de Servicios*/}
                            <div class="col">
                                <h2>Servicios</h2>
                                <h6>Celebración de cumpleaños</h6>
                                <h6>Aniversario</h6>
                                <h6>Fiestas infantiles</h6>
                                <h6>Declaración o propuestas</h6>
                                <h6>Despedidas</h6>
                                <h6>Cena con amigos</h6>
                            </div>
                            {/* Columna de contactenos*/}
                            <div class="col">
                                <h2>Contactenos</h2>
                                <Link to="/juventic/contacto" class="text-decoration-none fw-bold">contactenos</Link>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
}
 
export default Mapa ;