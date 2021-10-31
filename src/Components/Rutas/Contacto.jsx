import React, {Component} from "react";
class Contacto extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <>
            <form>
              <section class="container mt-5 mb-5">
                    <div>
                      <h1>Contáctenos</h1>
                    </div>
                    <form action="">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Asunto</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingresa el asunto" required="required"/>
                          </div>
                          <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Nombre completo</label>
                            <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Ingresa tu nombre" pattern="[A-Za-z ]{1,50}" required="required"/>
                          </div>
                          <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Telefono</label>
                            <input type="numer" class="form-control" id="exampleFormControlInput2" placeholder="Ingresa tu numero" required="required"/>
                          </div>
                          <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Fecha</label>
                            <input type="date" class="form-control" id="exampleFormControlInput2" required="required"/>
                          </div>
                          <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Correo electronico</label>
                            <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Ingresa su correo electronico" pattern="{1,20}" required="required"/>
                          </div>
                          <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Servicios</label>
                            <select class="form-select" required aria-label="Default select example">
                              <option selected value="">Seleccione una opción</option>
                              <option value="1">Domicilio</option>
                              <option value="2">Celebración de cumpleaños</option>
                              <option value="3">Aniversarios</option>
                              <option value="4">Fiestas infantiles</option>
                              <option value="5">Declaración de propuestas</option>
                              <option value="6">Despedidas</option>
                              <option value="7">Cena con amigos</option>
                            </select>
                          </div>
                          <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Descripción del servicio</label>
                            <textarea class="form-control" placeholder="Ingrese la descripción del servicio"required="required" id="exampleFormControlTextarea1" minlength="10" maxlength="250" rows="3"></textarea>
                        </div>
                        <div class="mb-3 form-check">
                          <input type="checkbox" required class="form-check-input" id="exampleCheck1"/>
                          <label class="form-check-label" for="exampleCheck1">¿Acepta el tratamiento de datos personales?</label>
                        </div>
                        <button type="submit" class="btn btn-danger">Enviar</button>
                    </form>
                  </section>
            </form>
            </>
          );
    }
}
 
export default Contacto;