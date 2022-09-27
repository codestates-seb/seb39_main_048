import axios from "axios";

//create an axios instance
const request = axios.create({
  // axios 인스턴스 생성
  baseURL: "http://localhost:3001",
});

// 요청 타임아웃 설정
request.defaults.timeout = 2500;

// 요청 인터셉터 추가
request.interceptors.request.use(
  (config) => {
    // 요청을 보내기 전에 수행할 로직
    return config;
  },
  (err) => {
    // 오류 요청을 보내기전 수행할 일(요청 에러가 발생했을 때 수행할 로직)
    console.log(err); // 디버깅
    return Promise.reject(err);
  }
);

// 응답 인터셉터 추가
axios.interceptors.response.use(
  (response) => {
    // 응답에 대한 로직 작성
    const res = response.data;
    return res;
  },
  (err) => {
    // 응답 에러가 발생했을 때 수행할 로직
    console.log(err); // 디버깅
    return Promise.reject(err);
  }
);

// 인터셉터 제거(eject)
// const myInterceptor = axios.interceptors.request.use(function () { /*...*/ });
// axios.interceptors.request.eject(myInterceptor);

// axios 인스턴스에 인터셉터 추가
// const instance = axios.create();
// instance.interceptors.request.use(function () { /*...*/ });

export default request; // axios 인스턴스를 내보낸다.
