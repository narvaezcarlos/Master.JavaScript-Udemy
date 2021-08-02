'use strict'

//SWITCH

var edad = 15;
var imprime;

switch (edad) {
    case 18:
        imprime = "ACABAS D ECUMPLIR LA MAYORIA DE EDAD";
        break;
    case 25:
        imprime = "YA ERES UN ADULTO";
        break;
    case 40:
        imprime = "CRISIS DE LOS 40";
        break;
    default:
        imprime = "TU EDAD ES NEUTRA";
        break;
} 

console.log(imprime);