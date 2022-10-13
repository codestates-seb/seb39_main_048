import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",

  timeout: 2500,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});




export default instance

