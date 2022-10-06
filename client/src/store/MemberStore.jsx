import create from "zustand";

const useMamber = create((set) => ({
  user : "",
  setUser: (user) => set(() => ({ user })),
}));

export default useMamber;
