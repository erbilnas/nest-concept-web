<script setup lang="ts"></script>

<template>
  <div>
    <nav>
      <a href="#services" class="link">HİZMETLERİMİZ</a>
      <a href="#projects" class="link">PROJELERİMİZ</a>
      <a href="#contact" class="link">İLETİŞİM</a>
    </nav>
  </div>
</template>

<style lang="css" scoped>
nav {
  display: flex;
  gap: 2rem;

  .link {
    font-weight: var(--font-weight-light);
    color: var(--color-primary);
    font-size: var(--text-size-large);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .link:hover {
    color: var(--color-secondary);
  }
}
</style>
