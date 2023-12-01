import type { TodosResponseT } from "src/types/api";

import { api } from "src/config/ky";
import useLocalStorage from "src/hooks/useLocalStorage";
import { FetchEndpoint } from "src/constants";

const addTodo = async (text: string): Promise<TodosResponseT[]> => {
  const collection = useLocalStorage("toDoArray");

  return api
    .post(FetchEndpoint.TODOS, {
      json: { collection, text },
    })
    .json();
};

export default addTodo;
