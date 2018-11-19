import Koa from 'koa'
import Router from 'koa-router'
import graphqlHTTP from 'koa-graphql'
import koaPlayground from 'graphql-playground-middleware-koa'
import sqlite3 from 'sqlite3'

import setupDB from './setupDB'
import Schema from './Schema'
const app = new Koa()
const router = new Router()

const db = new sqlite3.Database('database.sqlite', (err) => {
  if (err) throw err
})

router.all('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true,
  context: {
    db
  },
  pretty: true
}))

router.all('/playground', koaPlayground({
  endpoint: '/graphql'
}))

app.use(router.routes())
  .use(router.allowedMethods())

if (db) {
  setupDB(db)
  app
    .listen(3000, () => {
      console.log('Listening at port 3000')
    })
}
