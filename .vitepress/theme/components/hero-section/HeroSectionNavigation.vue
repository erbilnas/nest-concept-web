<script setup lang="ts">
const props = defineProps<{
  images: string[];
  current: number;
}>();

const emit = defineEmits<{
  (e: "go-to", index: number): void;
}>();
</script>

<template>
  <div class="slider-dots">
    <span
      v-for="(img, idx) in images"
      :key="'dot-' + idx"
      class="dot"
      :class="{ active: idx === current }"
      @click="emit('go-to', idx)"
    ></span>
  </div>
</template>

<style lang="css" scoped>
.slider-dots {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 3;

  .dot {
    width: 1rem;
    height: 1rem;
    border-radius: var(--border-radius-circle);
    background: var(--color-primary);
    border: 2px solid var(--color-secondary);
    cursor: pointer;
    transition: background 0.3s, border 0.3s;
  }

  .dot.active {
    background: var(--color-white);
    border-color: var(--color-primary);
  }
}
</style>
