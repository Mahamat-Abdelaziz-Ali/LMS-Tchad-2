import { Route, Routes} from "react-router-dom"
import {Button } from "./components/ui/button";
import <AuthPage> from "./components/pages/AuthPath"

function App() {
  return (
   <Routes>
    <Route path= "/auth" element={<AuthPath/>}/>
   </Routes>
  )
}

export default App