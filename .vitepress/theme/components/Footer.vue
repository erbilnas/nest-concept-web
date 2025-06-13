<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer-copyright">
      NEST CONCEPT © Bu sitenin geliştirmesi
      <a href="https://erbilnas.com" target="_blank">Erbil Nas</a> tarafından
      yapılmaktadır.
    </div>
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
  font-weight: var(--font-weight-regular);
  padding: 0 16px;

  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: var(--font-weight-bold);
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-primary-light);
    }
  }
}

@media screen and (max-width: 768px) {
  .footer {
    padding: 24px 0 16px 0;
    height: auto;
    min-height: 10vh;
  }

  .footer-copyright {
    font-size: var(--text-size-medium);
    padding: 0 12px;
  }
}

@media screen and (max-width: 480px) {
  .footer {
    padding: 16px 0 12px 0;
  }

  .footer-copyright {
    font-size: var(--text-size-small);
    padding: 0 8px;
  }
}
</style>
