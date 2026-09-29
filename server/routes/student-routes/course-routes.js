const express = require('express');
const router = express.Router();
const {getStudentViewCourseDetails, getAllStudentViewCourses, checkCoursePurchaseInfo} =require('');

router.get('/get', getAllStudentViewCourses);
router.get("/get/details/:id", getStudentViewCourseDetails);
router.get("/purchase-info/:id/:studentId", checkCoursePurchaseInfo);


module.exports = router;
