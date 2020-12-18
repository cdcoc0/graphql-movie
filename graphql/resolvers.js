import {getById, people} from "./db"

const resolvers = {
    Query: {
        people: () => people,
        //person: () => getById
        // person: function() {
        //     return kiri;
        // }
    }
};

export default resolvers;