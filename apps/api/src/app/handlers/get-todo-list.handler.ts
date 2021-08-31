import { Request, Response } from 'express-serve-static-core';
import { IResponseBody } from '@todolist/shared';
import { NextFunction } from 'express';
import { todoRepository } from '../repositories';
import { SUCCESS_MESSAGE } from '../constants';

const getTodoListHandler = async (
  req: Request,
  res: Response<IResponseBody>,
  next: NextFunction
) => {
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
};

export default getTodoListHandler;
