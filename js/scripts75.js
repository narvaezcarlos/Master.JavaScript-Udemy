'use strict';

//LOCAL STORAGE
if (typeof (Storage)) {
    console.log("Local storage disponible");
} else {
    console.log("Local storage no esta disponible");
}

//Guardar daros en el localstorage
localStorage.setItem("title", "Curso de javascript");

//Recuperar elementos del localstorage
var title = localStorage.getItem('title');
console.log(title);

document.querySelector('#peliculas').innerHTML = title;

//Guardar Objecto JSON
var movies =    {
    title: 'SUPERMAN',
    year: '2020',
    country: 'Estados Unidos'
};
localStorage.setItem("movies", JSON.stringify(movies));

//Recuperar elementos del localstorage
var movies = localStorage.getItem('movies');
console.log(movies);

var userJson = JSON.parse(movies);
console.log(userJson);
document.querySelector('#peliculas').append(userJson.title + " " + userJson.year);

//Borrar todo el localstorage
localStorage.clear('movies');