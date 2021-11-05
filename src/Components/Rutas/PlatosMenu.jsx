import React,{Component} from "react";
import Platos from "../../Assets/scripts/Platos.js";


class PlatosMenu extends Component {
    constructor(props) {
        super(props);
        this.state = Platos;
    }
    render() { 
        return ( 
            <>
                <table className="table">
                    <thead>
                        <th>nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Opciones</th>
                    </thead>
                    <tbody>
                        {this.state.map(plat => 
                                plat.map(plat2 =>
                                    <tr>
                                        <td>{plat2.nombre}</td>
                                        <td>{plat2.descripcion}</td>
                                        <td>{plat2.precio}</td>
                                        <td>
                                            <button className="btn btn-warning m-1">Editar</button>
                                            <button className="btn btn-danger m-1">Eliminar</button>
                                        </td>
                                    </tr>   
                                    )
                            )}
                    </tbody>
                </table>
            </>
         );
    }
}
 
export default PlatosMenu;