import {
  GraphQLString
} from 'graphql'

import {
  Task, TaskList
} from './types'

console.log(Task, TaskList)

const ping = {
  type: GraphQLString,
  resolve () {
    return 'pong!'
  }
}

export {
  ping
}
