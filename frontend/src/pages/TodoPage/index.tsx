import { useQuery, useQueryClient } from "react-query";

import TodoList from "src/components/TodoList";
import Title from "src/components/Title";
import TodoForm from "src/components/TodoForm";
import TodoListItem from "src/components/TodoListItem";
import Skeleton from "src/components/Skeleton";
import ModalPutToDo from "src/components/ModalPutToDo";

import { useModal } from "src/components/ModalContext";
import useLocalStorage from "src/hooks/useLocalStorage";

import styles from "src/pages/TodoPage/styles.module.scss";
import { CacheKeys } from "src/constants";
import { TodosResponseT } from "src/types/api";

const TodoPage = (): JSX.Element => {
  const collection = useLocalStorage("toDoArray");
  const queryClient = useQueryClient();
  queryClient.setQueryData(CacheKeys.TODOS, collection);

  const { data, isLoading } = useQuery<TodosResponseT[]>(CacheKeys.TODOS);

  const { isModalOpen } = useModal();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <Title text={`Todos (${data?.length})`} stylesProps="px-4" />
        </div>
        <div className={styles.todo_container}>
          <TodoForm />
          <TodoList>
            {isLoading ? (
              <Skeleton length={6} />
            ) : (
              data?.map((item) => (
                <TodoListItem
                  key={item.id}
                  id={item.id}
                  isChecked={item.isChecked}
                  text={item.text}
                />
              ))
            )}
          </TodoList>
        </div>
      </div>
      {isModalOpen && <ModalPutToDo />}
    </>
  );
};

export default TodoPage;
