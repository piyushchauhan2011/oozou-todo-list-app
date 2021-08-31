import { IResponseBody, RepositoryFunction, Status } from '@todolist/shared'
import { NextFunction } from 'express'
import { Request, Response } from 'express-serve-static-core'
import {
  ERROR_SUBTASK_NOT_FOUND_MESSAGE,
  ERROR_TODO_NOT_FOUND_MESSAGE,
  SUCCESS_MESSAGE,
} from '../constants'
import { SubtaskEntity, TodoEntity } from '../entities'

const updateStatusHandler = (
  entity: RepositoryFunction<TodoEntity | SubtaskEntity>,
  entityType: 'todo' | 'subtask'
) => async (req: Request, res: Response<IResponseBody>, next: NextFunction) => {
  try {
    const repo = await entity()
    const existingItem = await repo.findOne(req.params.id)
    if (existingItem) {
      await repo.update(req.params.id, {
        status:
          existingItem.status === Status.Pending
            ? Status.Complete
            : Status.Pending,
      })
      const updatedItem = await repo.findOne(req.params.id)
      res.json({
        status: { message: SUCCESS_MESSAGE, code: res.statusCode },
        data: updatedItem,
      })
    } else {
      res.status(404).json({
        status: {
          message:
            entityType === 'subtask'
              ? ERROR_SUBTASK_NOT_FOUND_MESSAGE
              : ERROR_TODO_NOT_FOUND_MESSAGE,
          code: 404,
        },
        data: {},
      })
    }
  } catch (e) {
    next(e)
  }
}

export default updateStatusHandler
