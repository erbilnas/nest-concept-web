<script setup lang="ts">
defineProps<{
  images: string[];
  current: number;
}>();
</script>

<template>
  <div class="slider-images">
    <img
      v-for="(img, idx) in images"
      :key="img"
      :src="img"
      :alt="`Nest Concept - Hero banner image ${idx + 1} showcasing our modern business solutions`"
      class="image"
      :class="{ active: idx === current }"
      loading="lazy"
    />
  </div>
</template>

<style lang="css" scoped>
.slider-images {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 1;
  }

  .image.active {
    opacity: 1;
    z-index: 2;
  }
}
</style>
