import * as express from 'express';
import subtaskRepository from '../../repositories/subtask.repo';
import { Response } from 'express-serve-static-core';
import { IResponseBody } from '@todolist/shared';
import { SUCCESS_MESSAGE } from '../../constants';

const createSubtaskRoute = express();

createSubtaskRoute.post(
  '/create',
  async (req, res: Response<IResponseBody>, next) => {
    try {
      const repo = await subtaskRepository();
      const subtask = await repo.create(req.body);
      const results = await repo.save(subtask);
      res.json({
        status: { message: SUCCESS_MESSAGE, code: res.statusCode },
        data: results,
      });
    } catch (e) {
      next(e);
    }
  }
);

export default createSubtaskRoute;
