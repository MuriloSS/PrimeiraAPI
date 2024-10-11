import express from "express";
import { router as v1WorkoutRouter } from "./src/v1/routes/workoutsRoutes.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.send(`<h1>Olááááa</h1> ${res.links.toString()}`);
});

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
    
})