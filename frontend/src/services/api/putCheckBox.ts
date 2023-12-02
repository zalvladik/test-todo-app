import type { TodosResponseT, PutCheckBoxProps } from "src/types/api";

import { api } from "src/config/ky";
import { FetchEndpoint, StorageKeys } from "src/constants";
import useLocalStorage from "src/hooks/useLocalStorage";

const putCheckBox = async ({
  isChecked,
  id,
}: PutCheckBoxProps): Promise<TodosResponseT[]> => {
  const collection = useLocalStorage(StorageKeys.TO_DO_ARRAY);

  return api
    .put(FetchEndpoint.TODOS, {
      json: { isChecked, id, collection },
    })
    .json();
};

export default putCheckBox;
