import { useQueryClient, useMutation } from "react-query";
import { toast } from "react-toastify";

import { CacheKeys } from "src/constants";
import { PutCheckBoxProps } from "src/types/api";
import { useModal } from "src/components/ModalContext";

import putCheckBox from "src/services/api/putCheckBox";

const usePutCheckBox = () => {
  const { closeModal } = useModal();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: (payload: PutCheckBoxProps) => putCheckBox(payload),

    onSuccess: (newData) => {
      queryClient.setQueryData(CacheKeys.TODOS, newData); //react-quary

      localStorage.setItem("toDoArray", JSON.stringify(newData)); //localStorage

      closeModal();

      toast.success("ToDo changed", {
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

export default usePutCheckBox;
