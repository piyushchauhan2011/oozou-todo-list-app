export enum Status {
  Complete = 'completed',
  Pending = 'pending',
}

export interface ITodo {
  title: string;
  status: Status;
  createdDate: Date;
  subtasks?: [];
}

export interface ISubtask extends ITodo {
  todoId: string;
}
