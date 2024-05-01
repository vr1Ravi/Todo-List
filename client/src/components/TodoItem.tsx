import { ImCheckboxUnchecked } from "react-icons/im";
import { IoIosCheckbox } from "react-icons/io";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { TodoItemType } from "../types";
import AppContext from "../context/context";
import { useContext } from "react";
import { deleteTodo, getTodos, updateTodo } from "../api/api";
const TodoItem = ({ title, completed, _id }: TodoItemType) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    todos: [_, setTodos],
  } = useContext(AppContext)!;

  const handleUpdateTodo = async () => {
    await updateTodo(_id);
    const data = await getTodos();
    setTodos(data);
  };

  const handleDeleteTodo = async () => {
    await deleteTodo(_id);
    const data = await getTodos();
    setTodos(data);
  };

  return (
    <div className="pb-[3px] text-black dark:text-white border-b border-b-gray-300 flex w-[60%] group">
      <div className="mr-auto flex gap-3 items-center">
        <button onClick={handleUpdateTodo}>
          {completed ? (
            <IoIosCheckbox style={{ fontSize: "22px" }} />
          ) : (
            <ImCheckboxUnchecked />
          )}
        </button>

        <p className={`${completed && "line-through text-gray-300"}`}>
          {title}
        </p>
      </div>
      <button onClick={handleDeleteTodo} className="hidden group-hover:block">
        <MdOutlineDeleteSweep
          className=" text-gray-400"
          style={{ fontSize: "1.2rem" }}
        />
      </button>
    </div>
  );
};

export default TodoItem;
