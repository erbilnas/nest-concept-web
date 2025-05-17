<script setup lang="ts">
import HeaderIcons from "./HeaderIcons.vue";
import HeaderLogo from "./HeaderLogo.vue";
import HeaderRoutes from "./HeaderRoutes.vue";
import HeaderSidebar from "./HeaderSidebar.vue";
</script>

<template>
  <header>
    <HeaderLogo />

    <div class="navigation">
      <HeaderRoutes class="desktop-nav" />
      <HeaderIcons class="desktop-icons" />
      <HeaderSidebar class="mobile-nav" />
    </div>
  </header>
</template>

<style lang="css" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  .navigation {
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 768px) {
      .desktop-nav,
      .desktop-icons {
        display: none;
      }

      .mobile-nav {
        display: block;
      }
    }

    @media (min-width: 769px) {
      .mobile-nav {
        display: none;
      }
    }
  }
}
</style>
