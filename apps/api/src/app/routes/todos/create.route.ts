import * as express from 'express';
import { todoRepository } from '../../repositories';
import { Response } from 'express-serve-static-core';
import { IResponseBody } from '@todolist/shared';
import { SUCCESS_MESSAGE } from '../../constants';

const createTodoRoute = express();

createTodoRoute.post(
  '/create',
  async (req, res: Response<IResponseBody>, next) => {
    try {
      const repo = await todoRepository();
      const todo = await repo.create(req.body);
      const results = await repo.save(todo);
      res.json({
        status: { message: SUCCESS_MESSAGE, code: res.statusCode },
        data: results,
      });
    } catch (e) {
      next(e);
    }
  }
);

export default createTodoRoute;
