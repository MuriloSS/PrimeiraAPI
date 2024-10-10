import { request, Router } from "express";

export const router = Router();

router
    .get("/", (req, res)=>{
        res.send("Get all workouts");
    })

    .get("/:workoutId", (req, res)=>{
        res.send(`Get workout ${req.params.workoutId}`);
    })

    .post("/:workoutId", (req, res)=>{
        res.send(`Posting workout ${req.params.workoutId}`);
    })

    .put("/:workoutId", (req, res)=>{
        res.send(`Created workout ${req.params.workoutId}`);
    })

    .delete("/:workoutId", (req, res)=>{
        res.send(`Deleting workout ${req.params.workoutId}`);
    })

