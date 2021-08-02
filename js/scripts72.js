'use strict';

/*
1.Crear formulario que tenga 3 campos:
    -Nombre
    -Apellidos
    -Edad
2.Crear un Boton de enviar el formulario con el evento submit
3.Mostrar datos del formulario por pantalla
4.Validacion del formulario
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

        //Validaciones
        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert("Nombre invalido");       
            document.querySelector("#error_nombre").innerHTML = "Nombre Invalido";
            document.querySelector("#nombre").classList.add("is-invalid");
            return false;  
        }else{
            document.querySelector("#error_nombre").style.display = "none";
            document.querySelector("#nombre").classList.add("is-valid");
            document.querySelector("#nombre").classList.remove("is-invalid");
        }

        if (apellido.trim() == null || apellido.trim().length == 0) {
            alert("Apellido invalido");   
            document.querySelector("#error_apellido").innerHTML = "Apellido Invalido";
            document.querySelector("#apellido").classList.add("is-invalid");
            return false;         
        }else{
            document.querySelector("#error_apellido").style.display = "none";
            document.querySelector("#apellido").classList.add("is-valid");
            document.querySelector("#apellido").classList.remove("is-invalid");
        }
        
        if (edad == null || edad <= 0 || isNaN(edad)) {
            alert("Edad invalido");        
            document.querySelector("#error_edad").innerHTML = "Edad Invalido";
            document.querySelector("#edad").classList.add("is-invalid");
            return false;    
        }else{
            document.querySelector("#error_edad").style.display = "none";
            document.querySelector("#edad").classList.add("is-valid");
            document.querySelector("#edad").classList.remove("is-invalid");
        }
        
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