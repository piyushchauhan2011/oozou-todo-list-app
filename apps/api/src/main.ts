import * as express from 'express';
import * as cors from 'cors';
import todoRoute from './app/routes/todo.route';
import { corsOptions as options } from './app/configs';

const BASE_URL = '/api/todo';

const app = express();

app.use(express.json());
app.use(BASE_URL, todoRoute);
app.use((err, req, res, next) => {
  res.json({ status: res.statusCode, message: err.message });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + BASE_URL);
});

server.on('error', console.error);
