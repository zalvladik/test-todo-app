import type { TodosResponseT } from "src/types/api";

import { api } from "src/config/ky";
import { FetchEndpoint } from "src/constants";
import useLocalStorage from "src/hooks/useLocalStorage";

const deleteTodo = async (id: number): Promise<TodosResponseT[]> => {
  const collection = useLocalStorage("toDoArray");

  console.log({ id });
  return api
    .delete(FetchEndpoint.TODOS, {
      json: { collection, id },
    })
    .json();
};

export default deleteTodo;
