'use strict'

var numero = 444;
var texto1 = "  Bienvenidos al curso de JavaScript de Victor Robles   ";
var texto2 = "Es muy Bueno";

var busqueda = texto1.replace("JavaScript", "Symfony");
console.log(busqueda);

var busqueda = texto1.slice(14, 23);
console.log(busqueda);

var busqueda = texto1.split("al");
console.log(busqueda);

var busqueda = texto1.trim();
console.log(busqueda);