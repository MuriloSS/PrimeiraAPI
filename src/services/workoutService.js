import { dados } from "../database/db.js";

const getAllWorkouts = () => {  
    return dados;
};

const getWorkoutById = (id) => {
    return `Get workout ${id}`;
};

const createNewWorkout = () => {
   return `Posting new workout`
};

const putWorkout = (id) => {
   return `Updating workout ${id}`
};

const deleteOneWorkout = (id) => {
   return `Deleting workout ${id}`
};

export{
    getAllWorkouts,
    getWorkoutById,
    createNewWorkout,
    putWorkout, 
    deleteOneWorkout,
    
};