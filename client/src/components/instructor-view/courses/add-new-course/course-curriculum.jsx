import { InstructorContext } from "@/context/instructor-context";
import { useContext } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { courseCurriculumInitialFormData } from "@/config";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MediaProgressbar from "@/components/media-progress-bar";
import { mediaDeleteService } from "@/services";




function CourseCurriculum(){

    const {courseCurriculumFormData, setCourseCurriculumFormData, 
        mediaUploadProgress, setMediaUploadProgress, 
        mediaUploadProgressPercentage, setMediaUploadProgressPercentage} = useContext(InstructorContext);
    

    function handleNewLecture(){
        setCourseCurriculumFormData([
            ...courseCurriculumFormData,
            {
                ...courseCurriculumInitialFormData[0],
            },
        ]);
    }

    function handleCourseTitleChange(event, currentIndex){
        let cpyCourseCurriculumFormData = [
            ...courseCurriculumFormData];
            console.log(cpyCourseCurriculumFormData, "cpyCourseCurriculumFormData");
            cpyCourseCurriculumFormData[currentIndex] = {
                ...cpyCourseCurriculumFormData[currentIndex],
                title : event.target.value
            };
            console.log(cpyCourseCurriculumFormData, "cpyCourseCurriculumFormData");

            setCourseCurriculumFormData(cpyCourseCurriculumFormData);
    }

    function handleFreePreviewChange(currentValue, currentIndex){
        console.log(currentValue, currentIndex);
        let cpyCourseCurriculumFormData = [
            ...courseCurriculumFormData];
            console.log(cpyCourseCurriculumFormData, "cpyCourseCurriculumFormData");
            cpyCourseCurriculumFormData[currentIndex] = {
                ...cpyCourseCurriculumFormData[currentIndex],
                freePreview : currentValue,
            }
            setCourseCurriculumFormData(cpyCourseCurriculumFormData);
    }

    async function handleSingleLectureUpload(event, currentIndex) {
        console.log(event.target.file);
        const selectedFile = event.target.files[0];

        if(selectedFile){
            const videoFormData = new FormData();
            videoFormData.append('file', selectedFile);

            try {
                setMediaUploadProgress(true);
                const response = await mediaUploadService(videoFormData, setMediaUploadProgressPercentage);
                if(response.success) {
                    let cpyCourseCurriculumFormData = [
            ...courseCurriculumFormData];
            cpyCourseCurriculumFormData[currentIndex] = {
                ...cpyCourseCurriculumFormData[currentIndex],
                videoUrl : response ?.data?.url,
                public_id : response?.data?.public_id
            }
            setCourseCurriculumFormData(cpyCourseCurriculumFormData);
            setMediaUploadProgress(false);
                }

                //console.log(response, "response");

            } catch (error) {
                console.log(error);
            }
        }

    }

    function handleReplaceVideo(currentIndex) {
        let cpyCourseCurriculumFormData= [...courseCurriculumFormData];
        const getCurrentVideoPublicId =cpyCourseCurriculumFormData[currentIndex].public_id;

        const deleteCurrentMediaResponse = await mediaDeleteService(getCurrentVideoPublicId);

        console.log(deleteCurrentMediaResponse, "deleteCurrentMediaResponse");

        if(deleteCurrentMediaResponse?.success){
            cpyCourseCurriculumFormData[currentIndex] = {
                ...cpyCourseCurriculumFormData[currentIndex],
            videoUrl : '',
        public_id : ''            
    };

    setCourseCurriculumFormData(cpyCourseCurriculumFormData);
        }
    }

    function isCourseCurriculumFormDataValid() {
        return courseCurriculumFormData.every(item=>{
            return item && typeof item  === 'object' && 
            item.title.trim() !== '' &&
            item.videoUrl.trim() !== ""

        })
    }

    //console.log(courseCurriculumFormData);

    ///console.log(deleteCurrentMediaResponse, "deleteCurrentMediaResponse");

    return <Card>
        <CardHeader>
            <CardTitle>Create Course Curriculum</CardTitle>
        </CardHeader>
        <CardContent>
            <Button disabled = {!isCourseCurriculumFormDataValid() || mediaUploadProgress} onClick = {handleNewLecture}>Add Lecture</Button>

            {
                mediaUploadProgress ? (
                <MediaProgressbar 
                isMediaUploading={mediaUploadProgress}
                progress={mediaUploadProgressPercentage}
                />) : null
            }

            <div className="mt-4 space-y-4">
                {
                    courseCurriculumFormData.map((curriculumItem, index)=>{
                        <div className="border p-5 rounded-md">
                            <div className="flex gap-5 items-center">
                                <h3 className="font-semibold">Lecture {index+1}</h3>
                                <Input 
                                name ={`title-${index+1}`}
                                placeholder = "Enter lecture title"
                                className ="max-w-96"
                                onChange = {(event) => handleCourseTitleChange(event, index)}
                                value = {courseCurriculumFormData[index]?.title}
                                />
                                <div className="flex items-center space-x-2">
                                    <Switch onChekedChange ={(value)=> handleFreePreviewChange(value, index)}   
                                    checked = {courseCurriculumFormData[index] ?.freePreview} id = {`freePreview-${index+1}`}/>
                                    <Label htmlForm={`freePreview-${index+1}`}>Free Preview</Label>
                                </div>
                            </div>
                            <div className="mt-6">
                                {
                                    courseCurriculumFormData[index] ?.videoUrl ? (
                                    <div className="flex gap-3">
                                        <VideoPlayer url={courseCurriculumFormData[index]?.videoUrl}
                                        width ="450px"
                                        height ="200px"
                                        />
                                        <Button onClick={()=>handleReplaceVideo(index)}>Replace video</Button>
                                        <Button className="bg-red-900">Delete Lecture</Button>
                                    </div> ) : ( <Input 
                                type = "file"
                                accept ="video/*"
                                onChange ={(event)=> handleSingleLectureUpload(event, index)}
                                className = "mb-4"
                                />
                                )
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        </CardContent>
    </Card>
}


export default CourseCurriculum;
