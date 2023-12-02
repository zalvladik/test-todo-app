import type { PutTodoProps, TodosResponseT } from "src/types/api";

import { api } from "src/config/ky";
import { FetchEndpoint, StorageKeys } from "src/constants";
import useLocalStorage from "src/hooks/useLocalStorage";

const putTodo = async ({
  id,
  text,
}: PutTodoProps): Promise<TodosResponseT[]> => {
  const collection = useLocalStorage(StorageKeys.TO_DO_ARRAY);

  return api
    .put(FetchEndpoint.TODOS_TEXT, {
      json: { id, text, collection },
    })
    .json();
};

export default putTodo;
