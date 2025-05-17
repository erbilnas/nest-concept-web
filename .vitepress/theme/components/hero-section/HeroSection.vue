<script setup lang="ts">
import { ref } from "vue";
import HeroSectionNavigation from "./HeroSectionNavigation.vue";
import HeroSectionSlides from "./HeroSectionSlides.vue";

const images = [
  "/banner/banner-01.png",
  "/banner/banner-02.jpeg",
  "/banner/banner-03.jpeg",
];

const current = ref(0);

function goTo(index: number) {
  current.value = index;
}
</script>

<template>
  <div class="slider">
    <HeroSectionSlides :images="images" :current="current" />

    <HeroSectionNavigation :images="images" :current="current" @go-to="goTo" />
  </div>
</template>

<style lang="css" scoped>
.slider {
  position: relative;
  height: 55vh;
  width: 100%;
}
</style>
