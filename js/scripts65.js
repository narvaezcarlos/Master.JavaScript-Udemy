'use strict';

//DOM DOCUMENT OBJECT MODEL

function changeColor(color) {
    caja.style.background = color;
}

//UBICAR ELEMENTO POR ID
var caja = document.getElementById("micaja1");
document.getElementById("micaja1").innerHTML = "Texto cambiado desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "active col-10";
console.log("caja", caja);

var caja = document.querySelector("#micaja1");
console.log("caja", caja);

//UBICAR ELEMENTOS POR ETIQUETA HTML
var todoLosDivId = document.getElementsByTagName('div');
console.log(todoLosDivId);
var todoLosDivIdarray = Array.from(todoLosDivId);
/*
var todoLosDiv2 = todoLosDiv[2].textContent;
console.log(todoLosDiv2);

var todoLosDiv2 = todoLosDiv[2].innerHTML = "Otro texto para el segundo elemento";
console.log(todoLosDiv2);

var todoLosDiv2 = todoLosDiv[2].textWContent = "HOLA MUNDO";
console.log(todoLosDiv2);
*/

//SELECCIONAR ELEMENTOS POR ID
var mysection = document.querySelector("#mysection");
var hr = document.createElement("hr");

todoLosDivIdarray.forEach(element => {
    var parrafo = document.createElement('p');
    var texto = document.createTextNode(element.textContent);
    parrafo.append(texto);
    mysection.append(parrafo);
});
mysection.append(hr);



//UBICAR ELEMENTOS POR SU CLASE
var todosDivClass = document.getElementsByClassName("micaja");
var todoLosDivClassarray = Array.from(todosDivClass);
console.log("todoLosDivClassarray", todoLosDivClassarray);

todoLosDivClassarray.forEach(element => {
    if (element.className.includes("rojo")) {
        element.style.background = "red";
    } else if (element.className.includes("amarillo")) {
        element.style.background = "yellow";
    } else if (element.className.includes("verde")) {
        element.style.background = "green";
    }
});
mysection.append(hr);

//QUERY SELECTOR
var encabezadoId = document.querySelector("#encabezado");
console.log(encabezadoId);

var elementByClass = document.querySelector(".micaja");
console.log(elementByClass);

var elementByClass = document.querySelectorAll(".micaja");
console.log(elementByClass);