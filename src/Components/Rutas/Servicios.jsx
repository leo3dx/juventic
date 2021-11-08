import React, { Component } from 'react'
import Servicio from "../Servicio";

 class Servicios extends Component {
    render() {
        return (
            <>
             <section class="destacados clases mt-2 py-2">
                <div className="separador text-center mb-3">
            <h1>Servicios Ofrecidos por Nuestro Restaurante</h1>
                </div> 
                </section>

            <div class="row" >
                    <Servicio titulo ="Celebracion de Cumpleaños" descripcion= "Somos una empresa especializada en comidas rapidas para este tipo de fiestas  a un costo inigualable, donde los principales beneficiarios son los niños, adultos, etc.  Usted puede contratar comidas rápidas provistas por carritos de perros calientes  y hamburguesas, fuentes de chocolate, carros de algodón de azúcar y palomitas de maíz. " />
                    <Servicio titulo ="Aniversarios" descripcion= "Sal&salsa Ofrece una amplia gama de comidas para fechas especiales, donde el el pricipal valor son los clientes, conforme a esto ofrecemos Chuzos, Picadas de carne res, pechuga, chorizo,  cordero, entre muchos otros platos.  Nuestro objetivo principal es garantizar la alta calidad de nuestros productos." />
                    <Servicio titulo ="Fiestas Infantiles" descripcion= "En Sal&salsa ofrecemos una gran diversidad de platos enfocados para este tipo de fiestas, de modo que los niños se sientan alegres y satisfechos con las formas, sabor y armonia que  contienen nuestros platos. Cada platillo puede ser personalizado por ti, asi que no esperes mas y dale clic en Reserva Ya porque ya se acaba" />
                    
            </div>

            <div class="row" >
          <Servicio titulo ="Declaraciones o Propuestas" descripcion= "Cada momento es inolvidable, por ello en Sal&Salsa te brindamos una amplia gama de platillos para este  tipo de ocaciones, donde podras apreciar el sabor y calidad de los alimentos que ofrecemos. Por lo anterior estamos disponbibles las 24/7, todo esto para que hagas de ese momento algo que quede marcado para toda la vida." />
          <Servicio titulo ="Despedidas" descripcion= " Cada cliente es muy importante para nosostros, por lo tanto, en esta secciòn te ofertamos comidas rapidas, snacks, bebidas con el   motivo de satisfacer tus nececidades y tambien el de la persona que no veras a corto, mediano o largo plazo,  por ello te garantizamos que esa ocacion sea especial para ti. Sal & salsa siempre contigo" />
          <Servicio titulo ="Cena con Amigos" descripcion= "Todos tenemos personas especiales en nuestras vidas, en este caso, los amigos, por ello te  ofrecemos platos con una calidad y precio increible, con el fin de que pidas ya tu orden y  la disfrutes desde el lugar en que te encuentres o en nuestro establecimiento principal.  Ten encuenta que cada amigo es un apoyo especial en nuestro camino." />
          
  </div>

            </>
        );
    }
}
export default Servicios;