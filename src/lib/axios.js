import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:5000/api' ,
    baseURL: 'https://s-media-backend-yha2.onrender.com/api' ,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    }
})

export default axiosInstance