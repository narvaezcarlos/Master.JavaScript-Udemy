'use strict'

//Arrays avanzados
var nombre = "Victor Robles";
var nombres = ["Victor Robles", "Carlos Narvaez", "Carmen Narvaez"];

var lenguajes = new Array("PHP", "JS", "GO", "JAVA","C#");

console.log(lenguajes.length);

// var elemento = parseInt(prompt("Que elemento quieres? ", 0));
// if (elemento >= nombres.length) {
//     alert("Introduce numero menor que: "+nombres.length);
// } else {
//     alert("El usuario seleccionado es: "+nombres[elemento]);    
// }

document.write("<h1>Lenguajes de programacion del 2019</h1>");
document.write("<ul>");
lenguajes.forEach((elemento,index, data) => {
    document.write("<li>"+index+"-"+elemento+"</li>");
});
document.write("</ul>");