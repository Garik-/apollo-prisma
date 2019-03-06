import { Resolvers } from '../../generated/graphqlgen'
import { Query } from './Query'
import { Category } from './Category'

const resolvers: Resolvers = {
    Query,
    Category
}

export {
    resolvers
}