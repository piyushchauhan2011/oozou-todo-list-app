import { NOT_FOUND_MESSAGE } from '../constants';
import { Request, Response } from 'express-serve-static-core';
import { IResponseBody } from '@todolist/shared';

const notFoundHandler = (req: Request, res: Response<IResponseBody>) => {
  res.status(404).json({
    status: { message: NOT_FOUND_MESSAGE, code: 404 },
    data: {},
  });
};

export default notFoundHandler;
