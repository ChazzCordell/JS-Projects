const mongoose = require('mongoose');
const LessonSchema = new mongoose.Schema({
    name: {
    type: String,
    required: [true, "Must enter name"],
    minLength: [3, "Must be at least 3 characters long"], },
    type: { type: String,
    required: [true, "Must enter type"],
    minLength: [3, "Must be at least 3 characters long"], },
    description: { type: String,
    required: [true, "Must enter description"],
    minLength: [3, "Must be at least 3 characters long"], },
    skill: {type: Number}
    },
{ timestamps: true });
const Lesson = mongoose.model("Lesson", LessonSchema);

module.exports = Lesson;
