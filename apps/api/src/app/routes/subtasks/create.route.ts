import * as express from 'express';
import subtaskRepository from '../../repositories/subtask.repo';
import { createHandler } from '../../handlers';

const createSubtaskRoute = express();

createSubtaskRoute.post('/create', createHandler(subtaskRepository, 'subtask'));

export default createSubtaskRoute;
