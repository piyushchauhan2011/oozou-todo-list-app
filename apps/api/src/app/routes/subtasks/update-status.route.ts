import * as express from 'express'
import { updateStatusHandler } from '../../handlers'

const updateSubtaskStatusRoute = express()

updateSubtaskStatusRoute.put('/update/:id', updateStatusHandler)

export default updateSubtaskStatusRoute
