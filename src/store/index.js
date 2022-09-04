import { defineStore } from "pinia";

export const useStore = defineStore("general", {
  state: () => ({
    userSelected: null,
    screenWidht: window.screen.width,
    isLoadingWC: false,
    hasAlert: false,
    alert: {
      title: "Esto es un título de prueba",
      msg: "Los datos de los usuarios son el nombre y el apellido",
    },
  }),
  getters: {
    isMobile: (state) => state.screenWidht < 768,
  },
  actions: {
    openAlert(title, msg) {
      this.hasAlert = true;
      this.alert = { title, msg };
      document.body.style.overflow = "hidden";
    },
    closeAlert() {
      this.hasAlert = false;
      this.alert = {
        title: "",
        msg: "",
      };
      document.body.style.overflow = "auto";
    },
  },
});
