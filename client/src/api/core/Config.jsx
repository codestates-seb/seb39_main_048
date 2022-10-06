import axios from "axios";

const instance = axios.create({
  header: { "Content-Type": "multipart/form-data" },
})

export default instance;
