import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ISubtask, Status } from '@todolist/shared';
import TodoEntity from './todo.entity';

@Entity()
class SubtaskEntity implements ISubtask {
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

  @ManyToOne(() => TodoEntity, (todo) => todo.id)
  @JoinColumn({ name: 'todo_id' })
  todoId: number;
}

export default SubtaskEntity;
