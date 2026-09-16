import {Button } from "@/components/ui/button";
import {Card, CardContent } from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import { courseCurriculumInitialFormData, courseLandingInitialFormData } from "@/config";
import { AuthContext } from "@/context/auth-context";
import { InstructorContext } from "@/context/instructor-context";
import { addNewCourseService, fetchInstructorCourseDetailsService } from "@/services";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";





function AddNewCoursePage() {

    const {CourseLandingFormData, CourseCurriculumFormData, setCourseCurriculumFormData, setCourseLandingFormData, currentEditedCourseId, setCurrentEditedCourseId} = useContext(InstructorContext);


    const {auth}= useContext(AuthContext);

    const navigate = useNavigate();
    const params = useParams();

    console.log(params)

    function isEmpty(value) {
        if(Array.isArray(value)){
            return value.length === 0
        }

        return value === "" || value === null || value === undefined
    }

    function validateFormData(params) {
        for(const key in CourseLandingFormData){
            if(isEmpty(CourseLandingFormData[key])) {
                return false
            }
        }

        let hasFreePreview = false;

        for(const item of CourseCurriculumFormData){
            if(isEmpty(item.title) || isEmpty(item.videoUrl) || isEmpty(item.public_id)){
                return false
            }
            if(item.freePreview) {
                hasFreePreview = true //found at least free preview
            }
        }

        return hasFreePreview;
    }

    async function handleCreateCourse(params) {
        const courseFinalFormData = {
    instructorId : auth?.user?._id,
    instructorName : auth?.user?.userName,
    date : new Date(),
    title : String,
    ...CourseLandingFormData,
    students : [
        {
            studentId : String,
            studentName : String,
            studentEmail : String,
        }
    ],
    curriculum : CourseCurriculumFormData,
    isPublised : true,
        }

        const response = await addNewCourseService(courseFinalFormData);

        if(response?.success) {
            setCourseCurriculumFormData(courseLandingInitialFormData);
            setCourseCurriculumFormData(courseCurriculumInitialFormData);
            navigate(-1);
        }

        console.log(courseFinalFormData, 'courseFinalFormData');

    }

    async function fetchCurrentCourseDetails(){
        const response = await fetchInstructorCourseDetailsService()
    }

    useEffect(()=>{

        if(currentEditedCourseId) fetchCurrentCourseDetails();
        console.log(currentEditedCourseId, );
    }, [currentEditedCourseId])

    useEffect(()=>{
        if(params) setCurrentEditedCourseId(params?.courseId)
    }, [params])

    return <div className="container mx-auto p-4">
        <div className="flex justify-between ">
            <h1 className="text-3xl font-extrabold mb-5">Create a new course</h1>
            <Button disabled={!validateFormData()} onClick={handleCreateCourse} className="text-sm tracking-wider font-bold px-8">SUBMIT</Button>
        </div>
        <Card>
            <CardContent>
                <div className="container mx-auto p-4">
                    <Tabs defaultValue = "curriculum" className = "space-y-4">
                        <TabsList>
                            <TabsTrigger value = "curriculum">Curriculum</TabsTrigger>
                            <TabsTrigger value = "course-landing-page">Course Landing Page</TabsTrigger>
                            <TabsTrigger value = "settings">Settings</TabsTrigger>     //<hhhh/>
                        </TabsList>
                        <TabsContent value ="curriculum">
                            <CourseCurriculum/>
                        </TabsContent>
                        <TabsContent value ="course-landing-page">
                            <CourseLanding />
                        </TabsContent>
                        <TabsContent value ="settings">
                            <CoursesSettings />
                        </TabsContent>
                    </Tabs>
                </div>
            </CardContent>
        </Card>
    </div>
   
}

export default AddNewCoursePage;
