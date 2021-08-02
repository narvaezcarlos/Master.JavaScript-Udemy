'use strict'

//MOSTRAR SI UN NUMERO ES PAR O IMPAR A UN NUMERO INTRODUCIDO POR UN NUMERO (VALIDAR DATO)

var numero = parseInt(prompt('Introduce un numero', 0));

while (isNaN(numero)) {
    numero = parseInt(prompt('Introduce un numero', 0));
}

if (numero%2 == 0) {
    alert("Numero par");
}else{
    alert('Numero Impar');
}