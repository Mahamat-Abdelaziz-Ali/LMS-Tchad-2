import { title } from "process";

export const signUpFormControls = [
    {
        name : 'userName',
        label : 'User Name',
        placeholder : 'Enter your user name',
        type : 'text',
        componentType : 'input',
    
    },
    {
        name : 'UserEmail',
        label : 'User Email',
        placeholder : 'Enter your user email',
        type : 'email',
        componentType : 'input',
    },
    {
        name : 'password',
        label : 'password',
        placeholder : 'Enter your user password',
        type : 'password',
        componentType : 'input',
    }
]

export const signInFormControls = [
    {
        name : 'userEmail',
        label : 'User Email',
        placeholder : 'Enter your user email',
        type : 'email',
        componentType : 'input',
    },
    {
        name : 'password',
        label : 'password',
        placeholder : 'Enter your user password',
        type : 'password',
        componentType : 'input',
    },
]

export  const initialSignInFormData = {
    userEmail: "",
    password: "",
}

export const initialSignUpFormData = {
    userName: "",
    userEmail: "",
    password: "",
};









export const courseLandingInitialFormData = {
    title: "",
    category: "",
    level: "",
    primaryLanguage: "",
    subtitle: "",
    description: "",
    pricing: "",
    objectives: "",
    welcomeMessage: "",
    image : "", 
};



export const courseCurriculumInitialFormData = [
    {
        title : '',
        videoUrl :'',
        freePreview : false,
        public_Id : ''
    },
    {
        title : '',
        videoUrl :'',
        freePreview : false,
        public_Id : ''
    },
    {
        title : '',
        videoUrl :'',
        freePreview : true,
        public_Id : ''
    }
]
