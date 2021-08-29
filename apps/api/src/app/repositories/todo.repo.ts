import { TodoEntity } from '../entities';
import { connect } from '../configs';

const todoRepository = async () => {
  const connection = await connect();
  return connection.getRepository(TodoEntity);
};

export default todoRepository;
