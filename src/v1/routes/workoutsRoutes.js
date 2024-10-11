import { Router } from "express";
import {getAllWorkouts, getWorkoutById, createNewWorkout, putWorkout, deleteOneWorkout} from '../../controllers/workoutController.js';

export const router = Router();

router
    .get("/", getAllWorkouts)    
    .get("/:workoutId", getWorkoutById)
    .post("/:workoutId", createNewWorkout)
    .put("/:workoutId", putWorkout)
    .delete("/:workoutId", deleteOneWorkout)

