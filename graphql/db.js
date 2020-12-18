export const people = [
    {
        id: 1,
        name: "Kiri",
        age: 27,
        gender: "F"
    },
    {
        id: 2,
        name: "podo",
        age: 20,
        gender: "F"
    },
    {
        id: 3,
        name: "kiwi",
        age: 24,
        gender: "M"
    },
    {
        id: 4,
        name: "cherry",
        age: 7,
        gender: "F"
    },
    {
        id: 5,
        name: "choco",
        age: 33,
        gender: "F"
    }];
    
   export const getById = id => {
        const filteredPeople = people.filter(person => id === people.id);
        return filteredPeople(0);
    }