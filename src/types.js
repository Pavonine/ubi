import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLList,
  GraphQLString,
  GraphQLInt
} from 'graphql'

const Task = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: {
      type: GraphQLInt
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
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    tasks: {
      type: new GraphQLList(Task)
    }
  }
})

const CreateTaskInput = new GraphQLInputObjectType({
  name: 'CreateTaskInput',
  fields: {
    text: {
      type: GraphQLString,
      defaultValue: 'Enter your task here',
      description: 'Task text'
    },
    isCompleted: {
      type: GraphQLBoolean,
      defaultValue: false,
      description: 'State of the task'
    }
  }
})

const UpdateTaskInput = new GraphQLInputObjectType({
  name: 'UpdateTaskInput',
  fields: {
    id: {
      type: GraphQLInt,
      description: 'ID of the task to update'
    },
    text: {
      type: GraphQLString,
      description: 'Updated text if any'
    },
    isCompleted: {
      type: GraphQLBoolean,
      description: 'Updated value if task is completed or not'
    }
  }
})

export {
  Task,
  TaskList,
  CreateTaskInput,
  UpdateTaskInput
}
