'use strict';

//DOM DOCUMENT OBJECT MODEL

function changeColor(color) {
    caja.style.background = color;
}

var caja = document.getElementById("micaja");
document.getElementById("micaja").innerHTML = "Texto cambiado desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "active col-10";
console.log("caja", caja);

var caja = document.querySelector("#micaja");
console.log("caja", caja);