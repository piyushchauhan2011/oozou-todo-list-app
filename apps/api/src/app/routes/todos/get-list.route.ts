import * as express from 'express';
import { getTodoListHandler } from '../../handlers';

const getTodoList = express();

getTodoList.get('/todos', getTodoListHandler);

export default getTodoList;
