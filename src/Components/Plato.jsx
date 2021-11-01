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
    agregar(){
        let productos = [
            document.getElementById(arguments[1]).value, 
            document.getElementById(arguments[2]).value, 
            document.getElementById(arguments[0]).value
        ];

        for (let i = 0; i < 30; i++) {
            if (localStorage.getItem(i) == null) {
                localStorage.setItem(i,JSON.stringify(productos))
                break;
            }
            
        }
        
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
                                    <span>{this.props.descripcion}</span><br /><br />
                                    <span>Precio: {'$'+this.props.precio}</span><br /><br />
                                    <label htmlFor={"cantidad"+this.props.nombre.replace(/ /g,"")} className="form-label">Cantidad</label>
                                    <input id={"cantidad"+this.props.nombre.replace(/ /g,"")} className="form-control cantidad" type="number" min="1"/>
                                    <input id={"nombre"+this.props.nombre.replace(/ /g,"")} type="text" hidden value={this.props.nombre}/>
                                    <input id={"precio"+this.props.nombre.replace(/ /g,"")} type="text" hidden value={this.props.precio}/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="submit" data-bs-dismiss="modal" onClick={this.agregar.bind(this,"cantidad"+this.props.nombre.replace(/ /g,""),"nombre"+this.props.nombre.replace(/ /g,""),"precio"+this.props.nombre.replace(/ /g,""))} class="btn btn-danger">Agregar al Carrito</button>
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