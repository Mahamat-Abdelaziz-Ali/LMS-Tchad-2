import { initialSignUpFormData } from "@/config";
import { createContext, useState } from "react";


export const AuthContext = createContext(null);


export default function AuthProvider({children}){
    const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
    const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);

    return<AuthContext.provider value={{
        signInFormData, setSignInFormData,
        signUpFormData, setSignUpFormData
    }}></AuthContext.provider>
}