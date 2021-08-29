import * as express from 'express';
import { todoRepository } from '../../repositories';
import { IResponseBody, Status } from '@todolist/shared';
import { Response } from 'express-serve-static-core';
import { ERROR_TODO_NOT_FOUND_MESSAGE, SUCCESS_MESSAGE } from '../../constants';

const updateTodoStatusRoute = express();

updateTodoStatusRoute.put(
  '/update/:id',
  async (req, res: Response<IResponseBody>, next) => {
    try {
      const repo = await todoRepository();
      const existingTodo = await repo.findOne(req.params.id);
      if (existingTodo) {
        await repo.update(req.params.id, {
          status:
            existingTodo.status === Status.Pending
              ? Status.Complete
              : Status.Pending,
        });
        const updatedTodo = await repo.findOne(req.params.id);
        res.json({
          status: { message: SUCCESS_MESSAGE, code: res.statusCode },
          data: updatedTodo,
        });
      } else {
        res.status(404).json({
          status: { message: ERROR_TODO_NOT_FOUND_MESSAGE, code: 404 },
          data: {},
        });
      }
    } catch (e) {
      next(e);
    }
  }
);

export default updateTodoStatusRoute;
