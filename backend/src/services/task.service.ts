import Task from "../models/task.model";
import { ITask } from "../types/types";

const getAllTasks = async (): Promise<ITask[]> => {
  return await Task.find();
};

const getTaskById = async (id: string): Promise<ITask | null> => {
  return await Task.findById(id);
};

const createTask = async (taskData: ITask): Promise<ITask> => {
  const task = new Task(taskData);
  return await task.save();
};

const updateTask = async (
  id: string,
  taskData: ITask
): Promise<ITask | null> => {
  return await Task.findByIdAndUpdate(id, taskData, { new: true });
};

const deleteTask = async (id: string): Promise<ITask | null> => {
  return await Task.findByIdAndDelete(id);
};

export default {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
