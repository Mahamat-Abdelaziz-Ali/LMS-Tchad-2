const StudentCourses = require('../../models/StudentCourses');

const getCoursesByStudentId = async(req,res) {
    try {

        const {studentId} = req.params;
        const studentBoughtCourses = await StudentCourses.findOne({
            userId : studentId
        })

            return res.status(202).json({
                success : true,
                data : studentBoughtCourses.courses,
            })

    } catch (error) {
        console.log(error);
       res.status(500).json({
        success : false,
        message : 'Some error occured!'
       })
    }
};


module.exports = {getCoursesByStudentId};
