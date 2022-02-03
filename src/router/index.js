import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/home";
import Login from "../components/Login";
import NotFound from "../components/not-found";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "*", component: NotFound }
  ]
});

export default router;
