import * as express from 'express';
import { todoRepository } from '../repositories';

const todoRoute = express();

todoRoute.post('/create', async (req, res, next) => {
  try {
    const repo = await todoRepository();
    const todo = await repo.create(req.body);
    const results = await repo.save(todo);
    res.json({ message: results.join(', '), status: res.statusCode });
  } catch (e) {
    next(e);
  }
});

export default todoRoute;
