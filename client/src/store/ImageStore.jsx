import create from "zustand";

const useImage = create((set) => ({
  file : "",
  setFile: (file) => set(() => ({ file })),
}));

export default useImage;