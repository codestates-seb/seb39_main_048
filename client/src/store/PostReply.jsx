import create from "zustand";

const usePostReview = create((set) => ({
  replyId: "",
  context: "",
  score: "",
  placeId: "",
  replyLength: 0,

  setReplyId: (replyId) => set(() => ({ replyId })),
  setContext: (context) => set(() => ({ context })),
  setScore: (score) => set(() => ({ score })),
  setPlaceId: (placeId) => set(() => ({ placeId })),
  setReplyLength: (replyLength) => set(() => ({ replyLength })),
}));

export default usePostReview;
