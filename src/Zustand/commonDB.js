import { create } from "zustand";

const CommonDB = create((set) => ({
  data: [],
  setData: (result) => set({ data: result }),
}));

export default CommonDB;
