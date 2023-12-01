import { TodoCollectionT } from 'src/services/TodoService/types'

class TodoService {
  static create = async (
    collection: TodoCollectionT[],
    text: string,
  ): Promise<TodoCollectionT[]> => {
    const result = [
      ...collection,
      { id: Math.floor(Math.random() * 1000000), text, isChecked: false },
    ]
    return result
  }

  static delete = async (
    collection: TodoCollectionT[],
    id: number,
  ): Promise<TodoCollectionT[]> => {
    const result = collection.filter(item => item.id !== id)
    return result
  }

  static put = async (
    collection: TodoCollectionT[],
    id: number,
    isChecked: boolean,
  ): Promise<TodoCollectionT[]> => {
    const result = collection.map(item =>
      item.id === id
        ? {
            id: item.id,
            text: item.text,
            isChecked: isChecked,
          }
        : item,
    )

    return result
  }

  static putText = async (
    collection: TodoCollectionT[],
    id: number,
    text: string,
  ): Promise<TodoCollectionT[]> => {
    const result = collection.map(item =>
      item.id === id
        ? {
            id: item.id,
            text: text,
            isChecked: item.isChecked,
          }
        : item,
    )

    return result
  }
}

export default TodoService
