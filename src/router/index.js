import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Home from "../views/Home.vue";
import Review from "../views/Review.vue";
import Post from "../views/Post.vue";
import User_review from "../views/User_review.vue";
import Edit from "../views/Edit.vue";
import Empty from "../views/Empty.vue";
import Posted from "../views/Posted.vue";
import MasterLogin from "../views/MasterLogin.vue";
import Movie_post from "../views/Movie_post.vue";
import Master_main from "../views/Master_main.vue";
import Logout from "../views/Logout.vue";
import Signup_completed from "../views/signup_completed.vue"
import Movie_edit from "../views/Movie_edit.vue"
// import store from "../store/index";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { title: "映画レビューサイト", desc: "映画のレビューサイトです" },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/review/:id",
    name: "review",
    component: Review,
    props: true,
  },
  {
    path: "/post/:id",
    name: "post",
    component: Post,
    props: true,
  },
  {
    path: "/user_review/:id",
    name: "user_review",
    component: User_review,
    props: true,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: Edit,
    props: true,
  },
  {
    path: "/posted/:id",
    name: "posted",
    component: Posted,
    props: true,
  },
  {
    path: "/empty",
    name: "empty",
    component: Empty,
  },
  {
    path: "/master_login",
    name: "MasterLogin",
    component: MasterLogin,
  },
  {
    path: "/master_main",
    name: "master_main",
    component: Master_main,
  },
  {
    path: "/movie_post",
    name: "movie_post",
    component: Movie_post,
  },
  {
    path: "/movie_edit/:id",
    name: "movie_edit",
    component: Movie_edit,
    props:true
  },
  {
    path: "/logout",
    name:"logout",
    component:Logout,
  },
  {
    path: "/signup_completed",
    name: "signup_completed",
    component:Signup_completed,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
