import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http:XXXXXXXX:8080",
  timeout: 2500,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});
// [사용법] 아래와 같이 사용 -> 기본으로 위의 timeout 및 header 설정
// axiosInstance.get("http://localhost:3001");

// req를 인터셉터(interceptor) 하기
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "access_token"
    )}`;
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

// res를 인터셉터(interceptor) 하기
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    const {
      config,
      response: { status },
    } = err;
    if (status === 401) {
      if (err.response.data.code === "expired") {
        const originalRequest = config;
        const refresh_Token = await localStorage.getItem("refresh_Token");
        // token refresh 요청
        const { data } = await axios.post(
          `${config.API_URL}/refreshToken`, // token refresh api
          {},
          { headers: { authorization: `Bearer ${refresh_Token}` } }
        );
        // 새로운 토큰 저장
        dispatch(userSlice.actions.setAccess_Token(data.data.access_Token));
        originalRequest.headers.authorization = `Bearer ${data.data.access_Token}`;
        // 401로 요청 실패했던 요청 새로운 토큰으로 재요청
        return axios(originalRequest);
      }
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;

// // 인터셉터 제거(eject)
// // const myInterceptor = axios.interceptors.request.use(function () { /*...*/ });
// // axios.interceptors.request.eject(myInterceptor);

// // axios 인스턴스에 인터셉터 추가
// // const instance = axios.create();
// // instance.interceptors.request.use(function () { /*...*/ });

// localStorage.removeItem("key"); 로그아웃 시
