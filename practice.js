"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var movies = exports.movies = [{
    id: 0,
    name: "LALALand",
    score: 3.7
}, {
    id: 1,
    name: "Harry Potter",
    score: 3.8
}, {
    id: 2,
    name: "Home Alone",
    score: 3.7
}, {
    id: 3,
    name: "Classic",
    score: 3.8
}, {
    id: 4,
    name: "Legally Blonde",
    score: 3.5
}, {
    id: 5,
    name: "Parasite",
    score: 4.0
}];

var getMovies = exports.getMovies = function getMovies() {
    return movies;
};

var getById = exports.getById = function getById(id) {
    var filteredMovies = movies.filter(function (movie) {
        return id === movie.id;
    });
    return filteredMovies[0];
};

var deleteMovie = exports.deleteMovie = function deleteMovie(id) {
    var cleanedMovies = movies.filter(function (movie) {
        return id !== movie.id;
    });
    if (movies.length > cleanedMovies.length) {
        exports.movies = movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

var addMovie = exports.addMovie = function addMovie(name, score) {
    var newMovie = {
        id: "" + movies.length,
        name: name,
        score: score
    };
    movies.push(newMovie);
    return newMovie;
};