import * as express from 'express'
import { updateStatusHandler } from '../../handlers'
import { subtaskRepository } from '../../repositories'

const updateSubtaskStatusRoute = express()

updateSubtaskStatusRoute.put(
  '/update/:id',
  updateStatusHandler(subtaskRepository, 'subtask')
)

export default updateSubtaskStatusRoute
