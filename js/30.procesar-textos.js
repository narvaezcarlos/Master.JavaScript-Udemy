'use strict'

//FUNCIONES Y METODOS PARA PROCESAR TEXTOS
//TRANSFORMACION DE TEXTOS
var numero = 666;
var texto1 = "Bienvenido al curso de jscript de Victor Robles";
var texto2 = "Es muy buen curso";

var dato = numero.toString();
dato = texto1.toUpperCase();
dato = texto1.toLowerCase();
console.log(dato);

//Calcular longitud de un texto

var nombre = "Carlos Narvaez";
nombre = ["Hola", "Mundo"]
console.log(nombre.length);

//CONCATENAR TEXTOS
var textoTotal = texto1+" "+texto2;
console.log(textoTotal);

var textoTotal = texto1.concat(" "+texto2);
console.log(textoTotal);