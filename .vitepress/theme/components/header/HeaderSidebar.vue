<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};

const closeSidebar = () => {
  isOpen.value = false;
};
</script>

<template>
  <div class="mobile-menu-button" @click="toggleSidebar">
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
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  </div>

  <transition name="sidebar-fade">
    <div v-if="isOpen" class="sidebar-overlay" @click="closeSidebar"></div>
  </transition>

  <div class="sidebar" :class="{ 'sidebar-open': isOpen }">
    <div class="sidebar-content">
      <button class="close-btn" @click="closeSidebar" aria-label="Kapat">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-primary)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <nav>
        <a href="#services" class="link" @click="closeSidebar">HİZMETLERİMİZ</a>
        <!-- <a href="#projects" class="link" @click="closeSidebar">PROJELERİMİZ</a> -->
        <a href="#contact" class="link" @click="closeSidebar">İLETİŞİM</a>
      </nav>
    </div>
  </div>
</template>

<style lang="css" scoped>
.mobile-menu-button {
  display: none;
  cursor: pointer;
  padding: 0.5rem;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);
  z-index: 999;
  transition: opacity 0.3s;
}

.sidebar {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background-color: var(--color-secondary);
  transition: right 0.3s ease;
  z-index: 1000;
}

.sidebar-open {
  right: 0;
}

.sidebar-content {
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;
}

.link {
  font-weight: var(--font-weight-light);
  color: var(--color-white);
  font-size: var(--text-size-large);
  text-decoration: none;
  transition: color 0.3s ease;
  width: fit-content;
}

.link:hover {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .mobile-menu-button {
    display: block;
  }
}

.sidebar-fade-enter-active,
.sidebar-fade-leave-active {
  transition: opacity 0.3s;
}
.sidebar-fade-enter-from,
.sidebar-fade-leave-to {
  opacity: 0;
}
.sidebar-fade-enter-to,
.sidebar-fade-leave-from {
  opacity: 1;
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.close-btn svg {
  stroke: var(--color-white);
  width: 2rem;
  height: 2rem;
}

.close-btn:hover svg {
  stroke: var(--color-primary);
}
</style>
