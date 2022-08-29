import { useStore } from "../store";

export function loadMF(url) {
  const script = document.createElement("script");
  script.setAttribute("type", "module");
  script.setAttribute("async", "");
  script.setAttribute("crossorigin", "");
  script.setAttribute("src", url);
  document.body.appendChild(script);
}
export const mfurls = {
  "wc-landing": import.meta.env.VITE_MF_LANDING,
};

export function init() {
  const loadWCs = () => {
    Object.keys(mfurls).forEach((key) => {
      // loadMF(`${mfurls[key]}/${wc-landing.js}`);
    });
  };

  document.addEventListener("DOMContentLoaded", loadWCs);
  window.addEventListener("resize", () => {
    const store = useStore();
    store.$patch({ screenWidht: window.screen.width });
  });
}
