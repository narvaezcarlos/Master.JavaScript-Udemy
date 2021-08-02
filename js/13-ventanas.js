'use strict'

//ALERTA
/*
alert("ESTA ES MI ALERTA 1");
alert("ESTA ES MI ALERTA 2");
alert("ESTA ES MI ALERTA 3");
*/

//CONFIRMACION
/*
var mi_resultado = confirm("ESTAS SEGURO DE QUERER CONTINUAR?");
console.log(mi_resultado); 
*/

//INGRESO DE DATOS
var mi_resultado = prompt("¿QUE EDAD TIENES?", 0);
mi_resultado = parseInt(mi_resultado);
console.log(typeof mi_resultado);