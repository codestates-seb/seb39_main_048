import create from "zustand";

const useLogin = create((set) => ({
  userId: "",
  password: "",

  setUserId: (userId) => set(() => ({ userId })),
  setPassword: (password) => set(() => ({ password })),
}));

export default useLogin;
