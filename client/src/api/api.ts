import axios from "axios";
import toast from "react-hot-toast";
import { TodoItemType } from "../types";

export const getTodos = async (): Promise<TodoItemType[]> => {
  try {
    const { data } = await axios.get("/api/v1/todos");
    return data.todos;
  } catch (error) {
    return [];
  }
};

export const addTodo = async ({ title }: { title: string }) => {
  try {
    const { data } = await axios.post("/api/v1/add-todo", { title });
    toast.success(data.message);
  } catch (error) {
    console.log(error);
    toast.error("server error");
  }
};

export const updateTodo = async (_id: string) => {
  try {
    const { data } = await axios.put("/api/v1/update-todo", { _id });
    if (data.message) toast.success(data.message);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const deleteTodo = async (_id: string) => {
  try {
    const { data } = await axios.delete(`/api/v1/delete-todo?id=`, {
      params: {
        _id,
      },
    });
    toast.success(data.message);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
