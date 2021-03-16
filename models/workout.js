const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
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
        distance: {
            type: Number,
        },
        weight: {
            type: Number,
           
        },
        reps: {
            type: Number,
            
        },
        sets: {
            type: Number,
           
        }
    }]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;