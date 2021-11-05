import React,{Component} from "react";
import {BrowserRouter as Router, Link,Route} from "react-router-dom"
import PlatosMenu from "./PlatosMenu"
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    cerrarSesion() {
        localStorage.removeItem("login");
        this.props.history.push("/juventic")
    }
    render() { 
        if(localStorage.getItem("login")){
            return ( 
                <>
                <Router>
                <div className="container-fluid p-0">
                    <nav class="navbar navbar-expand-lg navbar-light menuAdmin">
                        <div class="container-fluid">
                            <Link class="navbar-brand">Administrador</Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                <Link to="/juventic/platos" class="nav-link active" aria-current="page">Platos</Link>
                                </li>
                                <li class="nav-item">
                                <Link to="juventic/servicios" class="nav-link">Servicios</Link>
                                </li>
                                
                            </ul>
                            <div class="nav-item ms-auto">
                                <button className="btn btn-danger" onClick={this.cerrarSesion.bind(this)}>Salir</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <Route path="/juventic/platos" exact component={PlatosMenu}></Route>
                </div>
                </Router>
                </>
             );
        }else{
            return(
                <>
                </>
            )
        }
        }
        
}
 
export default Admin;