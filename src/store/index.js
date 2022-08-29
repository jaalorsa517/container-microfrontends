import { defineStore } from "pinia";

export const useStore = defineStore("general", {
  state: () => ({
    userSelected: null,
    screenWidht: window.screen.width,
  }),
  getters: {
    isMobile: (state) => state.screenWidht < 768,
  },
});
