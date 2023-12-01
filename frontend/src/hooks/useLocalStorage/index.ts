import { TodosResponseT } from "src/types/api";

const useLocalStorage = (storageKey: string): TodosResponseT[] | [] => {
  const storedData = localStorage.getItem(storageKey);
  const collection = storedData ? JSON.parse(storedData) : [];
  return collection;
};

export default useLocalStorage;
