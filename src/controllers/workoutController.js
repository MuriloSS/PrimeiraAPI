
export const getAllWorkouts = (req, res) => {  
    res.send('Get all workouts');
};

const getWorkoutById = (req, res) => {
    const { workoutId } = req.params;
    res.send(`Get workout ${workoutId}`);
};

const createNewWorkout = (req, res) => {
    const { workoutId } = req.params;
    res.send(`Created workout ${workoutId}`);
};

const postWorkout = (req, res) => {
    const { workoutId } = req.params;
    res.send(`Posting workout ${workoutId}`);
};

const putWorkout = (req, res) => {
    const { workoutId } = req.params;
    res.send(`Updating workout ${workoutId}`);
};

const deleteOneWorkout = (req, res) => {
    const { workoutId } = req.params;
    res.send(`Deleting workout ${workoutId}`);
};


/*exports = { 
    getAllWorkouts,
    getWorkoutById,
    postWorkout,
    putWorkout, 
    deleteOneWorkout,
    createNewWorkout
};*/

