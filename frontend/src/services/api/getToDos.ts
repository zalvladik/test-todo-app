import type { TodosResponseT } from 'src/types/api'

import { api } from 'src/config/ky'

import { FetchEndpoint } from 'src/constants'

const getTodos = async (): Promise<TodosResponseT[]> => {
  return api.get(`${FetchEndpoint.TODOS}`).json()
}

export default getTodos
