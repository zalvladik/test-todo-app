import { useState } from "react";

import Input from "src/components/Input";
import SubmitButton from "src/components/Buttons/SubmitButton";
import useAddTodo from "src/hooks/useAddTodo";

import { Colors } from "src/constants";
import styles from "src/components/TodoForm/styles.module.scss";

const TodoForm = (): JSX.Element => {
  const { mutate, isLoading } = useAddTodo();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    mutate(inputValue);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        value={inputValue}
        onChange={(value) => {
          setInputValue(value);
        }}
      />

      <SubmitButton bgColor={Colors.BLUE_500} disabled={isLoading} />
    </form>
  );
};

export default TodoForm;
