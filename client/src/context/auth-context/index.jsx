import axiosInstance from "@/apio/axiosInstance";
import { Skeleton } from "@/components/ui/skeleton";
import {
    initialSignInFormData,
    initialSignUpFormData } from "@/config";
import { createContext, useState, useEffect } from "react";


export const AuthContext = createContext(null);


export default function AuthProvider({children}){
    const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
    const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
    const [auth, setAuth] = useState({
        authenticate : false,
        user : null,
    });

    const [loading, setLoading] = useState(true)

    async function handleRegisterUser(event){
        event.preventDefault();
        const data = await registerService(signUpFormData);

if(data.success) {
    console.log(data, "data");
    sessionStorage.setItem("accessToken",JSON.stringify(data.dataaccessToken))
    setAuth({
        authenticate : true,
        user : data.data.user,
    })
}
      console.log(data);
}
  
    

    async function handleLoginUser(event){
        event.preventDefault();
        const data = await loginService(signInFormData);

        if(data.success) {
    console.log(data, "data");
    sessionStorage.setItem("accessToken",json.stringify(data.data.accessToken))
    setAuth({
        authenticate : true,
        user : data.data.user,
    })
} else {
    setAuth({
        authenticate : false,
        user : null,
    })
}
}

    //check auth user

    async function checkAuthUser() {
        try{
            const data = await checkAuthService();

        if(data.success) {
           setAuth({
        authenticate : true,
        user : data.data.user,
    })
    setLoading(false)
}
         else {
            setAuth({
        authenticate : false,
        user : null,
    });
    setLoading(false)
        }
        } catch (error) {
            console.log(error);
            if(error?.response?.data?.success) {
                setAuth({
                    authenticate : false,
                    user : null,
                });
                setLoading(false);
            }
        }
        const data = await checkAuthService();

        if(data.success) {
           setAuth({
        authenticate : true,
        user : data.data.user,
    })
    setLoading(false)
}
         else {
            setAuth({
        authenticate : false,
        user : null,
    });
    setLoading(false)
        }
    }

    function resetCredentials(){
        setAuth({
            authenticate: false,
            user: null
        })
    }

    useEffect(()=>{
        checkAuthService();
    }, []);

    

    return (<AuthContext.Provider value={{
        signInFormData, 
        setSignInFormData,
        signUpFormData, 
        setSignUpFormData,
        handleRegisterUser,
        handleLoginUser,
        auth,
        resetCredentials,
    }}>
        {
            loading ? <Skeleton/> : children
        }
    </AuthContext.Provider>
    )
}