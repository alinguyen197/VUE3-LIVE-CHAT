import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import ChatRoom from "../views/ChatRoom.vue";
import { projectAuth } from "@/firebase/config";

//auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  console.log("user login iss :", user);
  if (!user) {
    next({ name: "Welcome" });
  } else {
    next();
  }
};
const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next({ name: "ChatRoom" });
  } else {
    next();
  }
};
const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter: requireNoAuth,
  },
  {
    path: "/chat-room",
    name: "ChatRoom",
    component: ChatRoom,
    beforeEnter: requireAuth,
    // meta:{
    //   requireAuth: true
    // }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Neu truong hop co meta la truong hop cho do can kiem tra dang nhap
// router.beforeEach((to,from) => {
//   if(to.meta.requireAuth){
//     return { name : 'Welcome'}
//   }
// })

export default router;
