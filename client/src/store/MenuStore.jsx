import create from "zustand";

const useMenu = create((set) => ({
  menu: "마이페이지",
  setMenu: (menu) => set(() => ({ menu })),
}));

export default useMenu;
