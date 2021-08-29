import * as express from 'express';
// import * as cors from 'cors';
import { createTodoRoute, updateStatusRoute } from './app/routes';
import { Response } from 'express-serve-static-core';
import { ResponseBody } from '@todolist/shared';
import { NextFunction } from 'express';
// import { corsOptions as options } from './app/configs';

const BASE_URL = '/api/todo';

const app = express();

app.use(express.json());
app.use(BASE_URL, createTodoRoute);
app.use(BASE_URL, updateStatusRoute);
app.use((err: Error, req, res: Response<ResponseBody>, _next: NextFunction) => {
  res.status(500).json({
    status: { message: err.message, code: 500 },
    data: {},
  });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + BASE_URL);
});

server.on('error', console.error);
