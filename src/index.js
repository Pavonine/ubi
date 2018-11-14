import Koa from 'koa'
import Router from 'koa-router'
import graphqlHTTP from 'koa-graphql'
import koaPlayground from 'graphql-playground-middleware-koa'

import Schema from './Schema'
const app = new Koa()
const router = new Router()
router.all('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true
}))

router.all('/playground', koaPlayground({
  endpoint: '/graphql'
}))

app.use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)
