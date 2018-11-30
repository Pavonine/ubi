import {
  GraphQLString,
  GraphQLID
  // GraphQLList
} from 'graphql'
import { Task } from './types'

const getTaskById = {
  type: Task || null,
  args: {
    id: {
      type: GraphQLID
    }
  },
  resolve (_, { id }, { db }) {
    let task
    db.get('SELECT * FROM tasklist WHERE id=$id', {
      $id: id
    }, (err, tsk) => {
      if (err) throw err
      if (tsk === undefined) {
        task = null
      } else {
        task = tsk
      }
    })
    return task
  }
}

const ping = {
  type: GraphQLString,
  resolve () {
    return 'pong!'
  }
}

export default {
  getTaskById,
  ping
}
