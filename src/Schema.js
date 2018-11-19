import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql'

import { ping } from './queries'
import { getTaskList } from './mutations'

const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      ping
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      getTaskList
    }
  })
})

export default Schema
