export const typeDefs = /* GraphQL */ `type AggregateBlockchain {
  count: Int!
}

type AggregateCategory {
  count: Int!
}

type AggregateGame {
  count: Int!
}

type AggregateGenre {
  count: Int!
}

type AggregateImage {
  count: Int!
}

type AggregateSeo {
  count: Int!
}

type AggregateSocial {
  count: Int!
}

type AggregateStatistic {
  count: Int!
}

type AggregateTopApp {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Blockchain {
  name: String!
}

type BlockchainConnection {
  pageInfo: PageInfo!
  edges: [BlockchainEdge]!
  aggregate: AggregateBlockchain!
}

input BlockchainCreateInput {
  name: String!
}

input BlockchainCreateManyInput {
  create: [BlockchainCreateInput!]
  connect: [BlockchainWhereUniqueInput!]
}

type BlockchainEdge {
  node: Blockchain!
  cursor: String!
}

enum BlockchainOrderByInput {
  name_ASC
  name_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BlockchainPreviousValues {
  name: String!
}

input BlockchainScalarWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [BlockchainScalarWhereInput!]
  OR: [BlockchainScalarWhereInput!]
  NOT: [BlockchainScalarWhereInput!]
}

type BlockchainSubscriptionPayload {
  mutation: MutationType!
  node: Blockchain
  updatedFields: [String!]
  previousValues: BlockchainPreviousValues
}

input BlockchainSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BlockchainWhereInput
  AND: [BlockchainSubscriptionWhereInput!]
  OR: [BlockchainSubscriptionWhereInput!]
  NOT: [BlockchainSubscriptionWhereInput!]
}

input BlockchainUpdateDataInput {
  name: String
}

input BlockchainUpdateInput {
  name: String
}

input BlockchainUpdateManyDataInput {
  name: String
}

input BlockchainUpdateManyInput {
  create: [BlockchainCreateInput!]
  update: [BlockchainUpdateWithWhereUniqueNestedInput!]
  upsert: [BlockchainUpsertWithWhereUniqueNestedInput!]
  delete: [BlockchainWhereUniqueInput!]
  connect: [BlockchainWhereUniqueInput!]
  disconnect: [BlockchainWhereUniqueInput!]
  deleteMany: [BlockchainScalarWhereInput!]
  updateMany: [BlockchainUpdateManyWithWhereNestedInput!]
}

input BlockchainUpdateManyMutationInput {
  name: String
}

input BlockchainUpdateManyWithWhereNestedInput {
  where: BlockchainScalarWhereInput!
  data: BlockchainUpdateManyDataInput!
}

input BlockchainUpdateWithWhereUniqueNestedInput {
  where: BlockchainWhereUniqueInput!
  data: BlockchainUpdateDataInput!
}

input BlockchainUpsertWithWhereUniqueNestedInput {
  where: BlockchainWhereUniqueInput!
  update: BlockchainUpdateDataInput!
  create: BlockchainCreateInput!
}

input BlockchainWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [BlockchainWhereInput!]
  OR: [BlockchainWhereInput!]
  NOT: [BlockchainWhereInput!]
}

input BlockchainWhereUniqueInput {
  name: String
}

type Category {
  name: String!
}

type CategoryConnection {
  pageInfo: PageInfo!
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  name: String!
}

input CategoryCreateOneInput {
  create: CategoryCreateInput
  connect: CategoryWhereUniqueInput
}

type CategoryEdge {
  node: Category!
  cursor: String!
}

enum CategoryOrderByInput {
  name_ASC
  name_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CategoryPreviousValues {
  name: String!
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
  AND: [CategorySubscriptionWhereInput!]
  OR: [CategorySubscriptionWhereInput!]
  NOT: [CategorySubscriptionWhereInput!]
}

input CategoryUpdateDataInput {
  name: String
}

input CategoryUpdateInput {
  name: String
}

input CategoryUpdateManyMutationInput {
  name: String
}

input CategoryUpdateOneRequiredInput {
  create: CategoryCreateInput
  update: CategoryUpdateDataInput
  upsert: CategoryUpsertNestedInput
  connect: CategoryWhereUniqueInput
}

input CategoryUpsertNestedInput {
  update: CategoryUpdateDataInput!
  create: CategoryCreateInput!
}

input CategoryWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [CategoryWhereInput!]
  OR: [CategoryWhereInput!]
  NOT: [CategoryWhereInput!]
}

input CategoryWhereUniqueInput {
  name: String
}

type Game {
  id: ID!
  name: String!
  category: Category!
  excerpt: String
  description: String
  mounthslyPlayers: Float
  featured: Boolean
  genres(where: GenreWhereInput, orderBy: GenreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Genre!]
  blockchains(where: BlockchainWhereInput, orderBy: BlockchainOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Blockchain!]
  statistics(where: StatisticWhereInput, orderBy: StatisticOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Statistic!]
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image!]
  socials(where: SocialWhereInput, orderBy: SocialOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Social!]
  seo: Seo
  topApp: TopApp
  importId: ID
  created: Float
  link: String
}

type GameConnection {
  pageInfo: PageInfo!
  edges: [GameEdge]!
  aggregate: AggregateGame!
}

input GameCreateInput {
  name: String!
  category: CategoryCreateOneInput!
  excerpt: String
  description: String
  mounthslyPlayers: Float
  featured: Boolean
  genres: GenreCreateManyInput
  blockchains: BlockchainCreateManyInput
  statistics: StatisticCreateManyWithoutGameInput
  images: ImageCreateManyWithoutGameInput
  socials: SocialCreateManyWithoutGameInput
  seo: SeoCreateOneWithoutGameInput
  topApp: TopAppCreateOneWithoutGameInput
  importId: ID
  created: Float
  link: String
}

input GameCreateOneWithoutImagesInput {
  create: GameCreateWithoutImagesInput
  connect: GameWhereUniqueInput
}

input GameCreateOneWithoutSeoInput {
  create: GameCreateWithoutSeoInput
  connect: GameWhereUniqueInput
}

input GameCreateOneWithoutSocialsInput {
  create: GameCreateWithoutSocialsInput
  connect: GameWhereUniqueInput
}

input GameCreateOneWithoutStatisticsInput {
  create: GameCreateWithoutStatisticsInput
  connect: GameWhereUniqueInput
}

input GameCreateOneWithoutTopAppInput {
  create: GameCreateWithoutTopAppInput
  connect: GameWhereUniqueInput
}

input GameCreateWithoutImagesInput {
  name: String!
  category: CategoryCreateOneInput!
  excerpt: String
  description: String
  mounthslyPlayers: Float
  featured: Boolean
  genres: GenreCreateManyInput
  blockchains: BlockchainCreateManyInput
  statistics: StatisticCreateManyWithoutGameInput
  socials: SocialCreateManyWithoutGameInput
  seo: SeoCreateOneWithoutGameInput
  topApp: TopAppCreateOneWithoutGameInput
  importId: ID
  created: Float
  link: String
}

input GameCreateWithoutSeoInput {
  name: String!
  category: CategoryCreateOneInput!
  excerpt: String
  description: String
  mounthslyPlayers: Float
  featured: Boolean
  genres: GenreCreateManyInput
  blockchains: BlockchainCreateManyInput
  statistics: StatisticCreateManyWithoutGameInput
  images: ImageCreateManyWithoutGameInput
  socials: SocialCreateManyWithoutGameInput
  topApp: TopAppCreateOneWithoutGameInput
  importId: ID
  created: Float
  link: String
}

input GameCreateWithoutSocialsInput {
  name: String!
  category: CategoryCreateOneInput!
  excerpt: String
  description: String
  mounthslyPlayers: Float
  featured: Boolean
  genres: GenreCreateManyInput
  blockchains: BlockchainCreateManyInput
  statistics: StatisticCreateManyWithoutGameInput
  images: ImageCreateManyWithoutGameInput
  seo: SeoCreateOneWithoutGameInput
  topApp: TopAppCreateOneWithoutGameInput
  importId: ID
  created: Float
  link: String
}

input GameCreateWithoutStatisticsInput {
  name: String!
  category: CategoryCreateOneInput!
  excerpt: String
  description: String
  mounthslyPlayers: Float
  featured: Boolean
  genres: GenreCreateManyInput
  blockchains: BlockchainCreateManyInput
  images: ImageCreateManyWithoutGameInput
  socials: SocialCreateManyWithoutGameInput
  seo: SeoCreateOneWithoutGameInput
  topApp: TopAppCreateOneWithoutGameInput
  importId: ID
  created: Float
  link: String
}

input GameCreateWithoutTopAppInput {
  name: String!
  category: CategoryCreateOneInput!
  excerpt: String
  description: String
  mounthslyPlayers: Float
  featured: Boolean
  genres: GenreCreateManyInput
  blockchains: BlockchainCreateManyInput
  statistics: StatisticCreateManyWithoutGameInput
  images: ImageCreateManyWithoutGameInput
  socials: SocialCreateManyWithoutGameInput
  seo: SeoCreateOneWithoutGameInput
  importId: ID
  created: Float
  link: String
}

type GameEdge {
  node: Game!
  cursor: String!
}

enum GameOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  excerpt_ASC
  excerpt_DESC
  description_ASC
  description_DESC
  mounthslyPlayers_ASC
  mounthslyPlayers_DESC
  featured_ASC
  featured_DESC
  importId_ASC
  importId_DESC
  created_ASC
  created_DESC
  link_ASC
  link_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GamePreviousValues {
  id: ID!
  name: String!
  excerpt: String
  description: String
  mounthslyPlayers: Float
  featured: Boolean
  importId: ID
  created: Float
  link: String
}

type GameSubscriptionPayload {
  mutation: MutationType!
  node: Game
  updatedFields: [String!]
  previousValues: GamePreviousValues
}

input GameSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GameWhereInput
  AND: [GameSubscriptionWhereInput!]
  OR: [GameSubscriptionWhereInput!]
  NOT: [GameSubscriptionWhereInput!]
}

input GameUpdateInput {
  name: String
  category: CategoryUpdateOneRequiredInput
  excerpt: String
  description: String
  mounthslyPlayers: Float
  featured: Boolean
  genres: GenreUpdateManyInput
  blockchains: BlockchainUpdateManyInput
  statistics: StatisticUpdateManyWithoutGameInput
  images: ImageUpdateManyWithoutGameInput
  socials: SocialUpdateManyWithoutGameInput
  seo: SeoUpdateOneWithoutGameInput
  topApp: TopAppUpdateOneWithoutGameInput
  importId: ID
  created: Float
  link: String
}

input GameUpdateManyMutationInput {
  name: String
  excerpt: String
  description: String
  mounthslyPlayers: Float
  featured: Boolean
  importId: ID
  created: Float
  link: String
}

input GameUpdateOneRequiredWithoutImagesInput {
  create: GameCreateWithoutImagesInput
  update: GameUpdateWithoutImagesDataInput
  upsert: GameUpsertWithoutImagesInput
  connect: GameWhereUniqueInput
}

input GameUpdateOneRequiredWithoutSeoInput {
  create: GameCreateWithoutSeoInput
  update: GameUpdateWithoutSeoDataInput
  upsert: GameUpsertWithoutSeoInput
  connect: GameWhereUniqueInput
}

input GameUpdateOneRequiredWithoutSocialsInput {
  create: GameCreateWithoutSocialsInput
  update: GameUpdateWithoutSocialsDataInput
  upsert: GameUpsertWithoutSocialsInput
  connect: GameWhereUniqueInput
}

input GameUpdateOneRequiredWithoutStatisticsInput {
  create: GameCreateWithoutStatisticsInput
  update: GameUpdateWithoutStatisticsDataInput
  upsert: GameUpsertWithoutStatisticsInput
  connect: GameWhereUniqueInput
}

input GameUpdateOneRequiredWithoutTopAppInput {
  create: GameCreateWithoutTopAppInput
  update: GameUpdateWithoutTopAppDataInput
  upsert: GameUpsertWithoutTopAppInput
  connect: GameWhereUniqueInput
}

input GameUpdateWithoutImagesDataInput {
  name: String
  category: CategoryUpdateOneRequiredInput
  excerpt: String
  description: String
  mounthslyPlayers: Float
  featured: Boolean
  genres: GenreUpdateManyInput
  blockchains: BlockchainUpdateManyInput
  statistics: StatisticUpdateManyWithoutGameInput
  socials: SocialUpdateManyWithoutGameInput
  seo: SeoUpdateOneWithoutGameInput
  topApp: TopAppUpdateOneWithoutGameInput
  importId: ID
  created: Float
  link: String
}

input GameUpdateWithoutSeoDataInput {
  name: String
  category: CategoryUpdateOneRequiredInput
  excerpt: String
  description: String
  mounthslyPlayers: Float
  featured: Boolean
  genres: GenreUpdateManyInput
  blockchains: BlockchainUpdateManyInput
  statistics: StatisticUpdateManyWithoutGameInput
  images: ImageUpdateManyWithoutGameInput
  socials: SocialUpdateManyWithoutGameInput
  topApp: TopAppUpdateOneWithoutGameInput
  importId: ID
  created: Float
  link: String
}

input GameUpdateWithoutSocialsDataInput {
  name: String
  category: CategoryUpdateOneRequiredInput
  excerpt: String
  description: String
  mounthslyPlayers: Float
  featured: Boolean
  genres: GenreUpdateManyInput
  blockchains: BlockchainUpdateManyInput
  statistics: StatisticUpdateManyWithoutGameInput
  images: ImageUpdateManyWithoutGameInput
  seo: SeoUpdateOneWithoutGameInput
  topApp: TopAppUpdateOneWithoutGameInput
  importId: ID
  created: Float
  link: String
}

input GameUpdateWithoutStatisticsDataInput {
  name: String
  category: CategoryUpdateOneRequiredInput
  excerpt: String
  description: String
  mounthslyPlayers: Float
  featured: Boolean
  genres: GenreUpdateManyInput
  blockchains: BlockchainUpdateManyInput
  images: ImageUpdateManyWithoutGameInput
  socials: SocialUpdateManyWithoutGameInput
  seo: SeoUpdateOneWithoutGameInput
  topApp: TopAppUpdateOneWithoutGameInput
  importId: ID
  created: Float
  link: String
}

input GameUpdateWithoutTopAppDataInput {
  name: String
  category: CategoryUpdateOneRequiredInput
  excerpt: String
  description: String
  mounthslyPlayers: Float
  featured: Boolean
  genres: GenreUpdateManyInput
  blockchains: BlockchainUpdateManyInput
  statistics: StatisticUpdateManyWithoutGameInput
  images: ImageUpdateManyWithoutGameInput
  socials: SocialUpdateManyWithoutGameInput
  seo: SeoUpdateOneWithoutGameInput
  importId: ID
  created: Float
  link: String
}

input GameUpsertWithoutImagesInput {
  update: GameUpdateWithoutImagesDataInput!
  create: GameCreateWithoutImagesInput!
}

input GameUpsertWithoutSeoInput {
  update: GameUpdateWithoutSeoDataInput!
  create: GameCreateWithoutSeoInput!
}

input GameUpsertWithoutSocialsInput {
  update: GameUpdateWithoutSocialsDataInput!
  create: GameCreateWithoutSocialsInput!
}

input GameUpsertWithoutStatisticsInput {
  update: GameUpdateWithoutStatisticsDataInput!
  create: GameCreateWithoutStatisticsInput!
}

input GameUpsertWithoutTopAppInput {
  update: GameUpdateWithoutTopAppDataInput!
  create: GameCreateWithoutTopAppInput!
}

input GameWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  category: CategoryWhereInput
  excerpt: String
  excerpt_not: String
  excerpt_in: [String!]
  excerpt_not_in: [String!]
  excerpt_lt: String
  excerpt_lte: String
  excerpt_gt: String
  excerpt_gte: String
  excerpt_contains: String
  excerpt_not_contains: String
  excerpt_starts_with: String
  excerpt_not_starts_with: String
  excerpt_ends_with: String
  excerpt_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  mounthslyPlayers: Float
  mounthslyPlayers_not: Float
  mounthslyPlayers_in: [Float!]
  mounthslyPlayers_not_in: [Float!]
  mounthslyPlayers_lt: Float
  mounthslyPlayers_lte: Float
  mounthslyPlayers_gt: Float
  mounthslyPlayers_gte: Float
  featured: Boolean
  featured_not: Boolean
  genres_every: GenreWhereInput
  genres_some: GenreWhereInput
  genres_none: GenreWhereInput
  blockchains_every: BlockchainWhereInput
  blockchains_some: BlockchainWhereInput
  blockchains_none: BlockchainWhereInput
  statistics_every: StatisticWhereInput
  statistics_some: StatisticWhereInput
  statistics_none: StatisticWhereInput
  images_every: ImageWhereInput
  images_some: ImageWhereInput
  images_none: ImageWhereInput
  socials_every: SocialWhereInput
  socials_some: SocialWhereInput
  socials_none: SocialWhereInput
  seo: SeoWhereInput
  topApp: TopAppWhereInput
  importId: ID
  importId_not: ID
  importId_in: [ID!]
  importId_not_in: [ID!]
  importId_lt: ID
  importId_lte: ID
  importId_gt: ID
  importId_gte: ID
  importId_contains: ID
  importId_not_contains: ID
  importId_starts_with: ID
  importId_not_starts_with: ID
  importId_ends_with: ID
  importId_not_ends_with: ID
  created: Float
  created_not: Float
  created_in: [Float!]
  created_not_in: [Float!]
  created_lt: Float
  created_lte: Float
  created_gt: Float
  created_gte: Float
  link: String
  link_not: String
  link_in: [String!]
  link_not_in: [String!]
  link_lt: String
  link_lte: String
  link_gt: String
  link_gte: String
  link_contains: String
  link_not_contains: String
  link_starts_with: String
  link_not_starts_with: String
  link_ends_with: String
  link_not_ends_with: String
  AND: [GameWhereInput!]
  OR: [GameWhereInput!]
  NOT: [GameWhereInput!]
}

input GameWhereUniqueInput {
  id: ID
  importId: ID
}

type Genre {
  name: String!
}

type GenreConnection {
  pageInfo: PageInfo!
  edges: [GenreEdge]!
  aggregate: AggregateGenre!
}

input GenreCreateInput {
  name: String!
}

input GenreCreateManyInput {
  create: [GenreCreateInput!]
  connect: [GenreWhereUniqueInput!]
}

type GenreEdge {
  node: Genre!
  cursor: String!
}

enum GenreOrderByInput {
  name_ASC
  name_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GenrePreviousValues {
  name: String!
}

input GenreScalarWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [GenreScalarWhereInput!]
  OR: [GenreScalarWhereInput!]
  NOT: [GenreScalarWhereInput!]
}

type GenreSubscriptionPayload {
  mutation: MutationType!
  node: Genre
  updatedFields: [String!]
  previousValues: GenrePreviousValues
}

input GenreSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GenreWhereInput
  AND: [GenreSubscriptionWhereInput!]
  OR: [GenreSubscriptionWhereInput!]
  NOT: [GenreSubscriptionWhereInput!]
}

input GenreUpdateDataInput {
  name: String
}

input GenreUpdateInput {
  name: String
}

input GenreUpdateManyDataInput {
  name: String
}

input GenreUpdateManyInput {
  create: [GenreCreateInput!]
  update: [GenreUpdateWithWhereUniqueNestedInput!]
  upsert: [GenreUpsertWithWhereUniqueNestedInput!]
  delete: [GenreWhereUniqueInput!]
  connect: [GenreWhereUniqueInput!]
  disconnect: [GenreWhereUniqueInput!]
  deleteMany: [GenreScalarWhereInput!]
  updateMany: [GenreUpdateManyWithWhereNestedInput!]
}

input GenreUpdateManyMutationInput {
  name: String
}

input GenreUpdateManyWithWhereNestedInput {
  where: GenreScalarWhereInput!
  data: GenreUpdateManyDataInput!
}

input GenreUpdateWithWhereUniqueNestedInput {
  where: GenreWhereUniqueInput!
  data: GenreUpdateDataInput!
}

input GenreUpsertWithWhereUniqueNestedInput {
  where: GenreWhereUniqueInput!
  update: GenreUpdateDataInput!
  create: GenreCreateInput!
}

input GenreWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [GenreWhereInput!]
  OR: [GenreWhereInput!]
  NOT: [GenreWhereInput!]
}

input GenreWhereUniqueInput {
  name: String
}

type Image {
  id: ID!
  type: String!
  game: Game!
  link: String!
}

type ImageConnection {
  pageInfo: PageInfo!
  edges: [ImageEdge]!
  aggregate: AggregateImage!
}

input ImageCreateInput {
  type: String!
  game: GameCreateOneWithoutImagesInput!
  link: String!
}

input ImageCreateManyWithoutGameInput {
  create: [ImageCreateWithoutGameInput!]
  connect: [ImageWhereUniqueInput!]
}

input ImageCreateWithoutGameInput {
  type: String!
  link: String!
}

type ImageEdge {
  node: Image!
  cursor: String!
}

enum ImageOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  link_ASC
  link_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ImagePreviousValues {
  id: ID!
  type: String!
  link: String!
}

input ImageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  link: String
  link_not: String
  link_in: [String!]
  link_not_in: [String!]
  link_lt: String
  link_lte: String
  link_gt: String
  link_gte: String
  link_contains: String
  link_not_contains: String
  link_starts_with: String
  link_not_starts_with: String
  link_ends_with: String
  link_not_ends_with: String
  AND: [ImageScalarWhereInput!]
  OR: [ImageScalarWhereInput!]
  NOT: [ImageScalarWhereInput!]
}

type ImageSubscriptionPayload {
  mutation: MutationType!
  node: Image
  updatedFields: [String!]
  previousValues: ImagePreviousValues
}

input ImageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ImageWhereInput
  AND: [ImageSubscriptionWhereInput!]
  OR: [ImageSubscriptionWhereInput!]
  NOT: [ImageSubscriptionWhereInput!]
}

input ImageUpdateInput {
  type: String
  game: GameUpdateOneRequiredWithoutImagesInput
  link: String
}

input ImageUpdateManyDataInput {
  type: String
  link: String
}

input ImageUpdateManyMutationInput {
  type: String
  link: String
}

input ImageUpdateManyWithoutGameInput {
  create: [ImageCreateWithoutGameInput!]
  delete: [ImageWhereUniqueInput!]
  connect: [ImageWhereUniqueInput!]
  disconnect: [ImageWhereUniqueInput!]
  update: [ImageUpdateWithWhereUniqueWithoutGameInput!]
  upsert: [ImageUpsertWithWhereUniqueWithoutGameInput!]
  deleteMany: [ImageScalarWhereInput!]
  updateMany: [ImageUpdateManyWithWhereNestedInput!]
}

input ImageUpdateManyWithWhereNestedInput {
  where: ImageScalarWhereInput!
  data: ImageUpdateManyDataInput!
}

input ImageUpdateWithoutGameDataInput {
  type: String
  link: String
}

input ImageUpdateWithWhereUniqueWithoutGameInput {
  where: ImageWhereUniqueInput!
  data: ImageUpdateWithoutGameDataInput!
}

input ImageUpsertWithWhereUniqueWithoutGameInput {
  where: ImageWhereUniqueInput!
  update: ImageUpdateWithoutGameDataInput!
  create: ImageCreateWithoutGameInput!
}

input ImageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  game: GameWhereInput
  link: String
  link_not: String
  link_in: [String!]
  link_not_in: [String!]
  link_lt: String
  link_lte: String
  link_gt: String
  link_gte: String
  link_contains: String
  link_not_contains: String
  link_starts_with: String
  link_not_starts_with: String
  link_ends_with: String
  link_not_ends_with: String
  AND: [ImageWhereInput!]
  OR: [ImageWhereInput!]
  NOT: [ImageWhereInput!]
}

input ImageWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBlockchain(data: BlockchainCreateInput!): Blockchain!
  updateBlockchain(data: BlockchainUpdateInput!, where: BlockchainWhereUniqueInput!): Blockchain
  updateManyBlockchains(data: BlockchainUpdateManyMutationInput!, where: BlockchainWhereInput): BatchPayload!
  upsertBlockchain(where: BlockchainWhereUniqueInput!, create: BlockchainCreateInput!, update: BlockchainUpdateInput!): Blockchain!
  deleteBlockchain(where: BlockchainWhereUniqueInput!): Blockchain
  deleteManyBlockchains(where: BlockchainWhereInput): BatchPayload!
  createCategory(data: CategoryCreateInput!): Category!
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateManyCategories(data: CategoryUpdateManyMutationInput!, where: CategoryWhereInput): BatchPayload!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  createGame(data: GameCreateInput!): Game!
  updateGame(data: GameUpdateInput!, where: GameWhereUniqueInput!): Game
  updateManyGames(data: GameUpdateManyMutationInput!, where: GameWhereInput): BatchPayload!
  upsertGame(where: GameWhereUniqueInput!, create: GameCreateInput!, update: GameUpdateInput!): Game!
  deleteGame(where: GameWhereUniqueInput!): Game
  deleteManyGames(where: GameWhereInput): BatchPayload!
  createGenre(data: GenreCreateInput!): Genre!
  updateGenre(data: GenreUpdateInput!, where: GenreWhereUniqueInput!): Genre
  updateManyGenres(data: GenreUpdateManyMutationInput!, where: GenreWhereInput): BatchPayload!
  upsertGenre(where: GenreWhereUniqueInput!, create: GenreCreateInput!, update: GenreUpdateInput!): Genre!
  deleteGenre(where: GenreWhereUniqueInput!): Genre
  deleteManyGenres(where: GenreWhereInput): BatchPayload!
  createImage(data: ImageCreateInput!): Image!
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  updateManyImages(data: ImageUpdateManyMutationInput!, where: ImageWhereInput): BatchPayload!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  deleteImage(where: ImageWhereUniqueInput!): Image
  deleteManyImages(where: ImageWhereInput): BatchPayload!
  createSeo(data: SeoCreateInput!): Seo!
  updateSeo(data: SeoUpdateInput!, where: SeoWhereUniqueInput!): Seo
  updateManySeos(data: SeoUpdateManyMutationInput!, where: SeoWhereInput): BatchPayload!
  upsertSeo(where: SeoWhereUniqueInput!, create: SeoCreateInput!, update: SeoUpdateInput!): Seo!
  deleteSeo(where: SeoWhereUniqueInput!): Seo
  deleteManySeos(where: SeoWhereInput): BatchPayload!
  createSocial(data: SocialCreateInput!): Social!
  updateSocial(data: SocialUpdateInput!, where: SocialWhereUniqueInput!): Social
  updateManySocials(data: SocialUpdateManyMutationInput!, where: SocialWhereInput): BatchPayload!
  upsertSocial(where: SocialWhereUniqueInput!, create: SocialCreateInput!, update: SocialUpdateInput!): Social!
  deleteSocial(where: SocialWhereUniqueInput!): Social
  deleteManySocials(where: SocialWhereInput): BatchPayload!
  createStatistic(data: StatisticCreateInput!): Statistic!
  updateStatistic(data: StatisticUpdateInput!, where: StatisticWhereUniqueInput!): Statistic
  updateManyStatistics(data: StatisticUpdateManyMutationInput!, where: StatisticWhereInput): BatchPayload!
  upsertStatistic(where: StatisticWhereUniqueInput!, create: StatisticCreateInput!, update: StatisticUpdateInput!): Statistic!
  deleteStatistic(where: StatisticWhereUniqueInput!): Statistic
  deleteManyStatistics(where: StatisticWhereInput): BatchPayload!
  createTopApp(data: TopAppCreateInput!): TopApp!
  updateTopApp(data: TopAppUpdateInput!, where: TopAppWhereUniqueInput!): TopApp
  updateManyTopApps(data: TopAppUpdateManyMutationInput!, where: TopAppWhereInput): BatchPayload!
  upsertTopApp(where: TopAppWhereUniqueInput!, create: TopAppCreateInput!, update: TopAppUpdateInput!): TopApp!
  deleteTopApp(where: TopAppWhereUniqueInput!): TopApp
  deleteManyTopApps(where: TopAppWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  blockchain(where: BlockchainWhereUniqueInput!): Blockchain
  blockchains(where: BlockchainWhereInput, orderBy: BlockchainOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Blockchain]!
  blockchainsConnection(where: BlockchainWhereInput, orderBy: BlockchainOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BlockchainConnection!
  category(where: CategoryWhereUniqueInput!): Category
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  game(where: GameWhereUniqueInput!): Game
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game]!
  gamesConnection(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameConnection!
  genre(where: GenreWhereUniqueInput!): Genre
  genres(where: GenreWhereInput, orderBy: GenreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Genre]!
  genresConnection(where: GenreWhereInput, orderBy: GenreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GenreConnection!
  image(where: ImageWhereUniqueInput!): Image
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
  seo(where: SeoWhereUniqueInput!): Seo
  seos(where: SeoWhereInput, orderBy: SeoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Seo]!
  seosConnection(where: SeoWhereInput, orderBy: SeoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SeoConnection!
  social(where: SocialWhereUniqueInput!): Social
  socials(where: SocialWhereInput, orderBy: SocialOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Social]!
  socialsConnection(where: SocialWhereInput, orderBy: SocialOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SocialConnection!
  statistic(where: StatisticWhereUniqueInput!): Statistic
  statistics(where: StatisticWhereInput, orderBy: StatisticOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Statistic]!
  statisticsConnection(where: StatisticWhereInput, orderBy: StatisticOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StatisticConnection!
  topApp(where: TopAppWhereUniqueInput!): TopApp
  topApps(where: TopAppWhereInput, orderBy: TopAppOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TopApp]!
  topAppsConnection(where: TopAppWhereInput, orderBy: TopAppOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TopAppConnection!
  node(id: ID!): Node
}

type Seo {
  id: ID!
  keywords: String!
  description: String!
  game: Game!
}

type SeoConnection {
  pageInfo: PageInfo!
  edges: [SeoEdge]!
  aggregate: AggregateSeo!
}

input SeoCreateInput {
  keywords: String!
  description: String!
  game: GameCreateOneWithoutSeoInput!
}

input SeoCreateOneWithoutGameInput {
  create: SeoCreateWithoutGameInput
  connect: SeoWhereUniqueInput
}

input SeoCreateWithoutGameInput {
  keywords: String!
  description: String!
}

type SeoEdge {
  node: Seo!
  cursor: String!
}

enum SeoOrderByInput {
  id_ASC
  id_DESC
  keywords_ASC
  keywords_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SeoPreviousValues {
  id: ID!
  keywords: String!
  description: String!
}

type SeoSubscriptionPayload {
  mutation: MutationType!
  node: Seo
  updatedFields: [String!]
  previousValues: SeoPreviousValues
}

input SeoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SeoWhereInput
  AND: [SeoSubscriptionWhereInput!]
  OR: [SeoSubscriptionWhereInput!]
  NOT: [SeoSubscriptionWhereInput!]
}

input SeoUpdateInput {
  keywords: String
  description: String
  game: GameUpdateOneRequiredWithoutSeoInput
}

input SeoUpdateManyMutationInput {
  keywords: String
  description: String
}

input SeoUpdateOneWithoutGameInput {
  create: SeoCreateWithoutGameInput
  update: SeoUpdateWithoutGameDataInput
  upsert: SeoUpsertWithoutGameInput
  delete: Boolean
  disconnect: Boolean
  connect: SeoWhereUniqueInput
}

input SeoUpdateWithoutGameDataInput {
  keywords: String
  description: String
}

input SeoUpsertWithoutGameInput {
  update: SeoUpdateWithoutGameDataInput!
  create: SeoCreateWithoutGameInput!
}

input SeoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  keywords: String
  keywords_not: String
  keywords_in: [String!]
  keywords_not_in: [String!]
  keywords_lt: String
  keywords_lte: String
  keywords_gt: String
  keywords_gte: String
  keywords_contains: String
  keywords_not_contains: String
  keywords_starts_with: String
  keywords_not_starts_with: String
  keywords_ends_with: String
  keywords_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  game: GameWhereInput
  AND: [SeoWhereInput!]
  OR: [SeoWhereInput!]
  NOT: [SeoWhereInput!]
}

input SeoWhereUniqueInput {
  id: ID
}

type Social {
  game: Game!
  link: String!
  name: String!
}

type SocialConnection {
  pageInfo: PageInfo!
  edges: [SocialEdge]!
  aggregate: AggregateSocial!
}

input SocialCreateInput {
  game: GameCreateOneWithoutSocialsInput!
  link: String!
  name: String!
}

input SocialCreateManyWithoutGameInput {
  create: [SocialCreateWithoutGameInput!]
  connect: [SocialWhereUniqueInput!]
}

input SocialCreateWithoutGameInput {
  link: String!
  name: String!
}

type SocialEdge {
  node: Social!
  cursor: String!
}

enum SocialOrderByInput {
  link_ASC
  link_DESC
  name_ASC
  name_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SocialPreviousValues {
  link: String!
  name: String!
}

input SocialScalarWhereInput {
  link: String
  link_not: String
  link_in: [String!]
  link_not_in: [String!]
  link_lt: String
  link_lte: String
  link_gt: String
  link_gte: String
  link_contains: String
  link_not_contains: String
  link_starts_with: String
  link_not_starts_with: String
  link_ends_with: String
  link_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [SocialScalarWhereInput!]
  OR: [SocialScalarWhereInput!]
  NOT: [SocialScalarWhereInput!]
}

type SocialSubscriptionPayload {
  mutation: MutationType!
  node: Social
  updatedFields: [String!]
  previousValues: SocialPreviousValues
}

input SocialSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SocialWhereInput
  AND: [SocialSubscriptionWhereInput!]
  OR: [SocialSubscriptionWhereInput!]
  NOT: [SocialSubscriptionWhereInput!]
}

input SocialUpdateInput {
  game: GameUpdateOneRequiredWithoutSocialsInput
  link: String
  name: String
}

input SocialUpdateManyDataInput {
  link: String
  name: String
}

input SocialUpdateManyMutationInput {
  link: String
  name: String
}

input SocialUpdateManyWithoutGameInput {
  create: [SocialCreateWithoutGameInput!]
  delete: [SocialWhereUniqueInput!]
  connect: [SocialWhereUniqueInput!]
  disconnect: [SocialWhereUniqueInput!]
  update: [SocialUpdateWithWhereUniqueWithoutGameInput!]
  upsert: [SocialUpsertWithWhereUniqueWithoutGameInput!]
  deleteMany: [SocialScalarWhereInput!]
  updateMany: [SocialUpdateManyWithWhereNestedInput!]
}

input SocialUpdateManyWithWhereNestedInput {
  where: SocialScalarWhereInput!
  data: SocialUpdateManyDataInput!
}

input SocialUpdateWithoutGameDataInput {
  link: String
  name: String
}

input SocialUpdateWithWhereUniqueWithoutGameInput {
  where: SocialWhereUniqueInput!
  data: SocialUpdateWithoutGameDataInput!
}

input SocialUpsertWithWhereUniqueWithoutGameInput {
  where: SocialWhereUniqueInput!
  update: SocialUpdateWithoutGameDataInput!
  create: SocialCreateWithoutGameInput!
}

input SocialWhereInput {
  game: GameWhereInput
  link: String
  link_not: String
  link_in: [String!]
  link_not_in: [String!]
  link_lt: String
  link_lte: String
  link_gt: String
  link_gte: String
  link_contains: String
  link_not_contains: String
  link_starts_with: String
  link_not_starts_with: String
  link_ends_with: String
  link_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [SocialWhereInput!]
  OR: [SocialWhereInput!]
  NOT: [SocialWhereInput!]
}

input SocialWhereUniqueInput {
  link: String
}

type Statistic {
  id: ID!
  game: Game!
  timestamp: Float!
  dailyPlayers: Float!
  transactions: Float!
  volume: Float!
}

type StatisticConnection {
  pageInfo: PageInfo!
  edges: [StatisticEdge]!
  aggregate: AggregateStatistic!
}

input StatisticCreateInput {
  game: GameCreateOneWithoutStatisticsInput!
  timestamp: Float!
  dailyPlayers: Float!
  transactions: Float!
  volume: Float!
}

input StatisticCreateManyWithoutGameInput {
  create: [StatisticCreateWithoutGameInput!]
  connect: [StatisticWhereUniqueInput!]
}

input StatisticCreateWithoutGameInput {
  timestamp: Float!
  dailyPlayers: Float!
  transactions: Float!
  volume: Float!
}

type StatisticEdge {
  node: Statistic!
  cursor: String!
}

enum StatisticOrderByInput {
  id_ASC
  id_DESC
  timestamp_ASC
  timestamp_DESC
  dailyPlayers_ASC
  dailyPlayers_DESC
  transactions_ASC
  transactions_DESC
  volume_ASC
  volume_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StatisticPreviousValues {
  id: ID!
  timestamp: Float!
  dailyPlayers: Float!
  transactions: Float!
  volume: Float!
}

input StatisticScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  timestamp: Float
  timestamp_not: Float
  timestamp_in: [Float!]
  timestamp_not_in: [Float!]
  timestamp_lt: Float
  timestamp_lte: Float
  timestamp_gt: Float
  timestamp_gte: Float
  dailyPlayers: Float
  dailyPlayers_not: Float
  dailyPlayers_in: [Float!]
  dailyPlayers_not_in: [Float!]
  dailyPlayers_lt: Float
  dailyPlayers_lte: Float
  dailyPlayers_gt: Float
  dailyPlayers_gte: Float
  transactions: Float
  transactions_not: Float
  transactions_in: [Float!]
  transactions_not_in: [Float!]
  transactions_lt: Float
  transactions_lte: Float
  transactions_gt: Float
  transactions_gte: Float
  volume: Float
  volume_not: Float
  volume_in: [Float!]
  volume_not_in: [Float!]
  volume_lt: Float
  volume_lte: Float
  volume_gt: Float
  volume_gte: Float
  AND: [StatisticScalarWhereInput!]
  OR: [StatisticScalarWhereInput!]
  NOT: [StatisticScalarWhereInput!]
}

type StatisticSubscriptionPayload {
  mutation: MutationType!
  node: Statistic
  updatedFields: [String!]
  previousValues: StatisticPreviousValues
}

input StatisticSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StatisticWhereInput
  AND: [StatisticSubscriptionWhereInput!]
  OR: [StatisticSubscriptionWhereInput!]
  NOT: [StatisticSubscriptionWhereInput!]
}

input StatisticUpdateInput {
  game: GameUpdateOneRequiredWithoutStatisticsInput
  timestamp: Float
  dailyPlayers: Float
  transactions: Float
  volume: Float
}

input StatisticUpdateManyDataInput {
  timestamp: Float
  dailyPlayers: Float
  transactions: Float
  volume: Float
}

input StatisticUpdateManyMutationInput {
  timestamp: Float
  dailyPlayers: Float
  transactions: Float
  volume: Float
}

input StatisticUpdateManyWithoutGameInput {
  create: [StatisticCreateWithoutGameInput!]
  delete: [StatisticWhereUniqueInput!]
  connect: [StatisticWhereUniqueInput!]
  disconnect: [StatisticWhereUniqueInput!]
  update: [StatisticUpdateWithWhereUniqueWithoutGameInput!]
  upsert: [StatisticUpsertWithWhereUniqueWithoutGameInput!]
  deleteMany: [StatisticScalarWhereInput!]
  updateMany: [StatisticUpdateManyWithWhereNestedInput!]
}

input StatisticUpdateManyWithWhereNestedInput {
  where: StatisticScalarWhereInput!
  data: StatisticUpdateManyDataInput!
}

input StatisticUpdateWithoutGameDataInput {
  timestamp: Float
  dailyPlayers: Float
  transactions: Float
  volume: Float
}

input StatisticUpdateWithWhereUniqueWithoutGameInput {
  where: StatisticWhereUniqueInput!
  data: StatisticUpdateWithoutGameDataInput!
}

input StatisticUpsertWithWhereUniqueWithoutGameInput {
  where: StatisticWhereUniqueInput!
  update: StatisticUpdateWithoutGameDataInput!
  create: StatisticCreateWithoutGameInput!
}

input StatisticWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  game: GameWhereInput
  timestamp: Float
  timestamp_not: Float
  timestamp_in: [Float!]
  timestamp_not_in: [Float!]
  timestamp_lt: Float
  timestamp_lte: Float
  timestamp_gt: Float
  timestamp_gte: Float
  dailyPlayers: Float
  dailyPlayers_not: Float
  dailyPlayers_in: [Float!]
  dailyPlayers_not_in: [Float!]
  dailyPlayers_lt: Float
  dailyPlayers_lte: Float
  dailyPlayers_gt: Float
  dailyPlayers_gte: Float
  transactions: Float
  transactions_not: Float
  transactions_in: [Float!]
  transactions_not_in: [Float!]
  transactions_lt: Float
  transactions_lte: Float
  transactions_gt: Float
  transactions_gte: Float
  volume: Float
  volume_not: Float
  volume_in: [Float!]
  volume_not_in: [Float!]
  volume_lt: Float
  volume_lte: Float
  volume_gt: Float
  volume_gte: Float
  AND: [StatisticWhereInput!]
  OR: [StatisticWhereInput!]
  NOT: [StatisticWhereInput!]
}

input StatisticWhereUniqueInput {
  id: ID
}

type Subscription {
  blockchain(where: BlockchainSubscriptionWhereInput): BlockchainSubscriptionPayload
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  game(where: GameSubscriptionWhereInput): GameSubscriptionPayload
  genre(where: GenreSubscriptionWhereInput): GenreSubscriptionPayload
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
  seo(where: SeoSubscriptionWhereInput): SeoSubscriptionPayload
  social(where: SocialSubscriptionWhereInput): SocialSubscriptionPayload
  statistic(where: StatisticSubscriptionWhereInput): StatisticSubscriptionPayload
  topApp(where: TopAppSubscriptionWhereInput): TopAppSubscriptionPayload
}

type TopApp {
  id: ID!
  game: Game!
  category: Category!
  position: Int!
  layout: TopAppLayoutType!
}

type TopAppConnection {
  pageInfo: PageInfo!
  edges: [TopAppEdge]!
  aggregate: AggregateTopApp!
}

input TopAppCreateInput {
  game: GameCreateOneWithoutTopAppInput!
  category: CategoryCreateOneInput!
  position: Int!
  layout: TopAppLayoutType!
}

input TopAppCreateOneWithoutGameInput {
  create: TopAppCreateWithoutGameInput
  connect: TopAppWhereUniqueInput
}

input TopAppCreateWithoutGameInput {
  category: CategoryCreateOneInput!
  position: Int!
  layout: TopAppLayoutType!
}

type TopAppEdge {
  node: TopApp!
  cursor: String!
}

enum TopAppLayoutType {
  MAIN
  SHORTENED
  EXTENDED
}

enum TopAppOrderByInput {
  id_ASC
  id_DESC
  position_ASC
  position_DESC
  layout_ASC
  layout_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TopAppPreviousValues {
  id: ID!
  position: Int!
  layout: TopAppLayoutType!
}

type TopAppSubscriptionPayload {
  mutation: MutationType!
  node: TopApp
  updatedFields: [String!]
  previousValues: TopAppPreviousValues
}

input TopAppSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TopAppWhereInput
  AND: [TopAppSubscriptionWhereInput!]
  OR: [TopAppSubscriptionWhereInput!]
  NOT: [TopAppSubscriptionWhereInput!]
}

input TopAppUpdateInput {
  game: GameUpdateOneRequiredWithoutTopAppInput
  category: CategoryUpdateOneRequiredInput
  position: Int
  layout: TopAppLayoutType
}

input TopAppUpdateManyMutationInput {
  position: Int
  layout: TopAppLayoutType
}

input TopAppUpdateOneWithoutGameInput {
  create: TopAppCreateWithoutGameInput
  update: TopAppUpdateWithoutGameDataInput
  upsert: TopAppUpsertWithoutGameInput
  delete: Boolean
  disconnect: Boolean
  connect: TopAppWhereUniqueInput
}

input TopAppUpdateWithoutGameDataInput {
  category: CategoryUpdateOneRequiredInput
  position: Int
  layout: TopAppLayoutType
}

input TopAppUpsertWithoutGameInput {
  update: TopAppUpdateWithoutGameDataInput!
  create: TopAppCreateWithoutGameInput!
}

input TopAppWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  game: GameWhereInput
  category: CategoryWhereInput
  position: Int
  position_not: Int
  position_in: [Int!]
  position_not_in: [Int!]
  position_lt: Int
  position_lte: Int
  position_gt: Int
  position_gte: Int
  layout: TopAppLayoutType
  layout_not: TopAppLayoutType
  layout_in: [TopAppLayoutType!]
  layout_not_in: [TopAppLayoutType!]
  AND: [TopAppWhereInput!]
  OR: [TopAppWhereInput!]
  NOT: [TopAppWhereInput!]
}

input TopAppWhereUniqueInput {
  id: ID
}
`