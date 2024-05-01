import { CiSearch } from "react-icons/ci";
import { MdAddCircle } from "react-icons/md";
import TodoItem from "../components/TodoItem";
import { useContext, useEffect, useState } from "react";
import Modal from "../components/Modal";
import Heading from "../components/Heading";
import { getTodos } from "../api/api";
import { TodoItemType } from "../types";
import AppContext from "../context/context";
import ModalChild from "../components/ModalChild";
import ThemeButton from "../components/ThemeButton";

const Todo = () => {
  const [searchTodo, setSearchTodo] = useState("");
  const {
    todos: [todos, setTodos],
    showModal: [showModal, setShowModal],
  } = useContext(AppContext)!;

  useEffect(() => {
    let timer: number;
    if (searchTodo) {
      timer = setTimeout(() => {
        const filtered_todos = todos.filter((todo: TodoItemType) =>
          todo.title
            .toLocaleLowerCase()
            .includes(searchTodo.toLocaleLowerCase())
        );
        setTodos(filtered_todos);
      }, 500);
    } else {
      fetchTodos();
    }

    return () => clearTimeout(timer);
  }, [searchTodo]);

  async function fetchTodos() {
    const data = await getTodos();
    setTodos(data);
  }

  return (
    <section className="relative h-screen pt-[40px]">
      <Heading text={"TODO LIST"} />
      <div className="flex w-full justify-center mt-4 gap-3">
        <div className=" flex-[0.8] relative">
          <input
            onChange={(e) => setSearchTodo(e.target.value)}
            value={searchTodo}
            type="text"
            placeholder="search note..."
            className="w-full py-1 px-3 border border-blue-600 rounded-md outline-none text-gray-800"
          />
          <CiSearch className="absolute right-2 text-blue-600 top-[20%] font-bold text-xl cursor-pointer" />
        </div>
        <ThemeButton />
      </div>
      <main className="mt-7 flex flex-col gap-4 items-center py-4">
        {todos.length ? (
          todos.map((todo: TodoItemType) => (
            <TodoItem
              key={todo._id}
              title={todo.title}
              completed={todo.completed}
              _id={todo._id}
            />
          ))
        ) : (
          <p className="text-black dark:text-white">No Todos Yet (;</p>
        )}
      </main>
      <button
        onClick={() => setShowModal(true)}
        className=" absolute right-8 bottom-12"
      >
        <MdAddCircle
          style={{ fontSize: "3rem" }}
          className=" text-indigo-500"
        />
      </button>

      {showModal && (
        <Modal>
          <ModalChild />
        </Modal>
      )}
    </section>
  );
};

export default Todo;
