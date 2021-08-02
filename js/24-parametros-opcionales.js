'use strict';

//FUNCIONES
//Agrupacion reutilizable de un conjunto de instrucciones

//Se defiune la funcion
function calculadora(num1, num2, mostrar = false) {
    //Conjunto de instrucciones
    if (mostrar == true) {
        console.log("Suma: ", num1+num2);
        console.log("Resta: ", num1-num2);
        console.log("Multiplicacion: ", num1*num2);
        console.log("Division: ", num1/num2);
        console.log("Mostrar: ", mostrar);    
        return true;
    } else {
        console.log("Suma: ", num1+num2);
        console.log("Resta: ", num1-num2);
        console.log("Multiplicacion: ", num1*num2);
        console.log("Division: ", num1/num2);
        console.log("Mostrar: ", mostrar);    
        return false;
    }

}

//llamado a la funcion
calculadora(5, 4);