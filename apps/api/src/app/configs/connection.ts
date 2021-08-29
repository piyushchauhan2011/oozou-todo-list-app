import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';
import { TodoEntity } from '../entities';
import { createConnection } from 'typeorm';

const options: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'my_todo_list',
  entities: [TodoEntity],
  logging: true,
  synchronize: true,
};

const connect = async () => {
  return createConnection(options);
};

export default connect;
