'use strict';

//EJERCICIO COMPLETO LOCALSTORAGE
/*
1.Crear un formulario que permita añadir peliculas
*/

var formulario = document.querySelector('#peliculas');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formulario.addMovie.value !== null && formulario.addMovie.value !== "" && formulario.addMovie.value.length >= 1) {
        localStorage.setItem(formulario.addMovie.value, formulario.addMovie.value);
    } else {
        alert("Pelicula invalida");
        return false;
    }
});

var ul = document.querySelector('.peliculas-list');

for (const key in localStorage) {
    if (typeof(localStorage[key]) == 'string') {
        var li = document.createElement('li');
        li.append(localStorage[key]);
        ul.append(li);
    }
}



