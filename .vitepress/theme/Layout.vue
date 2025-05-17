<script setup lang="ts">
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import Motto from "./components/Motto.vue";
</script>

<template>
  <div>
    <transition name="fade-slide-up" appear>
      <Header />
    </transition>

    <transition name="fade-slide-up" appear>
      <HeroSection />
    </transition>

    <transition name="fade-slide-up" appear>
      <Motto />
    </transition>
  </div>
</template>

<style scoped>
.fade-slide-up-enter-active {
  transition: all 0.6s ease-out;
}

.fade-slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

/* Add delay for each component */
.fade-slide-up-enter-active:nth-child(2) {
  transition-delay: 0.2s;
}

.fade-slide-up-enter-active:nth-child(3) {
  transition-delay: 0.4s;
}
</style>
