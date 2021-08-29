import * as express from 'express';
import { Response } from 'express-serve-static-core';
import { IResponseBody, Status } from '@todolist/shared';
import { subtaskRepository } from '../../repositories';
import { ERROR_TODO_NOT_FOUND_MESSAGE, SUCCESS_MESSAGE } from '../../constants';

const updateSubtaskStatusRoute = express();

updateSubtaskStatusRoute.put(
  '/update/:id',
  async (req, res: Response<IResponseBody>, next) => {
    try {
      const repo = await subtaskRepository();
      const existingSubtask = await repo.findOne(req.params.id);
      if (existingSubtask) {
        await repo.update(req.params.id, {
          status:
            existingSubtask.status === Status.Pending
              ? Status.Complete
              : Status.Pending,
        });
        const updatedSubtask = await repo.findOne(req.params.id);
        res.json({
          status: { message: SUCCESS_MESSAGE, code: res.statusCode },
          data: updatedSubtask,
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

export default updateSubtaskStatusRoute
