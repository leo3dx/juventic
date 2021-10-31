import React,{Component} from "react";
import imagenes from "./imagenes";
import {
    Link
} from "react-router-dom";

class Plato extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <div className="col">
                <div class="card .widthCard">
                    <img src={this.props.nombre === "Tacos"? imagenes.tacos:
                              this.props.nombre === "Hamburguesa"?imagenes.hamburguesa:
                              this.props.nombre === "Pinchos"?imagenes.pinchos:
                              this.props.nombre === "Ver Menú"?imagenes.menu:
                              this.props.nombre === "Pizza"?imagenes.pizza:
                              this.props.nombre === "Perro Caliente"?imagenes.perro:
                              this.props.nombre === "Papas a la Francesa"?imagenes.papas:
                              this.props.nombre === "Alitas BBQ"?imagenes.alitasBB:
                              this.props.nombre === "Carne Asada"?imagenes.carneAsada:
                              this.props.nombre === "Salchipapa"?imagenes.salchipapa:
                              this.props.nombre === "Burritos"?imagenes.burritos:
                              this.props.nombre === "Chorizo Santarosano"?imagenes.chorizos:
                              this.props.nombre === "Nuggets de Pollo"?imagenes.nuggets:""} class="card-img-top imagenMenu" alt="..."/>                  
                        {this.props.nombre === "Ver Menú"?<Link to="/juventic/menu" className="btn btn-danger">{this.props.nombre}</Link>:
                        <button href="#" class="btn btn-danger" data-bs-toggle="modal" data-bs-target={"#"+this.props.nombre.replace(/ /g,"")}>{this.props.nombre}</button>                                            }
                        {/* Modal */}
                        <div class="modal fade" id={this.props.nombre.replace(/ /g,"")} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">{this.props.nombre}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    {this.props.nombre === "Pizza"?<div> <span>Disfruta de una deliciosa Pizza de pollo y champiñon, hawaiana, salami y pepperoni. </span>
                                                                   <br /><br /> <span>Precio: $15.000</span> </div>:""}
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="button" class="btn btn-danger">Agregar al Carrito</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* Fin modal */}
                </div>
            </div>
            </>
         );
    }
}
 
export default Plato;