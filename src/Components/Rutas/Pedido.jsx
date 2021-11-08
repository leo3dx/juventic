import React,{Component} from "react";
import {init} from "emailjs-com";
import emailjs from "emailjs-com";
import {Link, Redirect} from "react-router-dom";

class Pedido extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    realizarEnvio(){
        init("user_qMQQFb77OfTUyGqNOy7My");
        let productos =[];
        let suma = 0;
        for (let i = 0; i < 20; i++) {
            if(localStorage.getItem(i)== null){
                continue;
            }else{
                productos[i] = JSON.parse(localStorage.getItem(i))[2] + " " +JSON.parse(localStorage.getItem(i))[0];
                suma += JSON.parse(localStorage.getItem(i))[1] * JSON.parse(localStorage.getItem(i))[2];
            }
        }
        let tempParams = {
            from_name: document.getElementById("from_name").value,
            to_name: document.getElementById("to_name").value,
            to_email: document.getElementById("to_email").value,
            to_addres: document.getElementById("to_addres").value,
            to_phone: document.getElementById("to_phone").value,
            products: productos,
            total: suma
        };
        if(tempParams.to_name === "" && tempParams.to_email === "" && tempParams.to_phone === "" && tempParams.to_addres === ""){
            alert("Ingrese los datos")
        }else{
            emailjs.send("gmail","template_gn6g2fe",tempParams)
            .then(function(response){
            console.log("success",response.status);
        });
        localStorage.clear();
        this.props.history.push('/')
        }

    }

    render() { 
        return ( 
            <>
            <div class="container">
                <h1>Datos de envio</h1>
        
        <div class="row mt-5">
            <div class="col">
                <label>Nombre</label>
                <input id="to_name" class="col form-control" type="text" required/>
            </div>
            <div class="col">
                <label for="">Correo</label>
                <input id="to_email" class="col form-control" type="text" required/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="">Dirección</label>
                <input id="to_addres" class="col form-control" type="text" required/>
            </div>
            <div class="col">
                <label for="">Telefono</label>
                <input id="to_phone" class="col form-control" type="text" required/>
                <input type="text" id="from_name" value="Sal&amp;salsa" hidden/>
            </div>
        </div>

        <div class="row mt-3 mb-3">
            <div class="col">
                <button onClick={this.realizarEnvio.bind(this)} className="btn btn-danger">Realizar pedido</button>
            </div>
        </div>
            </div>
            
            </>
         );
    }
}
 
export default Pedido;