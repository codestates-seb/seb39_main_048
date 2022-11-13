import create from "zustand";

const usePost = create((set) => ({
  placeName : "",
  category : "",
  sizeTags: [],
  isOnlyTags: [],
  locationTags: [],
  tags: [],
  keyWord: [],
  placeImage : "",
  serviceTime : "",
  homepage : "",
  number : "",
  address : "",
  description : "",


  setPlaceName: (placeName) => set(() => ({ placeName })),
  setCategory: (category) => set(() => ({ category })),
  setSizeTags: (sizeTags) => set(() => ({ sizeTags })),
  setIsOnlyTags: (isOnlyTags) => set(() => ({ isOnlyTags })),
  setLocationTags: (locationTags) => set(() => ({ locationTags })),
  setTags: (tags) => set(() => ({ tags })),
  setKeyWord: (keyWord) => set(() => ({ keyWord })),
  setPlaceImage: (placeImage) => set(() => ({ placeImage })),
  setServiceTime: (serviceTime) => set(() => ({ serviceTime })),
  setHomepage: (homepage) => set(() => ({ homepage })),
  setNumber: (number) => set(() => ({ number })),
  setAddress: (address) => set(() => ({ address })),
  setDescription: (description) => set(() => ({ description })),
  
}));

export default usePost;