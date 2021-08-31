import * as express from 'express';
import { subtaskRepository } from '../../repositories';
import { updateStatusHandler } from '../../handlers';

const updateSubtaskStatusRoute = express();

updateSubtaskStatusRoute.put(
  '/update/:id',
  updateStatusHandler(subtaskRepository, 'subtask')
);

export default updateSubtaskStatusRoute;
