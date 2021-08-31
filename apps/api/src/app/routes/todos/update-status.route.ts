import * as express from 'express'
import { updateStatusHandler } from '../../handlers'
import { todoRepository } from '../../repositories'

const updateTodoStatusRoute = express()

updateTodoStatusRoute.put(
  '/update/:id',
  updateStatusHandler(todoRepository, 'todo')
)

export default updateTodoStatusRoute
