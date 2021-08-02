'use strict'

//CALCULADORA QUE PIDA 2 NUMEROS POR PANTALLA, QUE VALIDE LOS NUMEROS, 
//EN EL CUERPO DE LA PAGINA MOSTRAR EN UN ALERT Y POR LA CONSOLA EL RESULTADO DE LAS OPERACIONES CON ESOS NUMEROS

var numero1 = parseInt(prompt('Ingrese numero 1', 0));
var numero2 = parseInt(prompt('Ingrese numero 2', 0));

while (isNaN(numero1) || isNaN(numero2 || numero1 < 0 || numero2 < 0)) {
    numero1 = parseInt(prompt('Ingrese numero 1', 0));
    numero2 = parseInt(prompt('Ingrese numero 2', 0));
}

var resultado = "LA SUMA ES: "+(numero1+numero2)+"<br/>"+
                "LA RESTA ES: "+(numero1-numero2)+"<br/>"+
                "LA MULTIPLICACION ES: "+(numero1*numero2)+"<br/>"+
                "LA DIVISION ES: "+(numero1/numero2)+"<br/>";

var resultado2 = "LA SUMA ES: "+(numero1+numero2)+"\n"+
                "LA RESTA ES: "+(numero1-numero2)+"\n"+
                "LA MULTIPLICACION ES: "+(numero1*numero2)+"\n"+
                "LA DIVISION ES: "+(numero1/numero2)+"\n";

alert("Operaciones entre: "+resultado2);
document.write(resultado);
console.log(resultado2);


