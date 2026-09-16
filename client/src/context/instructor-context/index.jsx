import { createContext, useState } from "react";
import { courseCurriculumInitialFormData, courselandingInitialFormData } from "@/config";

export const InstructorContext = createContext(null);



export default function InstructorProvider({children}){
    const [CourselandingFormData, setCourseLandingFormData] = useState(courselandingInitialFormData);

    const [courseCurriculumFormData, setCourseCurriculumFormData] = useState(courseCurriculumInitialFormData);
    const [mediaUploadProgress, setMediaUploadProgress] = useState(false);
    const [mediaUploadProgressPercentage, setMediaUploadProgressPercentage] = useState(0);
    const [instructorCoursesList, setInstructorCoursesList] = useState([]);
    const [currentEditedCourseId, setCurrentEditedCourseId] = useState(null)


    return <InstructorContext.provider 
    value = {{ 
        CourselandingFormData, 
        setCourseLandingFormData, 
        courseCurriculumFormData, 
        setCourseCurriculumFormData,
        mediaUploadProgress, 
        setMediaUploadProgress,
        mediaUploadProgressPercentage, 
        setMediaUploadProgressPercentage,
        instructorCoursesList,        
        setInstructorCoursesList,
        currentEditedCourseId, 
        setCurrentEditedCourseId
    }}>{children}</InstructorContext.provider> 
}