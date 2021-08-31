export enum Status {
  Complete = 'completed',
  Pending = 'pending',
}

export interface ITodo {
  id: number
  title: string
  status: Status
  createdDate: Date
  subtasks: ISubtask[]
}

export interface ISubtask extends Omit<ITodo, 'createdDate' | 'subtasks'> {
  todoId: number
}
