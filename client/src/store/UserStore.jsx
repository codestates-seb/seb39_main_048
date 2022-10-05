import create from "zustand";

const useUser = create((set) => ({
  userName: "",
  userImg: "",
  setUserName: (userName) => set(() => ({ userName })),
  setUserImg: (userImg) => set(() => ({ userImg })),
}));

export default useUser;
