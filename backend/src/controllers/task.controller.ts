import { Request, Response } from "express";
import taskService from "../services/task.service";
import { stat } from "fs";

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskService.getAllTasks();
    res
      .status(200)
      .json({ message: "Tasks retrieved successfully", payload: tasks });
  } catch (error) {
    res.status(500).json({
      message: "Error getting tasks",
      payload: error,
    });
  }
};

const getTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      status: "FAILED",
      payload: { error: "Task ID is required" },
    });
  }

  try {
    const task = await taskService.getTaskById(id);

    if (!task) {
      return res.status(404).json({ message: `Task with ID ${id} not found` });
    }
    res.status(200).json({ status: "OK", payload: task });
  } catch (error) {
    res
      .status(500)
      .json({ status: "FAILED", payload: error || "Error getting task" });
  }
};

const createTask = async (req: Request, res: Response) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error creating task" });
  }
};

const updateTask = async (req: Request, res: Response) => {
  try {
    const task = await taskService.updateTask(req.params.id, req.body);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error updating task" });
  }
};

const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      status: "FAILED",
      payload: { error: "Task ID is required" },
    });
  }

  try {
    const task = await taskService.deleteTask(id);
    if (!task) {
      return res.status(404).json({ message: `Task with ID ${id} not found` });
    }
    res.status(200).json({ status: "OK", payload: task });
  } catch (error) {
    res
      .status(500)
      .json({ status: "FAILED", payload: error || "Server internal error" });
  }
};

export default {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
