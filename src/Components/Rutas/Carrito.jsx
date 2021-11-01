import React,{Component} from "react";
import {
    Link
} from "react-router-dom";

class Carrito extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    cambiarCantidad(producto){
        let total = 0;
        for (let i = 0; i < 30; i++) {
            if (localStorage.getItem(i) == null) {
                continue;
            }else{ 
                    if (JSON.parse(localStorage.getItem(i))[0] === producto[0]) {
                        producto[2] = document.getElementById("cantidad"+producto[0].replace(/ /g,"")).value;
                        localStorage.setItem(i,JSON.stringify(producto))
                        document.getElementById("subtotal"+producto[0].replace(/ /g,"")).textContent=producto[1] * producto[2]
                    }
                    total += JSON.parse(localStorage.getItem(i))[1] * JSON.parse(localStorage.getItem(i))[2];
            } 
        }
        document.getElementById("total").textContent = total
    }

    eliminarProducto(producto){
        
        for (let i = 0; i < 30; i++) {
            if (localStorage.getItem(i) == null) {
                continue;
           }else{
                if (JSON.parse(localStorage.getItem(i))[0] === producto[0]) {
                    localStorage.removeItem(i);
                    break;
                }
           } 
        }
    }

    render() { 
        let productos = [];
        let lista = [];
        let total = 0;
        
        for (let i = 0; i < 30; i++) {

            if (localStorage.getItem(i) == null) {
                 continue;
            }else{
                productos[i]=(JSON.parse(localStorage.getItem(i)));        
                lista.push( <tr>
                    <td>{productos[i][0]}</td>
                    <td>{productos[i][1]}</td>
                    <td>{  <input onClick={this.cambiarCantidad.bind(this,productos[i])} id={"cantidad"+productos[i][0].replace(/ /g,"")} type="number" className="form-control cantidad" min="1" placeholder={productos[i][2]} />  }</td>
                    <td id={"subtotal"+productos[i][0].replace(/ /g,"")}>{productos[i][2] * productos[i][1]}</td>  
                    <td><Link to="/juventic/carrito" className="btn btn-danger" onClick={this.eliminarProducto.bind(this,productos[i])}>Eliminar</Link></td></tr>)  
                total+= productos[i][2] * productos[i][1];
            }
        }
        
        return ( 
            <>
            <div class="row m-3">
                <h1>Carrito de compras</h1>
            </div>

            <div class="container-fluid">
                <table className="table table-hover table-danger">
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Subtotal</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        {lista}
                        <tr>
                        <td colspan="3" className="text-end fw-bold">Total:</td>
                        <td id="total" colspan="2">{total}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/juventic/pedido" className="btn btn-danger ms-0 mb-4">Continuar con el pedido</Link>
            </div>

            </>
         );
    }
}
 
export default Carrito;