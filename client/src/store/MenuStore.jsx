import create from "zustand";

const useMenu = create((set) => ({
  menu: "내가 등록한 장소",
  setMenu: (menu) => set(() => ({ menu })),
}));

export default useMenu;
