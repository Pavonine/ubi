import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLList,
  GraphQLString
} from 'graphql'

const Task = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    isCompleted: {
      type: GraphQLBoolean
    }
  }
})

const TaskList = new GraphQLObjectType({
  name: 'TaskList',
  fields: {
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    tasks: {
      type: new GraphQLList(Task)
    }
  }
})

export {
  Task,
  TaskList
}
