'use strict';

//PARAMETROS REST
function listadoFrutas(fruta1, fruta2, ...todas) {
    console.log("REST");
    console.log("FRUTA 1", fruta1);
    console.log("FRUTA 2", fruta2);
    console.log("TODAS", todas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

//PARAMETROS SPREAD
function listadoFrutas2(fruta1, fruta2, ...todas) {
    console.log("SPREAD");
    console.log("FRUTA 1", fruta1);
    console.log("FRUTA 2", fruta2);
    console.log("TODAS", todas);
}

var frutas = ["Naranja", "Manzana"];
listadoFrutas2(...frutas, "Sandia", "Pera", "Melon", "Coco"); 