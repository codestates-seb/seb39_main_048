import create from "zustand";

const useFilters = create((set) => ({
  selectCategory: "전체",
  searchData: [],
  text: "",
  filterData: [],
  nameData: [],
  setSelectCategory: (selectCategory) => set(() => ({ selectCategory })),
  setSearchData: (searchData) => set(() => ({ searchData })),
  setText: (text) => set(() => ({ text })),
  setFilterData: (filterData) => set(() => ({ filterData })),
  setNameData: (nameData) => set(() => ({ nameData })),
}));

export default useFilters;
