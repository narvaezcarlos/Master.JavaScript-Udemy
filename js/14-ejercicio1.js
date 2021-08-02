'use strict'

//PROGRAMA QUE PIDA 2 NUMEROS Y NOS DIGA:
//CUAL ES EL MAYOR
//EL MENOR
//O SI SON IGUALES
//SI EL TIPO DE DATO NO ES NUMERO 
//NUMERO MENORES O IGUALES A O

//MI LOGICA
/*
var numero1 = prompt("Numero 1:", 0);
var numero2 = prompt("Numero 2:", 0);
var result = numero1 - numero2;
console.log( typeof result);
switch (result > 0) {
    case true:
        console.log("NUMERO 1 MAYOR QUE NUMERO 2");
        break;
    case false:        
        if (result == 0) {
            console.log("AMBOS NUMEROS SON IGUALES");
        }else{
            console.log("NUMERO 1 MENOR QUE NUMERO 2");
        }
        break;
    default:
        console.log("INTRODUCE NUMEROS CORRECTOS");
        break;
}
*/

var numero3 = prompt("Numero 2:", 0);
var numero4 = prompt("Numero 3:", 0);

while (numero3 <= 0 || numero4 <= 0 || isNaN(numero3) || isNaN(numero4)) {
    numero3 = prompt("Numero 2:", 0);
    numero4 = prompt("Numero 3:", 0);
}

if (numero3 ==  numero4) {
    console.log("AMBOS NUMEROS SON IGUALES");
} else if (numero3 > numero4) {
    console.log("NUMERO 1 MAYOR QUE NUMERO 2");
}else if (numero3 < numero4) {
    console.log("NUMERO 1 MENOR QUE NUMERO 2");
}else{
    console.log("INTRODUCE NUMEROS CORRECTOS");
}