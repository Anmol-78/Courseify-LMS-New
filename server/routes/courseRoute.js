import express from 'express'
import { getAllCourse } from "../controllers/courseController.js";
import { getCourseId } from "../controllers/courseController.js";

const courseRouter = express.Router()

courseRouter.get('/all', getAllCourse)
courseRouter.get('/:id', getCourseId)

export default courseRouter;