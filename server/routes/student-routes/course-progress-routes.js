const express = require('express');
const {getCurrentCourseProgress, markCurrentLectureAsViewed, resetCurrentCourseProgress} = 
require('../../controllers/student-controller/course-progress-routes');

const router = express.Router();

router.get('/get/:userId/:courseId', getCurrentCourseProgress);
router.post('/mark-lecture-viewed', markCurrentLectureAsViewed);
router.post('/reset-progress', markCurrentLectureAsViewed)

module.exports = router;
