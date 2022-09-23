import create from "zustand";

const useMenu = create((set) => ({


  menu: "마이페이지",
  searchData : "",
  text: "",
  setMenu : (menu) => set(() => ({menu})),
  setSearchData : (searchData) => set(() => ({searchData})),
  setText : (text) => set(() => ({text}))

}));

export default useMenu
