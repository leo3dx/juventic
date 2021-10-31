import React,{Component} from "react";

class Comentarios extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <h1 class="text-center">Comentarios</h1>
            <div class="row m-2">
                <div className="col-3">Leonardo Heredia</div>
                <div className="col">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, repellat! Possimus neque laudantium facilis esse tempora voluptatem maxime debitis ea perspiciatis quo in cupiditate ipsam aut eveniet, delectus, dolorum iste!</div>
            </div>
            <div class="row m-2">
                <div className="col-3">Leonardo Heredia</div>
                <div className="col">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, repellat! Possimus neque laudantium facilis esse tempora voluptatem maxime debitis ea perspiciatis quo in cupiditate ipsam aut eveniet, delectus, dolorum iste!</div>
            </div>
            <div class="row m-2">
                <div className="col-3">Leonardo Heredia</div>
                <div className="col">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, repellat! Possimus neque laudantium facilis esse tempora voluptatem maxime debitis ea perspiciatis quo in cupiditate ipsam aut eveniet, delectus, dolorum iste!</div>
            </div>
            </>
         );
    }
}
 
export default Comentarios;