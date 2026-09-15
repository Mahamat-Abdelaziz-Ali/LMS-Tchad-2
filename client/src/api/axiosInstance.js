import axios from "axios";



const axiosInstance = axios.create({
    baseUrl :'http://localhost:5173'
});

axiosIntance.interceptors.request.use(config=>{
    const accessToken =JSON.parse(sessionStorage.getItem("accessToken")) || "";
    if(accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
}, (error)=> promise.reject(error));

export default axiosInstance;