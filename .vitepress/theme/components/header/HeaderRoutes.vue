<script setup lang="ts">
const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = 80; // Adjust this value based on your header height
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const scrollToServices = () => scrollToSection("services");
const scrollToMissionVision = () => scrollToSection("mission-vision");
const scrollToPrinciples = () => scrollToSection("principles");
const scrollToContact = () => scrollToSection("contact");
</script>

<template>
  <div>
    <nav>
      <a class="link" @click="scrollToServices">HİZMETLERİMİZ</a>
      <a class="link" @click="scrollToMissionVision">MİSYON & VİZYONUMUZ</a>
      <a class="link" @click="scrollToPrinciples">MİMARİ İLKELERİMİZ</a>
      <a class="link" @click="scrollToContact">İLETİŞİM</a>
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
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    padding: 0.5rem 0;
    cursor: pointer;
  }

  .link::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--color-secondary);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .link:hover {
    color: var(--color-secondary);
    transform: translateY(-2px);
  }

  .link:hover::after {
    width: 100%;
  }
}
</style>
