import { ReactNode, useState } from "react";
import { TodoItemType } from "../types";
import AppContext from "./context";

// create context provider
export function AppContextProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("light");

  return (
    <AppContext.Provider
      value={{
        todos: [todos, setTodos],
        showModal: [showModal, setShowModal],
        themes: [theme, setTheme],
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
