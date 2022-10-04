import Home from "../views/Home.vue";
import Angular from "../views/Angular.vue";
import Vanilla from "../views/Vanilla.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/angular",
    name: "Angular",
    component: Angular,
  },
  {
    path: "/vanilla",
    name: "Vanilla",
    component: Vanilla,
  },
];
