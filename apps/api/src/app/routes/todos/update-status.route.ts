import * as express from 'express'
import { updateTodoStatusHandler } from '../../handlers'

const updateTodoStatusRoute = express()

updateTodoStatusRoute.put('/update/:id', updateTodoStatusHandler)

export default updateTodoStatusRoute
