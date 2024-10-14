import * as WorkoutService from "../services/workoutService.js"

const getAllWorkouts = (req, res) => {  
    res.send(WorkoutService.getAllWorkouts);

};

const getWorkoutById = (req, res) => {
    const { workoutId } = req.params;
    res.send(WorkoutService.getWorkoutById(workoutId));
};

const createNewWorkout = (req, res) => {
    const { workoutId } = req.params;
    res.send(WorkoutService.createNewWorkout(workoutId));
};

const putWorkout = (req, res) => {
    const { workoutId } = req.params;
    res.send(WorkoutService.putWorkout(workoutId));
};

const deleteOneWorkout = (req, res) => {
    const { workoutId } = req.params;
    res.send(WorkoutService.deleteOneWorkout(workoutId));
};

export{
    getAllWorkouts,
    getWorkoutById,
    createNewWorkout,
    putWorkout, 
    deleteOneWorkout,
    
};

