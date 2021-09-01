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

export interface CreateTodoRequest {
  title: string
}

export interface CreateSubtaskRequest {
  title: string
  todoId: number
}

export interface CreateSubtaskResponse extends CreateSubtaskRequest {
  id: number
  status: Status
}

export interface ISubtask extends Omit<ITodo, 'createdDate' | 'subtasks'> {
  todoId?: Omit<ITodo, 'subtasks'>
}
