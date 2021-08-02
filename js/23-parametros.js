'use strict';

//FUNCIONES
//Agrupacion reutilizable de un conjunto de instrucciones

//Se defiune la funcion
function calculadora(num1, num2) {
    //Conjunto de instrucciones
    console.log("Suma: ", num1+num2);
    console.log("Resta: ", num1-num2);
    console.log("Multiplicacion: ", num1*num2);
    console.log("Division: ", num1/num2);

    return true;
}

//llamado a la funcion
calculadora(5, 4);