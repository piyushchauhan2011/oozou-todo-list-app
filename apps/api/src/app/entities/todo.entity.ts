import { Status, ITodo, ISubtask } from '@todolist/shared'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  JoinTable,
} from 'typeorm'
// eslint-disable-next-line import/no-cycle
import SubtaskEntity from './subtask.entity'

@Entity()
class TodoEntity implements ITodo {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.Pending,
  })
  status: Status

  @CreateDateColumn({ name: 'created_at' })
  createdDate: Date

  @OneToMany(() => SubtaskEntity, (subtask) => subtask.todoId)
  @JoinTable()
  subtasks: ISubtask[]
}

export default TodoEntity
