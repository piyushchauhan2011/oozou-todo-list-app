import { IResponseBody, RepositoryFunction } from '@todolist/shared';
import { SubtaskEntity, TodoEntity } from '../entities';
import { Request, Response } from 'express-serve-static-core';
import { NextFunction } from 'express';
import {
  ERROR_BAD_SUBTASK_REQUEST_MESSAGE,
  ERROR_BAD_TODO_REQUEST_MESSAGE,
  SUCCESS_MESSAGE,
} from '../constants';

const createHandler = (
  repositories: RepositoryFunction<TodoEntity | SubtaskEntity>,
  entityType: 'todo' | 'subtask'
) => async (req: Request, res: Response<IResponseBody>, next: NextFunction) => {
  const isValid =
    entityType === 'todo' ? req.body.title : req.body.todoId && req.body.title;
  try {
    if (isValid) {
      const repo = await repositories();
      const subtask = await repo.create(req.body);
      const results = await repo.save(subtask);
      res.json({
        status: { message: SUCCESS_MESSAGE, code: res.statusCode },
        data: results,
      });
    } else {
      res.status(400).json({
        status: {
          message:
            entityType === 'todo'
              ? ERROR_BAD_TODO_REQUEST_MESSAGE
              : ERROR_BAD_SUBTASK_REQUEST_MESSAGE,
          code: 400,
        },
        data: {},
      });
    }
  } catch (e) {
    next(e);
  }
};

export default createHandler;
