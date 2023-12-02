import type { TodosResponseT } from "src/types/api";

import { api } from "src/config/ky";
import useLocalStorage from "src/hooks/useLocalStorage";
import { FetchEndpoint, StorageKeys } from "src/constants";

const addTodo = async (text: string): Promise<TodosResponseT[]> => {
  const collection = useLocalStorage(StorageKeys.TO_DO_ARRAY);

  return api
    .post(FetchEndpoint.TODOS, {
      json: { collection, text },
    })
    .json();
};

export default addTodo;
