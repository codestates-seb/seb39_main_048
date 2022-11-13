import create from "zustand";

const useLogin = create((set) => ({
  isLogin: false,
  userId: "",
  password: "",

  setIsLogin: (isLogin) => set(() => ({ isLogin })),
  setUserId: (userId) => set(() => ({ userId })),
  setPassword: (password) => set(() => ({ password })),
}));

export default useLogin;
