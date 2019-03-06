import PrismaAPI from './datasources/prisma'

interface DataSources {
    prismaAPI: PrismaAPI
}

export interface Context {
  dataSources: DataSources
}


