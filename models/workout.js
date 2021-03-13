const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
       type: {
            type:String,
            trim: true,
            required: "Type of Exercise is Required"
        },
        name: {
            type:String,
            trim: true,
            required: "Name of Exercise is Required" 
        },
        duration: {
            type: Number,
            required: "Enter a Duration"
        },
        weight: {
            type: Number,
            required: "Enter a Weight"
        },
        reps: {
            type: Number,
            required: "Enter Reps"
        },
        sets: {
            type: Number,
            required: "Enter Sets"
        },
    }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;