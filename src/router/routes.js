import Home from "../views/Home.vue";
import Alert from "../views/Alert.vue";
import Animals from "../views/Animals.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/alert",
    name: "Alert",
    component: Alert,
  },
  {
    path: "/animals",
    name: "Animals",
    component: Animals,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];
