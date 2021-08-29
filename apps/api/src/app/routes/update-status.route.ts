import * as express from 'express';
import { todoRepository } from '../repositories';
import { ResponseBody, Status } from '@todolist/shared';
import { Response } from 'express-serve-static-core';

const updateStatusRoute = express();

updateStatusRoute.put(
  '/update/:id',
  async (req, res: Response<ResponseBody>, next) => {
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
          status: { message: 'success', code: res.statusCode },
          data: updatedTodo,
        });
      } else {
        res.status(404).json({
          status: { message: 'todo id does not exist', code: 404 },
          data: {},
        });
      }
    } catch (e) {
      next(e);
    }
  }
);

export default updateStatusRoute;
