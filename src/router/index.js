import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/home";
import Login from "../components/Login";
import Board from "../components/board";
import Card from "../components/card";
import NotFound from "../components/not-found";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    {
      path: "/b/:bid",
      component: Board,
      children: [{ path: "c/:cid", component: Card }]
    },
    { path: "*", component: NotFound }
  ]
});

export default router;
