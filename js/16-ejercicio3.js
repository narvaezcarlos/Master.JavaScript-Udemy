'use strict'

//HACER UN PROGRAMA QUE MUESTRE UN PROGRAMA QUE MUESTRE TODOS LOS NUMEROS
//QUE HAY ENTRE DOS NUMEROS QUE INTRODUZCA EL USUARIO

var numero1 = parseInt(prompt("INTRODUCE NUMERO 1",0));
var numero2 = parseInt(prompt("INTRODUCE NUMERO 2",0));

document.write("<h1>DESDE EL"+numero1+"HASTA EL NUMERO"+numero2+"</h1><br/>");
for (let index = numero1; index < numero2; index++) {
    document.write(index+"<br/>");
    console.log("numero", index);    
}