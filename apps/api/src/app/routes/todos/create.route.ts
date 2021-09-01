import * as express from 'express'
import { createHandler } from '../../handlers'
import { todoRepository } from '../../repositories'

const createTodoRoute = express()

createTodoRoute.post('/create', createHandler(todoRepository, 'todo'))

export default createTodoRoute
