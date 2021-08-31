import * as express from 'express';
import { todoRepository } from '../../repositories';
import { updateStatusHandler } from '../../handlers';

const updateTodoStatusRoute = express();

updateTodoStatusRoute.put(
  '/update/:id',
  updateStatusHandler(todoRepository, 'todo')
);

export default updateTodoStatusRoute;
