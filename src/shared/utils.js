import { useStore } from "../store";
import { router } from "../router";
import { mfurls } from "./constantes/microfront_url.constantes";

export function loadMF(url) {
  const script = document.createElement("script");
  script.setAttribute("type", "module");
  script.setAttribute("async", "");
  script.setAttribute("crossorigin", "");
  script.setAttribute("src", url);
  script.addEventListener("load", () => {
    const store = useStore();
    if (store.isLoadingWC) store.$patch({ isLoadingWC: false });
  });
  document.body.appendChild(script);
}

export function init() {
  const loadWCs = () => {
    const routeActive = router.currentRoute.value.name;
    const index = mfurls.findIndex((item) => item.routeName === routeActive);
    const routeActiveMF = mfurls.splice(index, 1);
    mfurls.unshift(...routeActiveMF);
    const store = useStore();
    store.$patch({ isLoadingWC: true });
    mfurls.forEach((wc) => {
      loadMF(`${wc.url}/${wc.name}.js`);
    });
  };

  document.addEventListener("DOMContentLoaded", loadWCs);
  window.addEventListener("resize", () => {
    const store = useStore();
    store.$patch({ screenWidht: window.screen.width });
  });
}
