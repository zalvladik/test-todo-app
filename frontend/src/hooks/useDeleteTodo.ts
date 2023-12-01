import { useQueryClient, useMutation } from "react-query";
import { toast } from "react-toastify";

import { CacheKeys } from "src/constants";

import deleteTodo from "src/services/api/deleteTodo";

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: (id: number) => deleteTodo(id),

    onSuccess: (newData) => {
      queryClient.setQueryData(CacheKeys.TODOS, newData); //react-quary

      localStorage.setItem("toDoArray", JSON.stringify(newData)); //localStorage

      toast.success("ToDo deleted", {
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

export default useDeleteTodo;
