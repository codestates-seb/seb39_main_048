import create from "zustand";

const usePaging = create((set) => ({
  pageInfo: 1,
  setPageInfo: (pageInfo) => set(() => ({ pageInfo })),
}));

export default usePaging;
