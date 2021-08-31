import * as express from 'express';
import { notFoundHandler } from '../../handlers';

const notfoundRoute = express();

notfoundRoute.get('*', notFoundHandler);

export default notfoundRoute;
