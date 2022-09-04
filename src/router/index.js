import {createRouter,createWebHistory} from "vue-router"
import routes from "./routes"

const _router = createRouter({
  history: createWebHistory(),
  routes,
});

export const  router= _router