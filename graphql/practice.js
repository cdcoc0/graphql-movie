export let movies = [
    {
        id: 0,
        name: "LALALand",
        score: 3.7
    },
    {
        id: 1,
        name: "Harry Potter",
        score: 3.8
    },
    {
        id: 2,
        name: "Home Alone",
        score: 3.7
    },
    {
        id: 3,
        name: "Classic",
        score: 3.8
    },
    {
        id: 4,
        name: "Legally Blonde",
        score: 3.5
    },
    {
        id: 5,
        name: "Parasite",
        score: 4.0
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => id === movie.id);
    return filteredMovies[0];
};

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => id !== movie.id);
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}