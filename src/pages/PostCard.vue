<template>
  <router-link
    class="post-wrapper"
    :to="`posts-page/post${props.id}`"
    @contextmenu.prevent="handleRightClick"
  >
    <div>
      <h3>{{ props.title }}</h3>
      <p>{{ props.body }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  body: String,
  id: Number,
});
const emit = defineEmits();

const handleRightClick = (): void => {
  emit("right-click", props.id);
};
</script>

<style lang="scss" scoped>
.post-wrapper {
  max-width: 300px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  filter: drop-shadow(2px 2px 5px #eaeaea);
}
</style>
