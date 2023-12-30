import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import PostsPage from "@/pages/PostsPage.vue";
import PostPage from "@/pages/PostPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/posts-page", component: PostsPage },
    { path: "/posts-page/post:id", component: PostPage },
  ],
});

export default router;
