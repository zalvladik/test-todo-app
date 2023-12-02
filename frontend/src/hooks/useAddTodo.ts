import { useQueryClient, useMutation } from "react-query";
import { toast } from "react-toastify";

import { CacheKeys, StorageKeys } from "src/constants";

import addTodo from "src/services/api/addTodo";

const useAddTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: (text: string) => addTodo(text),

    onSuccess: (newData) => {
      queryClient.setQueryData(CacheKeys.TODOS, newData); //react-quary

      localStorage.setItem(StorageKeys.TO_DO_ARRAY, JSON.stringify(newData)); //localStorage

      toast.success("Created ToDo", {
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
  });

  return { mutate, isLoading };
};

export default useAddTodo;
