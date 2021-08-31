import { connect } from '../configs'
import { TodoEntity } from '../entities'

const todoRepository = async () => {
  const connection = await connect
  return connection.getRepository(TodoEntity)
}

export default todoRepository
