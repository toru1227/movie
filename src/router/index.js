import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Home from "../views/Home.vue";
import Review from "../views/Review.vue";
import Post from "../views/Post.vue";
import User_review from "../views/User_review.vue";
import Edit from "../views/Edit.vue";
// import store from "../store/index";
Vue.use(VueRouter)

const routes = [
  {
path: '/',
name: "home",
component:Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component:Signup
  },
  {
    path: "/review/:id",
    name: 'review',
    component: Review,
    props: true,
  },
  {
    path: "/post/:id",
    name: "post",
    component: Post,
    props:true
  },
  {
    path: "/user_review/:id",
    name: "user_review",
    component: User_review,
    props: true
  },
  {
    path: "/edit/id:",
    name: "edit",
    component: Edit,
    props:true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
