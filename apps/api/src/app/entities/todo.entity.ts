import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { Status, ITodo } from '@todolist/shared';

@Entity()
class TodoEntity implements ITodo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.Pending,
  })
  status: Status;

  @CreateDateColumn({ name: 'created_at' })
  createdDate: Date;
}

export default TodoEntity;
