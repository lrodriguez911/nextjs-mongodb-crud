import { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "the title is required"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "the description is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

export default taskSchema;