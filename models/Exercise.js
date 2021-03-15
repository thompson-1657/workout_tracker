const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    
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
    }



})

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;