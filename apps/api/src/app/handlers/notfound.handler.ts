import { IResponseBody } from '@todolist/shared'
import { Request, Response } from 'express-serve-static-core'
import { NOT_FOUND_MESSAGE } from '../constants'

const notFoundHandler = (req: Request, res: Response<IResponseBody>) => {
  res.status(404).json({
    status: { message: NOT_FOUND_MESSAGE, code: 404 },
    data: {},
  })
}

export default notFoundHandler
