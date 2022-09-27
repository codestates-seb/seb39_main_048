import request from "./core";

// get 요청
const getUserInfo = (aUserId) => {
  return request({ url: `/getUserInfo/${aUserId}` });
};

// post 요청
const saveUserInfo = () => {
  request({
    method: "post",
    url: "/user/12345",
    data: {
      id: userId,
      password: password,
    },
  });
};

export default { getUserInfo, saveUserInfo };
