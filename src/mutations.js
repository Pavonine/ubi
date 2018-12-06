
import {
  Task,
  CreateTaskInput,
  UpdateTaskInput
} from './types'

const CREATE_TASK_STATEMENT = 'INSERT INTO tasklist (text, isCompleted) VALUES (?, ?)'
const GET_LAST_TASK_STATEMENT = 'SELECT * FROM tasklist ORDER BY id DESC LIMIT 1'
const UPDATE_TASK_STATEMENT = 'UPDATE tasklist SET text=?, isCompleted=? WHERE id=?'

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
        db.run(CREATE_TASK_STATEMENT, [
          text,
          isCompleted
        ], (err) => {
          if (err) reject(err)
        }).get(GET_LAST_TASK_STATEMENT, (err, row) => {
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
    input: {
      type: UpdateTaskInput
    }
  },
  resolve (
    _,
    {
      input: {
        id,
        text,
        isCompleted
      }
    },
    { db }) {
    if (id && (text || isCompleted)) {
      return new Promise((resolve, reject) => {
        db.get('SELECT * FROM tasklist WHERE id=$id', {
          $id: id
        }, (err, row) => {
          if (err) reject(err)

          if (row) {
            db.run(
              UPDATE_TASK_STATEMENT,
              [ text || row.text, isCompleted || row.isCompleted, id ],
              (err) => {
                if (err) reject(err)
              }
            ).get('SELECT * FROM tasklist WHERE id=?', [id], (err, row) => {
              if (err) {
                reject(err)
              } else {
                resolve(row)
              }
            })
          }
        })
      })
    } else {
      return {}
    }
  }
}

// const deleteTask = {
//   type: Task,
//   args: {
//     id: GraphQLID
//   },
//   resolve (_, { id }, { db }) {
//     return {}
//   }
// }

export default {
  createTask,
  updateTask
  // deleteTask
}
