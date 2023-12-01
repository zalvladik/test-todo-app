import { TodoListProps } from 'src/components/TodoList/types'

import styles from 'src/components/TodoList/styles.module.scss'

const TodoList = ({ children }: TodoListProps): JSX.Element => {
  return <ul className={styles.todo_list}>{children}</ul>
}

export default TodoList
