import { Router } from "express";
import * as WorkoutController from '../../controllers/workoutController.js';

export const router = Router();

router
    .get("/", WorkoutController.getAllWorkouts)    
    .get("/:workoutId", WorkoutController.getWorkoutById)
    .post("/:workoutId", WorkoutController.createNewWorkout)
    .put("/:workoutId", WorkoutController.putWorkout)
    .delete("/:workoutId", WorkoutController.deleteOneWorkout)

