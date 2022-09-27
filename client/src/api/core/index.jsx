import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

instance.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전 수행할 작업
    return config;
  },
  function (error) {
    // 오류 요청 가공
    return Promise.reject(error);
  }
);

instanceÇ.interceptors.response.use(
  function (response) {
    // 200대 response를 받아 응답 데이터를 가공하는 작업
    return response;
  },
  function (error) {
    // 200대 이외의 오류 응답을 가공
    return Promise.reject(error);
  }
);