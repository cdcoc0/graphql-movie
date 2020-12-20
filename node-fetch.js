"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMovies = undefined;

var _nodeFetch = require("node-fetch");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = "https://yts.mx/api/v2/list_movies.json?";

var getMovies = exports.getMovies = function getMovies(limit, rating) {
    var REQUEST_URL = API_URL;
    if (limit > 0) {
        REQUEST_URL += "limit=" + limit;
    }
    if (rating > 0) {
        REQUEST_URL += "&minimum_rating=" + rating;
    }
    return (0, _nodeFetch2.default)(REQUEST_URL).then(function (res) {
        return res.json();
    }).then(function (json) {
        return json.data.movies;
    });
};

//node-fetch install
// export const getMovies = (limit, rating) =>
//     fetch(`${API_URL}`)
//     .then(res => res.json())
//     .then(json => json.data.movies);