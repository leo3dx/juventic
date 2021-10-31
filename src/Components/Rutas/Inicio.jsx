import React,{Component} from "react";
import imagenes from "../imagenes";
import Plato from "../Plato.jsx";
import Comentarios from "../Comentarios.jsx";

class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={imagenes.slider1} class="d-block w-100 slider" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={imagenes.slider2} class="d-block w-100 slider" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={imagenes.slider3} class="d-block w-100 slider" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>

                <div class="text-center mt-5 mb-5">
                    <img src={imagenes.propuesta} alt="" width="80%" />
                </div>

                <div class="row m-3">
                    <Plato nombre="Tacos"/>
                    <Plato nombre="Hamburguesa"/>
                    <Plato nombre="Pinchos"/>
                    <Plato nombre="Ver Menú"/>
                </div>
                <div class="text-center mt-5 mb-5">
                    <img src={imagenes.eventos} alt="" width="80%" />
                </div>
                <div class="p-5">
                    <Comentarios/>
                </div>
            </>
         );
    }
}
 
export default Inicio;