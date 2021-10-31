import React,{Component} from "react";
import Comentarios from "../Comentarios.jsx";
import imagenes from "../imagenes.js";
import Personal from "../Personal.jsx";


class QuienesSomos extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <div class="row resena m-auto mt-3">
                <div class="col-5">
                    <img src={imagenes.reseña} width="100%" alt="" />
                </div>
                <div className="col">
                    <h1>Nuestra Historia</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nobis tenetur totam numquam quo quibusdam. Tenetur, eius.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam 
                    maxime at omnis placeat molestiae inventore quidem, atque tempora reprehenderit. 
                    A maxime sunt quasi repellendus ipsa, laborum consequuntur perferendis amet possimus 
                    veniam magni dolore incidunt qui beatae aliquid iusto maiores quos quo voluptatum 
                    veritatis illo temporibus nihil quis dolorum. Totam iste et repellendus fuga eaque 
                    necessitatibus soluta nostrum, aliquam impedit?
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eum quia, cupiditate 
                    perspiciatis ratione veritatis? Dicta, mollitia. Molestias, impedit a? A eveniet 
                    illum, quasi commodi ab doloribus, voluptatem quo dolor, fugit eum veritatis qui 
                    sequi?
                    </p>
                </div>  
            </div>
            <div className="row resena m-auto mt-3">
                <Personal nombre="Sara Lopez"/>
                <Personal nombre="Jaime Gonzalez"/>
                <Personal nombre="Kelly Daza"/>
                <Personal nombre="Daniel Rengifo"/>
            </div>
            <div class="p-5">
                    <Comentarios/>
            </div>
            </>
         );
    }
}
 
export default QuienesSomos;