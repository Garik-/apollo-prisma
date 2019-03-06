"use strict";
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var fs_1 = require("fs");
var resolvers_1 = require("./resolvers");
var prisma_1 = require("./datasources/prisma");
var server = new apollo_server_1.ApolloServer({
    typeDefs: apollo_server_1.gql(fs_1.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')),
    resolvers: resolvers_1.resolvers,
    dataSources: function () { return ({
        prismaAPI: new prisma_1["default"]()
    }); }
});
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80 Server ready at " + url);
});
