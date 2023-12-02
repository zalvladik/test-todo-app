import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { CacheKeys, StorageKeys } from "src/constants";

import getTodos from "src/services/api/getToDos";

const usegetTodos = () => {
  const { isLoading, refetch, data } = useQuery(
    CacheKeys.TODOS, //react-quary
    () => getTodos(),
    {
      onSuccess(data) {
        localStorage.setItem(StorageKeys.TO_DO_ARRAY, JSON.stringify(data)); //localStorage
      },
      onError: (error: Error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      },
    }
  );

  return {
    refetch,
    data,
    isLoading,
  };
};

export default usegetTodos;
