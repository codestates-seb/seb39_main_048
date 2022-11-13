import axiosInstance from "./core/axiosConfig";

// get 요청
const getUser = (userId) => {
  return axiosInstance({ url: `/user/${userId}`, method: "get" });
};

// post 요청
const postUser = () => {
  axiosInstance({
    method: "post",
    url: "/user/12345",
    data: {
      id: userId,
      password: password,
    },
  });
};

export default { getUser, postUser };
