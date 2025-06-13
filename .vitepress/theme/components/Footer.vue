<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer-copyright">COPYRIGHT © NEST CONCEPT</div>
  </footer>
</template>

<style lang="css" scoped>
.footer {
  width: 100%;
  background: var(--color-secondary);
  padding: 32px 0 24px 0;
  position: relative;
  bottom: 0;
  left: 0;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-copyright {
  color: var(--color-white);
  text-align: center;
  font-size: var(--text-size-large);
  letter-spacing: 1px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  font-weight: var(--font-weight-regular);
}
</style>
