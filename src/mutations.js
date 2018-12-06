import {
  GraphQLID,
  GraphQLString,
  GraphQLBoolean
} from 'graphql'
import {
  Task,
  CreateTaskInput
} from './types'

const createTask = {
  type: Task,
  args: {
    input: {
      type: CreateTaskInput
    }
  },
  resolve (_, {
    input: {
      text,
      isCompleted
    }
  }, { db }) {
    if (text && isCompleted) {
      return new Promise((resolve, reject) => {
        db.run('INSERT INTO tasklist (text, isCompleted) VALUES (?, ?)', [
          text,
          isCompleted
        ], (err) => {
          if (err) reject(err)
        }).get('SELECT * FROM tasklist ORDER BY id DESC LIMIT 1', (err, row) => {
          if (err) {
            reject(err)
          } else {
            resolve(row)
          }
        })
      })
    } else {
      return {}
    }
  }
}

const updateTask = {
  type: Task,
  args: {
    id: GraphQLID,
    text: GraphQLString,
    isCompleted: GraphQLBoolean
  },
  resolve (_, { id, text, isCompleted }, { db }) {
    return {}
  }
}

const deleteTask = {
  type: Task,
  args: {
    id: GraphQLID
  },
  resolve (_, { id }, { db }) {
    return {}
  }
}

export default {
  createTask
  // updateTask,
  // deleteTask
}
