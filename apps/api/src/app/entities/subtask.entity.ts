import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @Column({
    name: 'todo_id',
  })
  @ManyToOne(() => TodoEntity, (todo) => todo.id)
  todoId: TodoEntity;
}

export default SubtaskEntity;
