import create from "zustand";

const useFilters = create((set) => ({
  searchData: "",
  text: "",
  filterData: [],
  setSearchData: (searchData) => set(() => ({ searchData })),
  setText: (text) => set(() => ({ text })),
  setFilterData: (filterData) => set(() => ({ filterData })),
}));

export default useFilters;
