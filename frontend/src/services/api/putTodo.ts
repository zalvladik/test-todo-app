import type { PutTodoProps, TodosResponseT } from "src/types/api";

import { api } from "src/config/ky";
import { FetchEndpoint } from "src/constants";
import useLocalStorage from "src/hooks/useLocalStorage";

const putTodo = async ({
  id,
  text,
}: PutTodoProps): Promise<TodosResponseT[]> => {
  const collection = useLocalStorage("toDoArray");

  return api
    .put(FetchEndpoint.TODOS_TEXT, {
      json: { id, text, collection },
    })
    .json();
};

export default putTodo;
