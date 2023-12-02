import type { TodosResponseT } from "src/types/api";

import { api } from "src/config/ky";
import { FetchEndpoint, StorageKeys } from "src/constants";
import useLocalStorage from "src/hooks/useLocalStorage";

const deleteTodo = async (id: number): Promise<TodosResponseT[]> => {
  const collection = useLocalStorage(StorageKeys.TO_DO_ARRAY);

  console.log({ id });
  return api
    .delete(FetchEndpoint.TODOS, {
      json: { collection, id },
    })
    .json();
};

export default deleteTodo;
