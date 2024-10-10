import { Router } from "express";
import {workoutController} from '../../controllers/workoutController.js';

export const router = Router();

router
    .get("/", workoutController)
    .get("/:workoutId", controllerWorkouts)

    .post("/:workoutId", controllerWorkouts.postWorkout)

    .put("/:workoutId", controllerWorkouts.putWorkout)

    .delete("/:workoutId", controllerWorkouts.deleteOneWorkout)

