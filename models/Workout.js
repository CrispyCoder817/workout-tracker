const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
	// creates a day attribute
	day: {
        type: Date,
        default:() => new Date()
	},
	// creates exercise details
	exercises: [
        {
            type:{
                type:String
            },
            name:{
                type:String
            },
            duration:{
                type:Number
            },
            distance:{
                type:Number
            },
            weight:{
                type:Number
            },
            reps:{
                type:Number
            },
            sets:{
                type:Number
            }
        }
	],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;