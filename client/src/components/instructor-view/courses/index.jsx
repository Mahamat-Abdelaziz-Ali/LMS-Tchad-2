import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
//import { InstructorContext } from "@/context/instructor-context";
//import { useContext } from "react";

function InstructorCourses(listOfCourses) {

    const navigate = useNavigate();

    //const{currentEditedCourseId, setCurrentEditedCourseId} = useContext(InstructorContext);



    return (
        <Card>
            <CardHeader className="flex justify-between flex-row items-center">
                <CardTitle className="text-3xl font-extrabold">All Courses</CardTitle>
                <Button onClick={()=> navigate('/instructor/create-new-course')} className="p-6">Create New Course</Button>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <Table>
                        <TableCaption>A list of </TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Course</TableHead>
                                <TableHead>Students</TableHead>
                                <TableHead>Revenue</TableHead>
                                <TableHead className = "font-medium">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                listOfCourses && listOfCourses.length > 0 ?
                                listOfCourses.map(course=>
                                    <TableRow>
                                <TableCell className = "font-medium">{course?.title}</TableCell>
                                <TableCell>{course?.students?.length}</TableCell>
                                <TableCell>${course?.pricing}</TableCell>
                                <TableCell className = "text-right">
                                  <Button onClick={()=>{
                                        //setCurrentEditedCourseId(course?._id);
                                        navigate(`/instructor/edit-course/${course?._id}`)}
                                  }
                                     variant="ghost" size="sm">
                                        <Edit className = "h-6 w-6"/>
                                    </Button>
                                    <Button variant="ghost" size="sm">                // className="mr-2" 
                                        <Delete className = "h-6 w-6"/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                                ) : null
                            }
                            
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    )
}

export default InstructorCourses;             //add table
