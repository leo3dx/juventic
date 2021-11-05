import React,{Component} from "react";
import Plato from "../Plato";
import datos from "../../Assets/scripts/Platos.js"

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = datos
    }
    render() { 
        // 
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
        
                    {
                    this.state.map(pla => <div className="row m-3">
                            {pla.map(pla2=>
                            <Plato nombre = {pla2.nombre}
                                descripcion = {pla2.descripcion}
                                precio = {pla2.precio}/>)
                            }</div>
                        )
                    } 
            </>
         );
    }
}
 
export default Menu;