<template>
  <router-link to="/">home</router-link>/<router-link to="/posts-page"
    >posts</router-link
  >/<router-link :to="`/posts-page/post${route.params.id}`"
    >post #{{ route.params.id }}</router-link
  >
  <div>
    <h2>{{ post?.title }}</h2>
    <p>{{ post?.body }}</p>
    <div class="author-wrapper">
      <ul class="author-info">
        <li>{{ author?.name }}</li>
        <li>
          <a :href="'mailto:' + author?.email">{{ author?.email }}</a>
        </li>
        <li>{{ author?.phone }}</li>
        <li>
          <a :href="author?.website">{{ author?.website }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Post } from "@/types/Post.type";
import { useRoute } from "vue-router";
import { getData } from "../api/getData";
import type { Author } from "@/types/Author.type";

const post = ref<Post | null>(null);
const route = useRoute();
const author = ref<Author | null>(null);

onMounted(async () => {
  const id = Number(route.params.id);
  const postResponse = await getData("posts", id);
  post.value = postResponse;
  const authorResponse = await getData("users", postResponse.userId);
  author.value = authorResponse;
});
</script>

<style lang="scss" scoped>
.author-wrapper {
  max-width: 500px;
  margin-left: auto;

  .author-info {
    list-style: none;
    text-align: end;
  }
}
</style>
