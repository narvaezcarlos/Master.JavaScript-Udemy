'use strict'

//Funcion anonima, es una funcion que no tiene nombre

/*
var pelicula = function (nombre) {
    return "La pelicula es:"+nombre;
};
*/

function sumar(num1, num2, sumaYmuestra,sumaPorDos) {
    var result = num1 + num2;
    sumaYmuestra(result);
    sumaPorDos(result);
    return result;
}

//console.log(sumar(4,5));

sumar(5,7, function (dato) {
    console.log("La suma es: ", dato);
},
function(dato) {
    console.log("La suma por dos es: ", (dato*2));
});