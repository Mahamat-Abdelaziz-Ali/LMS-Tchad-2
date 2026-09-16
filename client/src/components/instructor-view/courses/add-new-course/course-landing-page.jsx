import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courseLandingPageFormControls } from "@/config";
import FormControls from "@/components/common-form/form-controls";
import { InstructorContext } from "@/context/instructor-context";

function Courselanding(){
    const {courseLandingFormControls, setCourseLandingFormData}= useContext(InstructorContext);

    return <Card>
        <CardHeader>
            <CardTitle></CardTitle>
        </CardHeader>
        <CardContent>
            <FormControls 
            formControls ={courseLandingPageFormControls}
            formData = {courseLandingFormData}
            setFormData = {setCourseLandingFormData}
            />
        </CardContent>
    </Card>
}


export default Courselanding;