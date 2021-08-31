import { IResponseBody } from '@todolist/shared'

const baseUrl = 'http://localhost:3333'
type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

const fetchApi = async <T = unknown>(
  endpoint: string,
  method: Method
): Promise<T> => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method,
      headers: { 'Content-type': 'application/json;charset=UTF-8' },
    })
    if (response.status >= 200 && response.status < 300) {
      const { data } = (await response.json()) as IResponseBody<T>
      return data
    }
    const data = (await response.json()) as IResponseBody<T>
    throw new Error(data.status.message)
  } catch (e) {
    return Promise.reject(e.message)
  }
}

export default fetchApi
