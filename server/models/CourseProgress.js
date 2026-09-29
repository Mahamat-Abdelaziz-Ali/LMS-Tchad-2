const mongoose = require('mongoose');

const LectureProgressSchema = new mongoose.Schema({
    lectureId : String,
    viewed : Boolean,
    dateViewed : Date
})

const CourseProgressSchema = new mongoose.Schema({
    userId : String,
    courseId : String,
    completed : Boolean,
    completionDate : Date,
    lectureProgress : [LectureProgressSchema]
});


module.exports = mongoose.model('Progress', CourseProgressSchema);
