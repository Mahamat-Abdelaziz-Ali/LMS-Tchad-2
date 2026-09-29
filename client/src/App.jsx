import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/auth/index.jsx"
import RouterGuard from "./components/route-guard/index.jsx"
import InstructorDashboard from "./pages/auth/instructor/index.jsx"
import StudentViewCommonLayout from "./components/student-view/common-layout.jsx"
import AddNewCoursePage from "./pages/auth/instructor/add-new-course.jsx"
import StudentCoursesPage from "./pages/auth/student/student-courses/index.jsx"
import StudentViewCourseProgressPage from "./pages/auth/student/course-progress/index.jsx"

function App() {
  return (
   <Routes>
    <Route path= "/auth" 
    element={<RouteGard />}
    element={ <AuthPage />}
    authenticated = {auth?.authenticated}
    user={auth?.user}
     />
     <Route
     path="/instructor/create-new-course"
     element={
      <RouterGuard
      elament={
        <AddNewCoursePage/>
      }
      authenticated={auth?.authenticated}
      user={auth?.user}
      />}
      />
      <Route
     path="/instructor/edit-course/:courseId"
     element={
      <RouterGuard
      elament={
        <AddNewCoursePage/>
      }
      authenticated={auth?.authenticated}
      user={auth?.user}
      />}
      />
     
     <Routes path = "/"
     element={
      <RouteGuard
      element={
        <StudentViewCommonLayout/>
      }
      authenticated={auth?.authenticated}
      user={auth?.user}
      />}
     >
       
      <Route path="" element={<StudentHomePage/>}/><></>
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
       </Routes>

        <Route path="*" element={ <NotFoundPage/>}></Route>
   </Routes>
  )
}

export default App