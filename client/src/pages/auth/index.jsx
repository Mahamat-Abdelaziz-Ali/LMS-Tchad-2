import {initialSignInFormData, initialSignUpFormData } from "@/components"
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [signInFormData, setSignInFormData] = useState(initialSignInFormData)

    const []
}


function AuthPage() {
const [activeTab, setActiveTab]= useState('signin')

function handleTabChange(value){
    setActiveTab(value)
}

  return (
    <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <link to= {'/'} className="flex items-center justify-center">
        <GraduationCap className="h-8 w-8 mr-4"/>
        <span className="font-extrabold text-xl">LMS LEARN</span>
        </link>
        </header>
        <div className="flex items-center justify-center min-h-screen bg-background">
            <Tabs value={activeTab} defaultValue="signin" onValueChange= {handleTabChange} className="w-full max-w-md">
                <TabList></TabList>
            </Tabs>
        </div>
    </div>
  )
}

export default AuthPage