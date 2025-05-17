<script setup lang="ts"></script>

<template>
  <div>
    <a href="#" class="icons" aria-label="Instagram">
      <svg
        :width="24"
        :height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-primary)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    </a>
  </div>
</template>

<style lang="css" scoped>
.icons {
  display: flex;

  svg {
    transition: stroke 0.3s ease;
  }
}

.icons:hover svg {
  stroke: var(--color-secondary);
}
</style>
