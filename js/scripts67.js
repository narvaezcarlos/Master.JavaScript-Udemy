'use strict';

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
boton.addEventListener('mouseover', ()=>{
    boton.style.background = "yellow";
}); 
boton.addEventListener('mouseout', ()=>{
    boton.style.background = "red";
}); 
boton.addEventListener('mousenter', ()=>{
    boton.style.background = "blue";
}); 
