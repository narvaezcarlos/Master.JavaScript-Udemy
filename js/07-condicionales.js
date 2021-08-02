'use strict'

//CONDICIONALES

var edad = 19;
var nombre = "DAVID SUAREZ"; 

 if (edad >= 18) {
     console.log("USUARIO MAYOR DE EDAD", nombre+" "+edad+" años");
     if (edad <= 33) {
         console.log("TODAVIA ERES MILLENIAL");
     }else if(edad >= 70){
         console.log("ERES ANCIANO");
     }else{
         console.log("YA NO ERES MILLENIAL");
     }
 }else{
     console.log("EL USUARIO ES MENOR DE EDAD");
 }

 //OPERADORES LOGICOS
 var year = 2028;
 if (year != 2016) {
     console.log("EL AÑO NO ES 2016");
 }

 if (year >= 2000 && year <= 2020 && year != 2018) {
     console.log("ESTAMOS EN LA ERA ACTUAL");
 }else{
     console.log("ESTAMOS EN LA ERA POST MODERNA");
 }

 if (year == 2008 || (year >= 2018 && year == 2028)) {
     console.log("EL AÑO ACABA EN 8");
 }else{
     console.log("AÑO NO REGISTRADO");
 }