'use strict'

//UTILIZANDO UN BUCLE MOSTRAR  LA MEDIA Y LA SUMA DE LOS RESULTADOS
//HASTA QUE EL USUARIO INTRODUZCO UN NUMERO NEGATIVO
//MOSTRAR EL RESULTADO

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Introduce un numero, hasta que introduzcas uno negativo", 0));
    
    if (isNaN(numero)) {
        numero = 0;
    } else if(numero >= 0) {
        suma += numero;
        contador++;
    }
} while (numero > 0);

console.log("SUMA", suma);
console.log("MEDIA", suma/contador);