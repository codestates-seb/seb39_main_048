import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://175.121.124.2:8080",

  timeout: 2500,
  withCredentials: false, // 쿠키를 사용하지 않기 때문에 false
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

// req를 인터셉터(interceptor) 하기
axiosInstance.interceptors.request.use(
  (config) => {
    // 토큰 확인
    const Token = localStorage.getItem("accessToken"); // 로컬 스토리지에서 access_token 조회
    config.headers.Authorization = `Bearer ${Token}`; // 조회된 access_token을 헤더에 삽입
    console.log("토", Token);
    console.log("config", config.headers.Authorization);
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

// res를 인터셉터(interceptor) 하기
axiosInstance.interceptors.response.use((response) => {
  localStorage.setItem(
    "access_Token",
    response.headers.authorization.split(" ")[1]
  );
  console.log("response", response.headers.authorization.split(" ")[1]);
  return response;
});

export default axiosInstance;

// // 인터셉터 제거(eject)
// // const myInterceptor = axios.interceptors.request.use(function () { /*...*/ });
// // axios.interceptors.request.eject(myInterceptor);

// // axios 인스턴스에 인터셉터 추가
// // const instance = axios.create();
// // instance.interceptors.request.use(function () { /*...*/ });

// localStorage.removeItem("key"); 로그아웃 시

const token = localStorage.getItem("token");
