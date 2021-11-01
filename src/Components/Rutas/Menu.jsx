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
                    <Plato 
                    nombre="Tacos" 
                    descripcion="Disfruta de unos deliciosos tacos con carne desmechada, verduras, salsas y pollo desmechado."
                    precio="9000"/>

                    <Plato 
                    nombre="Hamburguesa" 
                    descripcion="Disfruta de una deliciosa hamburguesa con doble carne, doble queso, tomate,cebolla, lechuga y salsas de la casa."
                    precio="10000"/>

                    <Plato 
                    nombre="Pinchos"
                    descripcion="Disfruta de unos deliciosos pinchos de pollo con papas a la francesa y salsas."
                    precio="5000"
                    />

                    <Plato 
                    nombre="Pizza"
                    descripcion="Disfruta de una deliciosa Pizza de pollo y champiñon, hawaiana, salami y pepperoni."
                    precio="15000"/>
            </div>
            <div class="row m-3">
                    <Plato 
                    nombre="Papas a la Francesa"
                    descripcion="Disfruta de unas deliciosas y crocantes papas a las francesas con sus salsas de acompañamiento."
                    precio="5000"
                    />

                    <Plato 
                    nombre="Perro Caliente"
                    descripcion="Disfruta de un delicioso perro caliente con salchicha americana, tocineta, doble queso, ripio, cebolla y sus salsas."
                    precio="9000"
                    />

                    <Plato 
                    nombre="Salchipapa"
                    descripcion="Deleitate con una deliciosa salchipapa con papa francesa, salchicha americana, pollo y carne desmechada, doble queso y salsas"
                    precio="12000"
                    />

                    <Plato 
                    nombre="Alitas BBQ"
                    descripcion="Disfruta de unas deliciosas Alitas BBQ con papas a la francesa de acompañamiento y salsas."
                    precio="15000"
                    />
            </div>
            <div class="row m-3">
                    <Plato 
                    nombre="Carne Asada"
                    descripcion="Disfruta de una deliciosa carne asada con papas a la francesa y ensalada de acompañamiento."
                    precio="15000"
                    />

                    <Plato 
                    nombre="Nuggets de Pollo"
                    descripcion="Disfruta de unos deliciosos nuggets de pollo con papas a la francesa y salsas."
                    precio="10000"
                    />

                    <Plato 
                    nombre="Chorizo Santarosano"
                    descripcion="Disfruta de un delicioso chorizo santarosano con tostadas de platano y ensalada."
                    precio="8000"
                    />

                    <Plato 
                    nombre="Burritos"
                    descripcion="Disfruta de un delicioso Burrito de pollo, frijol, verduras, maiz tierno y salsa casera."
                    precio="9000"
                    />
            </div>
            </>
         );
    }
}
 
export default Menu;