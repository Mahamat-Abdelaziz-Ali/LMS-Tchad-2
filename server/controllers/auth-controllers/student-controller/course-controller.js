const Course = require('../../models/Course')



const getAllStudentViewCourses = async (req, res)=> {
    try{

        const coursesList = await Course.find({});

        if(coursesList.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No course found',
                data:[]
            })
        }


        res.status(200).json({
            success: true,
            data: coursesList,
        });

    } catch(e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occured!'
        })
    }
}<></>


const getStudentViewCourseDetails = async (req, res)=> {
    try{

        const {id} = req.params;
        const courseDetails = await Course.findById(id);

        if(!courseDetails) {
            return res.status(404).json({
                success: false,
                message: 'No course details found',
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            data: courseDetails,
        });

    } catch(e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occured!'
        })
    }
}