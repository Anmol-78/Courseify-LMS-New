import mongoose from "mongoose";

const courseProgressSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    courseId: { type: String, required: true },
    completed: { type: String, default: false },
    lectureCompleted: [],
  },
  { minimize: false }
);

export const courseProgress = mongoose.model(
  "courseProgress",
  courseProgressSchema
);
