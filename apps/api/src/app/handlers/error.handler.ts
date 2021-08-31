import { Response } from 'express-serve-static-core';
import { IResponseBody } from '@todolist/shared';
import { NextFunction } from 'express';

const errorHandler = (
  err: Error,
  req,
  res: Response<IResponseBody>,
  _next: NextFunction
) => {
  res.status(500).json({
    status: { message: err.message, code: 500 },
    data: {},
  });
};

export default errorHandler;
