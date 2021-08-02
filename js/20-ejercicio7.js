'use strict'

//TABLA D EMULTIPLICAR DE UN NUMERO INTRODUCIDO POR PANTALLA

var numero = parseInt(prompt("De que numero quieres la tabla", 1));

while (isNaN(numero)) {
    numero = parseInt(prompt("De que numero quieres la tabla", 1));
}
    document.write("<h1>TABLA DEL "+numero+"</h1>");
for (let index = 0; index < 10; index++) {
    var result = numero * index;
    console.log(index+" * "+numero+" = "+ result);
    document.write(index+" * "+numero+" = "+ result+"<br/>");
}

//TODAS LAS TABLAS DE MULTIPLICAR
for (let index = 0; index < 10; index++) {
    document.write("<h1>TABLA DEL "+index+"</h1>");
    for (let index2 = 0; index2 < 10; index2++) {
        var result = index * index2;
        console.log(index+" * "+index2+" = "+ result);
        document.write(index+" * "+index2+" = "+ result+"<br/>");
    }
}