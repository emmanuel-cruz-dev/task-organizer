import mongoose, { Document, Schema } from "mongoose";

// Definir la interfaz para el documento de tarea
export interface ITask extends Document {
  title: string;
  description?: string;
  completed: boolean;
  // createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

// Crear el esquema
const TaskSchema: Schema = new Schema({
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<ITask>("Task", TaskSchema);
