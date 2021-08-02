'use strict';

//FUNCIONES
//Agrupacion reutilizable de un conjunto de instrucciones

//Se defiune la funcion
function porConsola(num1, num2) {
    console.log("Suma: ", num1+num2);
    console.log("Resta: ", num1-num2);
    console.log("Multiplicacion: ", num1*num2);
    console.log("Division: ", num1/num2);
    return true;
}

function porPantalla(num1, num2) {
    document.write("Suma: ", num1+num2+"<br/>");
    document.write("Resta: ", num1-num2+"<br/>");
    document.write("Multiplicacion: ", num1*num2+"<br/>");
    document.write("Division: ", num1/num2+"<br/>");  
    return true;
}

function calculadora(num1, num2, mostrar = false) {
    //Conjunto de instrucciones
    if (mostrar == false) {
        porConsola(num1, num2);
    } else {
        porPantalla(num1, num2);
    }
}

//llamado a la funcion
calculadora(5, 4);