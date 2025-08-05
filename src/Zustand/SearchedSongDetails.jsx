import { create } from "zustand";
const songDetails = create((set) => {
  return {
    songThumbnail: [],
    songTitle: [],
    songVideoIds: [],
    setSongThumbnail: (image) => {
      try {
        set({ songThumbnail: image });
      } catch (err) {
        console.log(err);
      }
    },
    setSongVideosIds: (videoId) => {
      try {
        set({ songVideoIds: videoId });
        console.log(videoId);
      } catch (err) {
        console.log(err);
      }
    },
    setSongTitle: (title) => {
      try {
        set({ songTitle: title });
      } catch (err) {
        console.log(err);
      }
    },
  };
});
export default songDetails;
