import create from "zustand";

const useMypag = create((set) => ({
  menu: "마이페이지",
  setMenu : (menu) => set(() => ({menu : menu})),
}));

export default useMypag
