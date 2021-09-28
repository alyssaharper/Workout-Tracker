const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
    },
    type: {
        type: String,
    },
    weight: {
        type: Number
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    duration: {
        type:
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;