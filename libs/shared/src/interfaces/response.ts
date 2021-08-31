export interface IResponseStatus {
  code: number
  message: string
}

export interface IResponseBody<T = unknown> {
  status: IResponseStatus
  data: T
}
