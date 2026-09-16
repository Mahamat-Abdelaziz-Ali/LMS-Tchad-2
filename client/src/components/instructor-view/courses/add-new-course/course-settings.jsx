


function CourseSettings(){
    const {courseLandingFormControls, setCourseLandingFormData, mediaUploadProgress, setMediaUploadProgress, 
        mediaUploadProgressPercentage, setMediaUploadProgressPercentage}= useContext(InstructorContext);

    async function handleImageUploadChange(event) {
        const selectedImage = event.target.files[0];

        if(selectedImage) {
            const imageFormData = new FormData();
            imageFormData.append('file', selectedImage);

            try{
                setMediaUploadProgress(true)
                const response = await mediaUploadService(imageFormData, setMediaUploadProgressPercentage);

               // console.log(response, "response");
                if(response.success) {
                    setCourseLandingFormData({
                        ...CourseLandingFormData,
                        image : response.data.url
                    });
                    setMediaUploadProgress(false)
                }

            } catch (e) {
                console.log(e);
            }
        }

    }

   // console.log(CourseLandingFormData);

    return <Card>
        <CardHeader>
            <CardTitle>Course Settings</CardTitle>
        </CardHeader>
        <div className="p-4">                                       //npm i react-player
            {
                mediaUploadProgress ? (
                <MediaProgressbar 
                isMediaUploading={mediaUploadProgress}
                progress={mediaUploadProgressPercentage}
                />) : null
            }
        </div>
        <CardContent>
            {
                CourseLandingFormData ?.image ?
                <img src={CourseLandingFormData.image} alt="" /> : 
                <div className="flex flex-col gap-3">
                <Label>Upload Course Image</Label>
                <Input
                onChange= {handleImageUploadChange}
                type ="file" accept = "image/*" className = "mb-4" />
                </div>
            }
            
        </CardContent>
    </Card>
}

export default CourseSettings;