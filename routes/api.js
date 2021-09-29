const router = require('express').Router();
const Workout = require('../models/workout');

router.get('/api/workouts', async (req, res) => {
    try {
        let allWorkouts = await Workout.aggregate([{
            $addFields:{
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }])

        res.json(allWorkouts)
    } catch (err) {
        res.status(500).json(err.message)
    }
})

router.put('/api/workouts/:id', async (req, res) => {
    try {
        let newExercise = await Workout.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    exercises: req.body
                }
            },
            {new: true}
        )
        res.json(newExercise)
    } catch(err) {
        res.status(500).json(err.message)
    }
})

router.post('/api/workouts', async (req, res) => {
    try {
        let createWorkout = await Workout.create({})
        res.json(createWorkout)
    } catch(err) {
        res.status(500).json(err.message)
    }
})

router.get('/api/workouts/range', async (req, res) => {
    try {
        let allWorkouts = await Workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: "$exercise.duration"
                }
            }
        }]).sort({
           _id: -1 
        }).limit(7);
        res.json(allWorkouts)
    } catch(err) {
        res.status(500).json(err.message)
    }
})