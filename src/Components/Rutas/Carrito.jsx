import React,{Component} from "react";

class Carrito extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        let productos = [];
        let m;
        let lista = [];
        for (let i = 0; i < localStorage.length; i++) {   
            productos.push(JSON.parse(localStorage.getItem(i)));        
            lista.push( <tr><td>{i+1}</td> <td>{productos[i][0]}</td><td>{productos[i][1]}</td><td>{productos[i][2]}</td> </tr>)
        }
        console.log("Consola"+productos[0])
        return ( 
            <>
            <div class="row m-3">
                <h1>Carrito de compras</h1>
            </div>

            <div class="row m-3 p-3">
                <table class="table">
                    <thead>
                        <th>Pedido</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </thead>
                    <tbody id="tbody">
                        {lista}
                    </tbody>
                </table>
            </div>

            </>
         );
    }
}
 
export default Carrito;