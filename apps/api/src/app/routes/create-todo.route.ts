import * as express from 'express';
import { todoRepository } from '../repositories';
import { Response } from 'express-serve-static-core';
import { ResponseBody } from '@todolist/shared';

const createTodoRoute = express();

createTodoRoute.post(
  '/create',
  async (req, res: Response<ResponseBody>, next) => {
    try {
      const repo = await todoRepository();
      const todo = await repo.create(req.body);
      const results = await repo.save(todo);
      res.json({
        status: { message: 'success', code: res.statusCode },
        data: results,
      });
    } catch (e) {
      next(e);
    }
  }
);

export default createTodoRoute;
