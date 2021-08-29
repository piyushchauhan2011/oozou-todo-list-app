import { connect } from '../configs';
import { SubtaskEntity } from '../entities';

const subtaskRepository = async () => {
  const connection = await connect();
  return connection.getRepository(SubtaskEntity);
};

export default subtaskRepository;
