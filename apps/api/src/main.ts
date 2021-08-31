import * as express from 'express';
import * as cors from 'cors';
import {
  createTodoRoute,
  updateTodoStatusRoute,
  createSubtaskRoute,
  updateSubtaskStatusRoute,
  getTodoList,
  notfoundRoute,
} from './app/routes';
import { BASE_URL, SUBTASK_URL, TODO_URL } from '@todolist/shared';
import { corsOptions as options } from './app/configs';
import errorHandler from './app/handlers/error.handler';

const app = express();

app.use(express.json());
app.use(cors(options));
app.use(TODO_URL, createTodoRoute);
app.use(TODO_URL, updateTodoStatusRoute);
app.use(TODO_URL, getTodoList);
app.use(SUBTASK_URL, createSubtaskRoute);
app.use(SUBTASK_URL, updateSubtaskStatusRoute);
app.use(notfoundRoute);
app.use(errorHandler);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + BASE_URL);
});

server.on('error', console.error);
