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
    const repo = await subtaskRepository()
    const existingSubtask = await repo.findOne(req.params.id)
    if (existingSubtask) {
      await repo.update(req.params.id, {
        status:
          existingSubtask.status === Status.Pending
            ? Status.Complete
            : Status.Pending,
      })
      const updatedSubtask = await repo.findOne(req.params.id)
      // If a updated subtask' status is pending then update a todo to pending
      if (updatedSubtask.status === Status.Pending) {
        const todoRepo = await todoRepository()
        await todoRepo.update(updatedSubtask.todoId, {
          status: Status.Pending,
        })
      }
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
