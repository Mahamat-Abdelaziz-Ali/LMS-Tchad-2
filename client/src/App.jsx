import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/auth/index.jsx"
import RouterGuard from "./components/route-guard/index.jsx"
import InstructorDashboard from "./pages/auth/instructor/index.jsx"
import StudentViewCommonLayout from "./components/student-view/common-layout.jsx"
import AddNewCoursePage from "./pages/auth/instructor/add-new-course.jsx"
import StudentCoursesPage from "./pages/auth/student/student-courses/index.jsx"
import StudentViewCourseProgressPage from "./pages/auth/student/course-progress/index.jsx"
import StudentHomePage from "./pages/auth/student/home/index.jsx";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context";
import StudentViewCoursesPage from "./pages/auth/student/courses/index.jsx"
import StudentViewCourseDetailsPage from "./pages/auth/student/course-details/index.jsx";
import PaypalPaymentReturnPage from "./pages/auth/student/payment-return/index.jsx";
import NotFoundPage from "./pages/auth/not-found/index.jsx";


function App() {
  const { auth } = useContext(AuthContext);
  return (
   <Routes>
    <Route path= "/auth" 
    element={<RouterGuard 
    element={ <AuthPage />}/>}
    authenticated = {auth?.authenticate}
    user={auth?.user}
     />
     <Route
     path="/instructor/create-new-course"
     element={
      <RouterGuard
      element={
        <AddNewCoursePage/>
      }
      authenticated={auth?.authenticate}
      user={auth?.user}
      />}
      />
      <Route
     path="/instructor/edit-course/:courseId"
     element={
      <RouterGuard
      element={
        <AddNewCoursePage/>
      }
      authenticated={auth?.authenticate}
      user={auth?.user}
      />}
      />
     
     <Route path = "/"
     element={
      <RouterGuard
      element={
        <StudentViewCommonLayout/>
      }
      authenticated={auth?.authenticate}
      user={auth?.user}
      />}
     >
       
      <Route path="/" element={<StudentHomePage/>}/>
      <Route 
      path="home" element={
        <StudentHomePage/>
      }
       />
       <Route 
      path="courses" element={
        <StudentViewCoursesPage/>}
       />
       
       <Route path="course/details/:id" element={<StudentViewCourseDetailsPage/>}
       />
       <Route 
      path="payment-return" element={
        <PaypalPaymentReturnPage/>}
       />
       <Route 
      path="student-courses" element={
        <StudentCoursesPage/>}
       />
       <Route 
      path="course-progress/:id" element={
        <StudentViewCourseProgressPage/>}
       />
       </Route>

        <Route path="*" element={ <NotFoundPage/>}></Route>
   </Routes>
  )
}

export default App;