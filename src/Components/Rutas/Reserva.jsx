import React, {Component} from 'react'
import {init} from "emailjs-com";
import emailjs from "emailjs-com";
import {Link, Redirect} from "react-router-dom";


 class Reserva extends Component {
  constructor(props,context) {
    super(props,context);
    this.state = {  }
}

realizarReserva(){
  init("user_qMQQFb77OfTUyGqNOy7My");



  let  tempParams = {

    from_name: document.getElementById("from_name").value,

    to_name: document.getElementById("to_name").value,

    to_email: document.getElementById("to_email").value,

    to_phone: document.getElementById("to_phone").value,

    to_service: document.getElementById("to_service").value,

    to_person: document.getElementById("to_person").value,

    to_date: document.getElementById("to_date").value,

    to_hour: document.getElementById("to_hour").value,

    to_ind: document.getElementById("to_ind").value



};

if(tempParams.to_name == "" && tempParams.to_email == "" && tempParams.to_phone == "" && tempParams.to_service == "" && tempParams.to_person == "" && tempParams.to_date == "" && tempParams.to_hour == "" && tempParams.to_ind == ""){

    

}else{

  emailjs.send("gmail","template_0mxj04u",tempParams)
  .then(function(response){
  console.log("success",response.status);
});
alert("Datos enviado exitosamente");
localStorage.clear();
this.props.history.push('/')
}


    }



    render() {
        return (
            <>
            
              <section class="container mt-5 mb-5">
                    <div>
                      <h1>Reserva YA</h1>
                    </div>


                    
                    <form>
                    <div class="mb-3">

                            <label for="exampleFormControlInput1" class="form-label">Nombre Completo</label>
                            <input type="text" class="form-control" id="to_name" placeholder="Ingresa su nombre" pattern="[A-Za-z ]{1,50}" required="required"/>
                          </div>

                          <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Correo Electronico</label>
                            <input type="email" class="col form-control" id="to_email"  placeholder="Ingresa su correo electronico"   required="required"/>
                                </div>

                            <div class="mb-3">
                            <label for="">Telefono</label>
                            <input id="to_phone" class="col form-control" placeholder="Ingresa tu numero de Telefono"  type="number" required="required"/>     
                                </div>

                          
                                <div class="mb-3">

                                    <label for="exampleFormControlInput1" class="form-label">Servicio</label>
                                    <select id="to_service" class="form-select" required aria-label="Default select example">
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
                                    <label for="">Numero de Personas</label>
                                    <input id="to_person" class="col form-control" placeholder="Ingresa el numero de personas"  type="number" required="required"/>         
                                    </div>


                                    <div class="mb-3">
                                    <label for="">Fecha de Reserva</label>
                                    <input type="date" id="to_date"  value="2021-12-22" min="2021-01-01" max="2021-12-31"/>         
                                    </div>




                                    <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Seleccione una hora para la reservaciòn</label>
                                    <select id="to_hour" class="form-select" required aria-label="Default select example">
                                     <option selected value="">Seleccione una opción</option>
                                        <option value="1">6:00Pm a 7:00pm</option>
                                        <option value="2">7:00Pm a 8:00pm</option>
                                        <option value="3">8:00Pm a 9:00pm</option>
                                        <option value="4">9:00Pm a 10:00pm</option>
                                         <option value="5">10:00Pm a 11:00pm</option>
                                             <option value="6">11:00Pm a 12:00pm</option>
                                                <option value="7">6:00Pm a 8:00pm</option>
                                                </select>      
                                                        </div>


                                            <div class="mb-3">
                                        <label>Indicaciones Especiales</label>
                                        <textarea class="form-control" placeholder="Ingrese Indicaciones Especiales"required="required" id="to_ind" minlength="10" maxlength="250" rows="3"></textarea>
                                        <input type="text" id="from_name" value="Sal&salsa" hidden/>
                                            </div>


                                            <div class="mb-3">
                                            <button onClick={this.realizarReserva.bind(this)} className="btn btn-danger">Realizar Reserva</button>
                                            </div>


                    </form>
                  </section>
                  
            </>
        );
    }
}

export default Reserva;