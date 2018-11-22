import {
  GraphQLID,
  GraphQLString,
  GraphQLBoolean
} from 'graphql'
import {
  Task
} from './types'

const createTask = {
  type: Task,
  args: {
    text: GraphQLString,
    isCompleted: GraphQLBoolean
  },
  resolve (_, { text, isCompleted }, { db }) {
    return {}
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

export {
  createTask,
  updateTask,
  deleteTask
}
