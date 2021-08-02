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

//EVENTOS DEL RATON
function changeColor() {
    console.log("click...!!!");
    var bg = boton.style.background;
    if ( bg == "green") {
        boton.style.background = "red";        
    }else{
        boton.style.background = "green";
    }    

    return true;
}

//EVENTO CLICK
var boton = document.querySelector("#boton");

boton.addEventListener('click', ()=>{
    changeColor();
});  

/*
boton.addEventListener('click', ()=>{
    changeColor();
    console.log(this.style);
    this.style.border = "10px solid red"; 
}); 
*/

boton.addEventListener('mouseover', ()=>{
    boton.style.background = "yellow";
}); 
boton.addEventListener('mouseout', ()=>{
    boton.style.background = "red";
}); 
boton.addEventListener('mousenter', ()=>{
    boton.style.background = "blue";
}); 