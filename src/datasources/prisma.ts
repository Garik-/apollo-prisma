import { Prisma } from "../../generated/prisma-client"
import { DataSource } from 'apollo-datasource'

export default class PrismaAPI extends DataSource {
  prisma!: Prisma
  constructor(prisma: Prisma) {
    super()
    this.prisma = prisma
  }

  async getCategories(args) {
      return this.prisma.categories(args)
      // return [{ name: 'first'}, {name: 'second2'}]
  }
}