import { ApolloServer, gql } from 'apollo-server'
import { readFileSync } from 'fs'
import { resolvers } from './resolvers'
import PrismaAPI from './datasources/prisma'
import { prisma } from '../generated/prisma-client'

const server = new ApolloServer({
    typeDefs: gql(readFileSync(__dirname.concat('/schema.graphql'), 'utf8')),
    resolvers,
    dataSources: () => ({
        prismaAPI: new PrismaAPI(prisma)
    })
})

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
})