import Heading from "./Heading";
import AppContext from "../context/context";
import { useContext, useState } from "react";
import { addTodo, getTodos } from "../api/api";
const ModalChild = () => {
  const [newTodo, setNewTodo] = useState("");
  const {
    showModal: [showModal, setShowModal],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    todos: [_, setTodos],
  } = useContext(AppContext)!;

  const handleAddTodo = async () => {
    await addTodo({ title: newTodo });
    const data = await getTodos();
    setTodos(data);
    setShowModal(!showModal);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-10 flex justify-center items-center">
      <div className="w-1/3 bg-white border rounded-md p-4 dark:bg-neutral-700 dark:border-white">
        <Heading text={"NEW NOTE"} />
        <input
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
          type="text"
          placeholder="Add your note..."
          className="w-full mt-3 py-1 px-3 border border-blue-600 rounded-md outline-none text-gray-800"
        />
        <div className="w-full flex justify-between mt-16">
          <button
            onClick={() => setShowModal(!showModal)}
            className="px-4 py-1 rounded-md border border-blue-500 bg-transparent text-blue-500"
          >
            CANCEL
          </button>
          <button
            onClick={handleAddTodo}
            className="px-4 py-1 rounded-md bg-indigo-500 text-white"
          >
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalChild;
