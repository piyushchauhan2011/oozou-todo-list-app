import * as express from 'express';
import subtaskRepository from '../../repositories/subtask.repo';
import { Request, Response } from 'express-serve-static-core';
import { IResponseBody, ISubtask } from '@todolist/shared';
import { ERROR_BAD_REQUEST_MESSAGE, SUCCESS_MESSAGE } from '../../constants';

const createSubtaskRoute = express();

createSubtaskRoute.post(
  '/create',
  async (
    req: Request<unknown, unknown, ISubtask>,
    res: Response<IResponseBody>,
    next
  ) => {
    try {
      if (req.body.todoId) {
        const repo = await subtaskRepository();
        const subtask = await repo.create(req.body);
        const results = await repo.save(subtask);
        res.json({
          status: { message: SUCCESS_MESSAGE, code: res.statusCode },
          data: results,
        });
      } else {
        res.status(400).json({
          status: { message: ERROR_BAD_REQUEST_MESSAGE, code: 400 },
          data: {},
        });
      }
    } catch (e) {
      next(e);
    }
  }
);

export default createSubtaskRoute;
