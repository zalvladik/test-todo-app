// RESPONSES

export type TodosResponseT = {
  id: number;
  isChecked: boolean;
  text: string;
};

// PROPS
export type GetTodosResponseT = {
  id: number;
  isChecked: boolean;
  text: string;
};

export type PutCheckBoxProps = {
  id: number;
  isChecked: boolean;
};

export type PutTodoProps = {
  id: number;
  text: string;
};
