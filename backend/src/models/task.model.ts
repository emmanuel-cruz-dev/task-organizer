import mongoose, { Schema } from "mongoose";
import { ITask } from "../types/types";

const TaskSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    // createdBy: {
    //   type: String,
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ITask>("Task", TaskSchema, "Tasks");
