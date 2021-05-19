const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
	// creates type attribute
    type: String,
        
    // creates name attribute
    name: String,
        
    // creates duration attribute
	duration: Number,

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;