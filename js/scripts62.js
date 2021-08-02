'use strict'

//Realizar un programa que:
/*
1. Pida 6 numeros por pantalla y los coloque en un Array
2.Mostrar el Array entero en el cuerpo de la pagina y en la consola
3.Mostrar el array ordenado 
4.Invertir el array y mostrarlo
5.Mostrar cuantos elementos tiene el array
6.Buscar un valor introducido por el usuario, decir si lo encuentra y el indice
*/

/*
1.Creando objeto array
var numeros = new Array(6);
for (let index = 0; index < 6; index++) {
    numeros[index] = parseInt(prompt("Introce un numero", 0));
}
document.write("<div>"+numeros+"</div>");
console.log(numeros);
*/

//1.Otra manera
var numeros = [];
for (let index = 0; index < 6; index++) {
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}

//2.Mostrando por consola y por pantalla
console.log("mostrar",numeros);
mostrarArray(numeros, "Mostrar");

//3.Array ordenado
numeros.sort(function (a,b) { return a - b});
console.log("ordenado",numeros);
mostrarArray(numeros, "Ordenado");

//4.invertir array
numeros.reverse();
console.log("reverse",numeros);
mostrarArray(numeros, "Invertido");

//5.numero de elementos
var count = numeros.length;
console.log("numero de elementos", count);

//6.buscar valor introducido
var buscar = parseInt(prompt("Busca un numero", 0));
var busqueda1 = numeros.some(numero => numero == buscar);
console.log(busqueda1);

var busqueda2 = numeros.findIndex(numero => numero == buscar);
console.log(busqueda2);


if (busqueda2 != -1) {
    document.write("<h1>Encontrado</h1>");
    document.write("<h1>Encontrado en la posicion "+busqueda2+"</h1>");
} else {
    document.write("<h1>No encontrado</h1>");
}

function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach(element => {
        document.write("<li><strong>"+element+"</strong></li>");
    });
    document.write("</ul>");
}