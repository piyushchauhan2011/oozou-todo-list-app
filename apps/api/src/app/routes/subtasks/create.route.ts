import * as express from 'express'
import { createHandler } from '../../handlers'
import subtaskRepository from '../../repositories/subtask.repo'

const createSubtaskRoute = express()

createSubtaskRoute.post('/create', createHandler(subtaskRepository, 'subtask'))

export default createSubtaskRoute
