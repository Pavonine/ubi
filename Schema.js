import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world'
        }
      }
    }
  })
})

console.log(Schema)
