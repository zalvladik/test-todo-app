import { useState } from "react";

import CheckBox from "src/components/CheckBox";
import ActionButton from "src/components/Buttons/ActionButton";

import { useModal } from "src/components/ModalContext";
import { TodoListItemProps } from "src/components/TodoListItem/types";

import Trash from "src/assets/SVG/Trash";
import Note from "src/assets/SVG/Note";

import usePutCheckBox from "src/hooks/usePutCheckBox";
import useDeleteTodo from "src/hooks/useDeleteTodo";

import styles from "src/components/TodoListItem/styles.module.scss";

const TodoListItem = ({
  isChecked,
  text,
  id,
}: TodoListItemProps): JSX.Element => {
  const [toggle, setToggle] = useState(isChecked);

  const { mutate } = usePutCheckBox();
  const { mutate: deleteMutate, isLoading } = useDeleteTodo();

  const { openModal } = useModal();

  const toggleCheckBox = (value: boolean): void => {
    setToggle(value);
    mutate({ isChecked: value, id });
  };

  return (
    <li className={styles.item}>
      <CheckBox onClick={toggleCheckBox} isChecked={toggle} />
      <p className={styles.text}>{text}</p>
      <div className={styles.buttons_container}>
        <ActionButton
          bgColor={"bg-green-500"}
          onClick={() => {
            openModal(id);
          }}
          icon={<Note />}
        />
        <ActionButton
          bgColor={"bg-red-500"}
          onClick={() => {
            deleteMutate(id);
          }}
          disabled={isLoading}
          icon={<Trash />}
        />
      </div>
    </li>
  );
};

export default TodoListItem;
