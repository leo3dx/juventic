import React, { Component } from 'react'
import imagenes from "./imagenes";
import {
    Link
} from "react-router-dom";

class Servicio extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
}
  render() {
    return (
      <div class="col">
        <div class="container-fluid ContainerS" >
                <div class="row">
                <div class="col md-4">
                <div class="card ">
                <img src={this.props.titulo==="Celebracion de Cumpleaños" ? imagenes.cumple:
                          this.props.titulo==="Aniversarios"? imagenes.aniversario: 
                          this.props.titulo==="Fiestas Infantiles"? imagenes.fiestas: 
                          this.props.titulo==="Declaraciones o Propuestas"? imagenes.declaracion: 
                          this.props.titulo==="Despedidas"? imagenes.despedida: 
                          this.props.titulo==="Cena con Amigos"? imagenes.cena:""}    class="card-img-top ServicioI" />
                <div class="card-body">
                                <h5 class="card-title">{this.props.titulo}</h5>
                                <p class="card-text">
                                {this.props.descripcion}
                                 </p>
                              </div>
                              <Link class="btn btn-danger btn-lg" to="/juventic/reserva">Reserva YA</Link>
                            </div>
                            </div>
                            </div>
                              </div>
      </div>
    )
  }
}

 
export default Servicio;