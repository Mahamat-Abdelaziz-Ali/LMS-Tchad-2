import axios from "axios";



const axiosInstance = axios.create({
    baseUrl :'http://localhost:5000'
});


export default axiosInstance