import * as express from 'express';
import * as cors from 'cors';
import {
  createTodoRoute,
  updateTodoStatusRoute,
  createSubtaskRoute,
  updateSubtaskStatusRoute,
  getTodoList,
} from './app/routes';
import { Response } from 'express-serve-static-core';
import {
  IResponseBody,
  BASE_URL,
  SUBTASK_URL,
  TODO_URL,
} from '@todolist/shared';
import { NextFunction } from 'express';
import { corsOptions as options } from './app/configs';

const app = express();

app.use(express.json());
app.use(cors(options));
app.use(TODO_URL, createTodoRoute);
app.use(TODO_URL, updateTodoStatusRoute);
app.use(TODO_URL, getTodoList);
app.use(SUBTASK_URL, createSubtaskRoute);
app.use(SUBTASK_URL, updateSubtaskStatusRoute);
app.use(
  (err: Error, req, res: Response<IResponseBody>, _next: NextFunction) => {
    res.status(500).json({
      status: { message: err.message, code: 500 },
      data: {},
    });
  }
);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + BASE_URL);
});

server.on('error', console.error);
