const kiri = {
    name: "Kiri",
    age: 27,
    gender: "F"
};

const resolvers = {
    Query: {
        person: () => kiri
        // person: function() {
        //     return kiri;
        // }
    }
};

export default resolvers;