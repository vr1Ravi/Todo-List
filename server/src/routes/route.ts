import express from "express";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controller/controller";

const router = express.Router();

router.route("/todos").get(getTodos);
router.route("/add-todo").post(addTodo);
router.route("/update-todo").put(updateTodo);
router.route("/delete-todo").delete(deleteTodo);

export { router };
