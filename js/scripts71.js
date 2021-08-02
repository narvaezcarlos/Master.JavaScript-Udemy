'use strict';

/*
1.Crear formulario que tenga 3 campos:
    -Nombre
    -Apellidos
    -Edad
2.Crear un Boton de enviar el formulario con el evento submit
3.Mostrar datos del formulario por pantalla
4.Crear un boton que muestre los datos actuales del formulario
*/

window.addEventListener('load', ()=>{
    console.log("DOM Cargado");

    var formulario = document.querySelector("#formulario");
    var formContent = document.querySelector("#form-content");
    formContent.style.display = "none";

    formulario.addEventListener('submit', (e)=>{
        e.preventDefault();
        console.log("Evento submit capturado");
        formContent.style.display = "block";

        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = document.querySelector("#edad").value;

        document.querySelector("#nombre_span").append(nombre);
        document.querySelector("#apellido_span").append(apellido);
        document.querySelector("#edad_span").append(edad);

        

        /*
        var datosUsuario = [nombre, apellido, edad];
        datosUsuario.forEach(element => {
            var parrafo = document.createElement("p");
            parrafo.append(element);
            formContent.append(parrafo);
        });
        */
    });
});