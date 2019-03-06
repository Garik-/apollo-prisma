import { QueryResolvers } from '../../generated/graphqlgen'

export const Query: QueryResolvers.Type = {
    ...QueryResolvers.defaultResolvers,
    categories: async (_, args, { dataSources }) => {
        return dataSources.prismaAPI.getCategories(args)
    }
}