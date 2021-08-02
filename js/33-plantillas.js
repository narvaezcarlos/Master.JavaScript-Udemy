'use strict'

//PLANTILLAS DE TEXTO CON JS

var nombres = prompt("Ingresa tus nombres: ");
var apellidos = prompt("Ingresa tus apellidos: ");

// var texto = "Mi nonbre es: "+nombres+"<br/> Mis apellidos son: "+apellidos;
// document.write(texto);

//Con plantilla
var texto = `
    <h1>Hola que tal</h1> 
    <h3>Mis nombres son: ${nombres}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3>
`;
document.write(texto);