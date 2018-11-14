import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql'

import { ping } from './queries'

const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      ping
    }
  })
})

export default Schema
