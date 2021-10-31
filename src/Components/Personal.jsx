import React,{Component} from "react";
import imagenes from "./imagenes";

class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
             <div class="col-3 col-lg-3 foto">
                    <img src={
                        this.props.nombre === "Sara Lopez"?imagenes.persona2:
                        this.props.nombre === "Jaime Gonzalez"? imagenes.persona1:
                        this.props.nombre === "Kelly Daza"? imagenes.persona3:
                        imagenes.persona4
                    } class="rounded-circle img-fluid pt-3" width="80%" alt=""/>
                    <b><p class="nombre text-center pt-2">{this.props.nombre}</p></b>
                    <b><p class="ocupacion text-center">Chef principal</p></b>
            </div>
            </>
         );
    }
}
 
export default Personal;