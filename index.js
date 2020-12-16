import {GraphQLServer} from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(() => console.log("Graphql Server Running"));

//schema: 주고 받을 데이터에 관한 설명