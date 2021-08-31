import { IResponseBody, Status } from '@todolist/shared'
import { NextFunction } from 'express'
import { Request, Response } from 'express-serve-static-core'
import { ERROR_TODO_NOT_FOUND_MESSAGE, SUCCESS_MESSAGE } from '../constants'
import { subtaskRepository, todoRepository } from '../repositories'

const updateTodoStatusHandler = async (
  req: Request,
  res: Response<IResponseBody>,
  next: NextFunction
) => {
  try {
    const todoRepo = await todoRepository()
    const existingTodo = await todoRepo.findOne(req.params.id)
    if (existingTodo) {
      await todoRepo.update(req.params.id, {
        status:
          existingTodo.status === Status.Pending
            ? Status.Complete
            : Status.Pending,
      })
      const updatedTodo = await todoRepo.findOne(req.params.id, {
        relations: ['subtasks'],
      })
      // If a todos' status is pending then update all of subtasks to complete
      if (existingTodo.status === Status.Pending) {
        const subtaskRepo = await subtaskRepository()
        await subtaskRepo
          .createQueryBuilder()
          .update()
          .set({ status: Status.Complete })
          .where('todo_id = :todoId', { todoId: updatedTodo.id })
          .execute()
      }
      res.json({
        status: { message: SUCCESS_MESSAGE, code: res.statusCode },
        data: updatedTodo,
      })
    } else {
      res.status(404).json({
        status: {
          message: ERROR_TODO_NOT_FOUND_MESSAGE,
          code: 404,
        },
        data: {},
      })
    }
  } catch (e) {
    next(e)
  }
}

export default updateTodoStatusHandler
