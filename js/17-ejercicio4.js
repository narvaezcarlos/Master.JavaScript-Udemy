'use strict'

//MOSTRAR TODOS LOS NUMEROS IMPARES QUE HAY ENTRE DOS NUMEROS INTRODUCIDOS POR EL USUARIO

var numero1 = parseInt(prompt("INTRODUCE EL PRIMER NUMERO",0));
var numero2 = parseInt(prompt("INTRODUCE EL SEGUNDO NUMERO",0));

while (numero2>numero1) {
    numero1++;
    if (numero1%2 != 0) {
        console.log("Numero "+numero1+" es impár");
    }
}