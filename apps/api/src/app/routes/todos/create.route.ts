import * as express from 'express'
import { createHandler } from '../../handlers'
import { subtaskRepository } from '../../repositories'

const createTodoRoute = express()

createTodoRoute.post('/create', createHandler(subtaskRepository, 'todo'))

export default createTodoRoute
