import { IResponseBody, Status } from '@todolist/shared'
import { NextFunction } from 'express'
import { Request, Response } from 'express-serve-static-core'
import { ERROR_SUBTASK_NOT_FOUND_MESSAGE, SUCCESS_MESSAGE } from '../constants'
import { subtaskRepository, todoRepository } from '../repositories'

const updateSubtaskStatusHandler = async (
  req: Request,
  res: Response<IResponseBody>,
  next: NextFunction
) => {
  try {
    const subtaskRepo = await subtaskRepository()
    const todoRepo = await todoRepository()
    const existingSubtask = await subtaskRepo.findOne(req.params.id, {
      relations: ['todoId'],
    })
    if (existingSubtask) {
      await subtaskRepo.update(req.params.id, {
        status:
          existingSubtask.status === Status.Pending
            ? Status.Complete
            : Status.Pending,
      })
      if (existingSubtask.status !== Status.Pending) {
        await todoRepo.update(existingSubtask.todoId.id, {
          status: Status.Pending,
        })
      }
      const updatedSubtask = await subtaskRepo.findOne(req.params.id, {
        relations: ['todoId'],
      })
      res.json({
        status: { message: SUCCESS_MESSAGE, code: res.statusCode },
        data: updatedSubtask,
      })
    } else {
      res.status(404).json({
        status: {
          message: ERROR_SUBTASK_NOT_FOUND_MESSAGE,
          code: 404,
        },
        data: {},
      })
    }
  } catch (e) {
    next(e)
  }
}

export default updateSubtaskStatusHandler
