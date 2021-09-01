import { TODO_URL, SUBTASK_URL } from './url'

export const CREATE_TODO = `${TODO_URL}/create`
export const UPDATE_TODO_STATUS = (id: number) => `${TODO_URL}/update/${id}`
export const GET_ALL_TODO = `${TODO_URL}/todos`
export const CREATE_SUBTASK = `${SUBTASK_URL}/create`
export const UPDATE_SUBTASK_STATUS = (id: number) =>
  `${SUBTASK_URL}/update/${id}`
