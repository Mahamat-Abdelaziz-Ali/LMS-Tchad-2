import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/auth/index.jsx"
import RouterGuard from "./components/route-guard/index.jsx"
import InstructorDashboard from "./pages/auth/instructor/index.jsx"
import StudentViewCommonLayout from "./components/student-view/common-layout.jsx"

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
     path="/instructor"
     element={
      <RouterGuard
      elament={
        <InstructorDashboardpage/>
      }
      authenticated={auth?.authenticated}
      user={auth?.user}
      />

     }
     <Routes path = "/"
     element={
      <RouteGuard
      element={
        <StudentViewCommonLayout/>
      }
      authenticated={auth?.authenticated}
      user={auth?.user}
      />
     }
       >
      <Route path="" element={<StudentHomePage/>}/>
      <Route 
      path="home" element={
        <StudentHomePage/>
      }
       />
       </Routes>

        <Route path="*" element={ <NotFoundPage/>}></Route>
   </Routes>
  )
}

export default App