'use strict'

//MOSTRAR TODOS LOS NUMEROS DIVISORES DE UN NUMERO INTRODUCIDO POR EL USUARIO

var numero = parseInt(prompt("INTRODUCE EL PRIMER NUMERO",0));

for (let index = 0; index < numero; index++) {
    //console.log("Divisor "+numero);
    if (numero%index == 0) {
        console.log("El numero "+index+" es divisor de "+numero);
    }    
}