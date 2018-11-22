import {
  GraphQLString,
  GraphQLID,
  GraphQLList
} from 'graphql'
import { Task } from './types'

const getTaskList = {
  type: new GraphQLList(Task),
  args: {
    id: {
      type: GraphQLID
    }
  },
  resolve (_, { id }, { db }) {
    let tasklist = []
    db.all('SELECT * FROM tasklist WHERE id=$id', {
      $id: id
    }, (err, tasks) => {
      if (err) throw err

      console.log(tasks)
      tasklist.concat(tasks)
    })
    return tasklist
  }
}

const ping = {
  type: GraphQLString,
  resolve () {
    return 'pong!'
  }
}

export {
  getTaskList,
  ping
}
