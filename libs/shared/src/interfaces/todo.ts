export enum Status {
  Complete = 'completed',
  Pending = 'pending',
}

export interface ITodo {
  title: string;
  status: Status;
  createdDate: Date;
}

export type Subtask = ITodo;
