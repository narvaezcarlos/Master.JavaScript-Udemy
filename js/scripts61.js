'use strict'

var lenguages = ['php','js', 'ruby'];

for (let lenguaje in lenguages) {
    document.write("<li>"+lenguages[lenguaje]+"</li>");
}

//Busquedas
var busqueda = lenguages.find(function (lenguages) {
    return lenguages == "js";
});

console.log(busqueda);


var busqueda = lenguages.find(lenguage => lenguage =="php");
console.log(busqueda);

var busqueda = lenguages.findIndex(lenguage => lenguage =="js");
console.log(busqueda);

var precios = [10,20,30,50,80,12];
var busqueda = precios.some(precio => precio > 80);
console.log(busqueda);