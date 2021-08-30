import * as express from 'express';
import { Response } from 'express-serve-static-core';
import { IResponseBody } from '@todolist/shared';
import { todoRepository } from '../../repositories';
import { SUCCESS_MESSAGE } from '../../constants';

const getTodoList = express();

getTodoList.get('/todos', async (req, res: Response<IResponseBody>, next) => {
  try {
    const repo = await todoRepository();
    const results = await repo.find({ relations: ['subtasks'] });
    res.json({
      status: { message: SUCCESS_MESSAGE, code: res.statusCode },
      data: results,
    });
  } catch (e) {
    next(e);
  }
});

export default getTodoList;
