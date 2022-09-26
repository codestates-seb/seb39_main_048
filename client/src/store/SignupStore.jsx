import create from "zustand";

const useSignup = create((set) => ({
  userId: "",
  isId: false,
  password: "",
  isPassword: false,
  passwordCheck: "",
  passwordCheckMsg: "",
  isPasswordCheck: false,

  setUserId: (userId) => set(() => ({ userId })),
  setIsId: (isId) => set(() => ({ isId })),
  setPassword: (password) => set(() => ({ password })),
  setIsPassword: (isPassword) => set(() => ({ isPassword })),
  setPasswordCheck: (passwordCheck) => set(() => ({ passwordCheck })),
  setPasswordCheckMsg: (passwordCheckMsg) => set(() => ({ passwordCheckMsg })),
  setIsPasswordCheck: (isPasswordCheck) => set(() => ({ isPasswordCheck })),
}));

export default useSignup;
