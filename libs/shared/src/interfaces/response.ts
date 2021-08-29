export interface ResponseStatus {
  code: number;
  message: string;
}

export interface ResponseBody<T = unknown> {
  status: ResponseStatus;
  data: T;
}
