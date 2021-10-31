import React,{Component} from "react";
import Plato from "../Plato";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <div class="row m-3">
            <div class="col">
                <h1>El Menú</h1>
            </div>
            <div class="col">
                <div class="descarga ms-auto">
                    <a href="../Assets/documents/menu.pdf" download="Menu_Sal&Salsa.pdf" class="btn btn-danger">Decargar Menú</a>
                </div>
            </div>
            </div>
            
            <div class="row m-3">
                    <Plato nombre="Tacos"/>
                    <Plato nombre="Hamburguesa"/>
                    <Plato nombre="Pinchos"/>
                    <Plato nombre="Pizza"/>
            </div>
            <div class="row m-3">
                    <Plato nombre="Papas a la Francesa"/>
                    <Plato nombre="Perro Caliente"/>
                    <Plato nombre="Salchipapa"/>
                    <Plato nombre="Alitas BBQ"/>
            </div>
            <div class="row m-3">
                    <Plato nombre="Carne Asada"/>
                    <Plato nombre="Nuggets de Pollo"/>
                    <Plato nombre="Chorizo Santarosano"/>
                    <Plato nombre="Burritos"/>
            </div>
            </>
         );
    }
}
 
export default Menu;