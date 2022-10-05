import create from "zustand";

const usePostReview = create((set) => ({
  replyId: "",
  context: "",
  score: "",
  placeId: "",

  setReplyId: (replyId) => set(() => ({ replyId })),
  setContext: (context) => set(() => ({ context })),
  setScore: (score) => set(() => ({ score })),
  setPlaceId: (placeId) => set(() => ({ placeId })),
}));

export default usePostReview;
