const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
	// creates type attribute
	type: String,
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;