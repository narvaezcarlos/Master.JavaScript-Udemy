'use strict'

var numero = 666;
var texto1 = "Bienvenido al curso de jscript de Victor Robles curso";
var texto2 = "Es muy buen curso";

var busqueda = texto1.indexOf("curso");
var busqueda = texto1.lastIndexOf("curso");
console.log(busqueda);

var busqueda = texto1.search("curso");
console.log(busqueda);

var busqueda = texto1.match("curso");
console.log(busqueda);

var busqueda = texto1.match(/curso/g);
console.log(busqueda);

var busqueda = texto1.substr(14,5);
console.log(busqueda);

var busqueda = texto1.charAt(14);
console.log(busqueda);

var busqueda = texto1.startsWith("Bi");
console.log(busqueda);

var busqueda = texto1.endsWith("curso");
console.log(busqueda);

var busqueda = texto1.includes("cursos");
console.log(busqueda);