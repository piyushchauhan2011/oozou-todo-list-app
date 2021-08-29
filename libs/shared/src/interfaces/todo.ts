export enum Status {
  Complete = 'completed',
  Pending = 'pending',
}

export interface ITodo {
  title: string;
  status: Status;
  createdDate: Date;
  subtasks: ISubtask[];
}

export interface ISubtask extends Omit<ITodo, 'createdDate' | 'subtasks'> {
  todoId: ITodo;
}
