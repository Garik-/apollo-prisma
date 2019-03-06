import { QueryResolvers } from '../../generated/graphqlgen'
import { Category } from '../../generated/prisma-client';

export const Query: QueryResolvers.Type = {
    ...QueryResolvers.defaultResolvers,
    categories: () => {
        return [{ name: 'first' }, { name: 'second' }]
    }
}