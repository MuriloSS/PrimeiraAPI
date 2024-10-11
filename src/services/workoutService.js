
const getAllWorkouts = () => {  
    return "All Workouts returned";
};

const getWorkoutById = (id) => {
    res.send(`Get workout ${id}`);
};

const createNewWorkout = () => {
    `Posting new workout`
};

const putWorkout = (id) => {
    `Updating workout ${id}`
};

const deleteOneWorkout = (id) => {
    `Deleting workout ${id}`
};

export{
    getAllWorkouts,
    getWorkoutById,
    createNewWorkout,
    putWorkout, 
    deleteOneWorkout,
    
};