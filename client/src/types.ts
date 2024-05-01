export interface TodoItemType {
  _id: string;
  title: string;
  completed: boolean;
}

export interface HeadingType {
  text: string;
}
export interface AppContextType {
  todos: [TodoItemType[], React.Dispatch<React.SetStateAction<TodoItemType[]>>];
  showModal: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  themes: [string, React.Dispatch<React.SetStateAction<string>>];
}
