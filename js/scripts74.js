'use strict';

//OBJECTOS JSON: JAVASCRIPT OBJECT NOTATION

var movie = {
    title: 'BARMAN VS SUPERMAN',
    year: '2017',
    country: 'Estados Unidos'
};
console.log(movie);
console.log(movie.title);
movie.title = "BATMAN BEGIN";
console.log(movie.title);

var movies = [{
        title: 'BARMAN VS SUPERMAN',
        year: '2017',
        country: 'Estados Unidos'
    },
    {
        title: 'BARMAN',
        year: '2019',
        country: 'Estados Unidos'
    },
    {
        title: 'SUPERMAN',
        year: '2020',
        country: 'Estados Unidos'
    }
];

console.log(movies);


movies.forEach(element => {
    console.log(element);
    var parrafo = document.createElement("p");
    parrafo.append(element.title + " " + element.year);
    document.querySelector(".peliculas").append(parrafo);
});