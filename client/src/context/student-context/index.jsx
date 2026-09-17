import { Feather } from "lucide-react";
import { createContext, useState } from "react";



export const StudentContext = createContext(null);

export default function StudentProvider({children}){
    const [studentCoursesList, setStudentsCoursesList] = useState([]);

    return <StudentContext.Provider value={{studentCoursesList, setStudentsCoursesList}}>{children}</StudentContext.Provider>
}
