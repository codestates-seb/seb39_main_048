import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",

  // timeout: 3000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
axiosInstance.interceptors.request.use(
  (config) => {
    const Token = localStorage.getItem("access_Token");
    config.headers["Authorization"] = `Bearer ${Token}`;
    console.log("토큰", Token);
    console.log(config)

    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use((response) => {
  localStorage.setItem("access_Token", response.headers["authorization"].split(' ')[1]);
  console.log("response", response.headers["authorization"].split(' ')[1]);
  return response;
});




export default axiosInstance

