import React,{Component} from "react";
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    iniciarSesion(e) {
        e.preventDefault();
        let usuario = document.getElementById("usuario").value;
        let pass = document.getElementById("pass").value;
        if (usuario === "admin" && pass === "admin"){
            localStorage.setItem("login",true)
            this.props.history.push("/juventic/admin")
        }else{
            alert("usuario o contraseña incorrectos")
        }
      }
    render() { 
        
        return ( 
            <>
            <div className="container">
                <div className="row login mb-5">
                    <div className="col text-center">
                        <h2>Inicio de sesión</h2>
                        <span>Inicia sesión como administrador del restaurante</span>
                    </div>
                    <div className="col">
                        <form className="form-login" onSubmit={this.iniciarSesion.bind(this)}>
                        <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Usuario</label>
                                <input type="text" class="form-control" id="usuario" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class="form-text">No compartas tu usuario con nadie</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                                <input type="password" class="form-control" id="pass"/>
                            </div>
                            <button type="submit" class="btn btn-danger">Ingresar</button>
                        </form>
                    </div>
                </div>
            </div>
            
            </>
         );
    }
}
 
export default Login;