import {getById, people} from "./db"

const resolvers = {
    Query: {
        people: () => people,
        person: (_, {id}) => getById(id)
        // person: function() {
        //     return kiri;
        // }
    }
};

export default resolvers;