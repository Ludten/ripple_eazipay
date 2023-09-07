import { GraphQLObjectType, GraphQLString } from "graphql";

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {type: GraphQLString},
    username: {type: GraphQLString},
  }
})

const book = new GraphQLObjectType({
  name: 'Book',
  fields: {
    title: {type: GraphQLString},
    author: {type: GraphQLString},
  }
})
export { userType, book }
