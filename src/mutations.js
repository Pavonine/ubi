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
  type: GraphQLString,
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
      db.run('INSERT INTO tasklist (text, isCompleted) VALUES (?, ?)', [
        text,
        isCompleted
      ], (err) => {
        if (err) throw err
        return 'success'
      })
    } else {
      return 'nahhh'
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
