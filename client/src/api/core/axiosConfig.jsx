import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http:XXXXXXXX:8080",
  timeout: 2500,
  headers: {
    "Content-Type": "application/json",
  },
});
// [사용법] 아래와 같이 사용 -> 기본으로 위의 timeout 및 header 설정
// axiosInstance.get("http://localhost:3001");

// req를 인터셉터(interceptor) 하기
axiosInstance.interceptors.request.use(
  (config) => {
    /** config에는 위의 axiosInstance 객체를 이용하여 request를 보냈을떄의 모든 설정값들이 들어있다.
     * [활용]
     * 1. api요청의 경우 token이 필요한 경우가 있는데, 필요에 따른 토큰 정보들을 여기서 처리할 경우
     * 토큰에 대한 정보를 여러곳에서 처리하지 않아도 된다.
     * 2. 요청 method에 따른 외부로 드러내지 않고 처리하고 싶은 부분에 대한 작업이 가능
     */
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "access_token"
    )}`;
    return config;
  },
  (err) => {
    /** request 요청을 보낼때 error가 발생하는 경우 여기서 catch가 가능하다.
     */
    console.log(err);
    return Promise.reject(err);
  }
);
// res를 인터셉터(interceptor) 하기
axiosInstance.interceptors.response.use(
  (response) => {
    /** 요청을 보낸 뒤에 response(응답)이 오는 경우에 여기서 먼저 확인이 가능하다.
     * [활용]
     * 1. status-code가 정상적이어도 내용상의 이유로 에러처리가 필요한 경우
     * 2. 민감정보 또는 데이터에 대한 가공 작업
     */
    return response;
  },
  (err) => {
    /** response응답 후에 status-code가 4xx, 5xx 처럼 에러를 나타내는 경우 해당 루트를 수행한다.
     */
    const errMsg = "Error Message";
    if (err.response.status == 403) {
      refreshToken();
    }
    return Promise.reject({
      message: errMsg,
      ...err,
    });
  }
);

export default axiosInstance;

// //create an axios instance
// const request = axios.create({
//   // axios 인스턴스 생성
//   baseURL: "http://localhost:3001",
// });

// // 요청 타임아웃 설정
// request.defaults.timeout = 2500;

// // 요청 인터셉터 추가
// request.interceptors.request.use(
//   (config) => {
//     // 요청을 보내기 전에 수행할 로직
//     return config;
//   },
//   (err) => {
//     // 오류 요청을 보내기전 수행할 일(요청 에러가 발생했을 때 수행할 로직)
//     console.log(err); // 디버깅
//     return Promise.reject(err);
//   }
// );

// // 응답 인터셉터 추가
// axios.interceptors.response.use(
//   (response) => {
//     // 응답에 대한 로직 작성
//     const res = response.data;
//     return res;
//   },
//   (err) => {
//     // 응답 에러가 발생했을 때 수행할 로직
//     console.log(err); // 디버깅
//     return Promise.reject(err);
//   }
// );

// // 인터셉터 제거(eject)
// // const myInterceptor = axios.interceptors.request.use(function () { /*...*/ });
// // axios.interceptors.request.eject(myInterceptor);

// // axios 인스턴스에 인터셉터 추가
// // const instance = axios.create();
// // instance.interceptors.request.use(function () { /*...*/ });

// export default request; // axios 인스턴스를 내보낸다.
