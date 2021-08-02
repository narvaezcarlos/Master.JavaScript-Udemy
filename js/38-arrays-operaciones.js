'use stric'

var categorias = ['Accion', "Terror", "Comedias"];
var peliculas = ["IT", "SCARFACE", "SCARY MOVIE"];
var cine = [categorias, peliculas];

do {
    var elemento = prompt("Introduce tu pelicula: ");
    if (elemento != "fin") {
        peliculas.push(elemento);
    }
}while (elemento != "fin");

document.write(peliculas);


var index = peliculas.indexOf("IT");
console.log(index);
if (index > -1) {
    peliculas.splice(index, 2);
}

var peliculasString = peliculas.join();

console.log(peliculasString);