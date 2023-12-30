<template>
  <p>
    <router-link to="/">home</router-link>/<router-link to="/posts-page"
      >posts</router-link
    >
  </p>
  <h2>Posts Page</h2>
  <div class="posts">
    <post-card
      v-for="post in posts"
      :key="post.id"
      :body="post.body"
      :title="post.title"
      :id="post.id"
      @right-click="deletePost"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getData } from "../api/getData";
import { Post } from "../types/Post.type";
import PostCard from "./PostCard.vue";

const posts = ref<Post[]>([]);

onMounted(async () => {
  try {
    const response = await getData("posts");

    if (response) {
      posts.value.push(...response);
    } else {
      console.error("Invalid response structure");
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
});

const deletePost = (postId: number) => {
  const index = posts.value.findIndex((post) => post.id === postId);
  if (index !== -1) {
    // Remove the post from the array
    posts.value.splice(index, 1);
  }
};
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  a {
    color: black;
  }
}
</style>
../api/getData
