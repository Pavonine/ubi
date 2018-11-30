import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql'

import queries from './queries'
import mutations from './mutations'

const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      ...queries
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      ...mutations
    }
  })
})

export default Schema
