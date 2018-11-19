import {
  GraphQLString
} from 'graphql'

const ping = {
  type: GraphQLString,
  resolve () {
    return 'pong!'
  }
}

export {
  ping
}
