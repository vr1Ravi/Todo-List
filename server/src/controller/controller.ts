import { Request, Response } from "express";
import { Todo } from "../schema/model";
import { createtodo, modifytodo } from "../types";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find({});

    res.status(200).json({
      success: true,
      todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server is not working right now",
    });
  }
};

export const addTodo = async (req: Request, res: Response) => {
  try {
    const payload_todo = req.body;

    const parse_payload_todo = createtodo.safeParse(payload_todo);

    if (!parse_payload_todo.success) {
      return res.status(411).json({
        message: "You sent the wrong inputs",
      });
    }

    await Todo.create({
      title: payload_todo.title,
      completed: false,
    });

    res.status(201).json({
      success: true,
      message: "A new todo added",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server is not working right now",
    });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const payload_todo_id = req.body;
    const parse_payload_todo_id = modifytodo.safeParse(payload_todo_id);

    if (!parse_payload_todo_id) {
      return res.status(411).json({
        success: false,
        message: "You sent the wrong inputs",
      });
    }

    const todo = await Todo.findById(payload_todo_id._id);

    if (!todo) {
      return res.status(400).json({
        message: "No todo found",
      });
    }

    todo.completed = !todo.completed;

    await todo.save();
    if (todo.completed) {
      res.status(200).json({
        success: true,
        message: "This todo is completed",
      });
    } else {
      res.status(200).json({
        success: true,
      });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "server is not working right now",
    });
  }
};
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const payload_todo_id = req.query;
    const parse_payload_todo_id = modifytodo.safeParse(payload_todo_id);

    if (!parse_payload_todo_id) {
      return res.status(411).json({
        success: false,
        message: "You sent the wrong inputs",
      });
    }

    await Todo.deleteOne({ _id: payload_todo_id._id });

    res.status(200).json({
      success: true,
      message: "This todo is deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server is not working right now",
    });
  }
};
