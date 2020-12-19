import {getById, getMovies} from "./db"

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, {id}) => getById(id)
        // person: function() {
        //     return kiri;
        // }
    },
};

export default resolvers;