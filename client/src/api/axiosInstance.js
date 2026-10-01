import axios from "axios";



const axiosInstance = axios.create({
    baseURl :'http://localhost:5173'
});

axiosInstance.interceptors.request.use(config=>{
    const accessToken =JSON.parse(sessionStorage.getItem("accessToken")) || "";
    if(accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
}, (error)=> Promise.reject(error));

export default axiosInstance;