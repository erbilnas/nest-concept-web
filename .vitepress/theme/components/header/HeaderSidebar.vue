<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};

const closeSidebar = () => {
  isOpen.value = false;
};

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
  closeSidebar();
};

const scrollToServices = () => scrollToSection("services");
const scrollToMissionVision = () => scrollToSection("mission-vision");
const scrollToPrinciples = () => scrollToSection("principles");
const scrollToContact = () => scrollToSection("contact");
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
        <a class="link" @click="scrollToServices">HİZMETLERİMİZ</a>
        <a class="link" @click="scrollToMissionVision">MİSYON & VİZYONUMUZ</a>
        <a class="link" @click="scrollToPrinciples">MİMARİ İLKELERİMİZ</a>
        <a class="link" @click="scrollToContact">İLETİŞİM</a>
      </nav>
      <div class="social-links">
        <a
          href="https://www.instagram.com/conceptsnest/"
          class="social-link"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          @click="closeSidebar"
        >
          <div class="social-icon-wrapper">
            <svg
              :width="24"
              :height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
          </div>
          <span class="social-text">Instagram'da Takip Edin</span>
        </a>
      </div>
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
  max-width: 400px;
  height: 100vh;
  background-color: var(--color-secondary);
  transition: right 0.3s ease;
  z-index: 1000;
  overflow-y: auto;
}

.sidebar-open {
  right: 0;
}

.sidebar-content {
  padding: 2rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
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

.social-links {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding-top: 3rem;
  padding-bottom: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.social-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.social-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  border-radius: 10px;
  flex-shrink: 0;
}

.social-icon-wrapper svg {
  color: var(--color-white);
  width: 20px;
  height: 20px;
}

.social-text {
  color: var(--color-white);
  font-size: var(--text-size-medium);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .mobile-menu-button {
    display: block;
  }

  .sidebar {
    max-width: 100%;
  }

  .sidebar-content {
    padding: 1.5rem;
  }

  nav {
    margin-top: 3rem;
    gap: 1.5rem;
  }

  .link {
    font-size: var(--text-size-medium);
  }

  .social-links {
    padding-top: 2rem;
    padding-bottom: 1.5rem;
  }

  .social-link {
    padding: 0.875rem 1.25rem;
    gap: 0.875rem;
  }

  .social-icon-wrapper {
    width: 36px;
    height: 36px;
  }

  .social-icon-wrapper svg {
    width: 18px;
    height: 18px;
  }

  .social-text {
    font-size: var(--text-size-small);
  }
}

@media (max-width: 480px) {
  .sidebar-content {
    padding: 1.25rem;
  }

  nav {
    margin-top: 2.5rem;
    gap: 1.25rem;
  }

  .link {
    font-size: var(--text-size-small);
  }

  .social-links {
    padding-top: 1.5rem;
    padding-bottom: 1rem;
  }

  .social-link {
    padding: 0.75rem 1rem;
    gap: 0.75rem;
  }

  .social-icon-wrapper {
    width: 32px;
    height: 32px;
  }

  .social-icon-wrapper svg {
    width: 16px;
    height: 16px;
  }

  .social-text {
    font-size: var(--text-size-small);
    letter-spacing: 0.3px;
  }

  .close-btn {
    top: 1rem;
    right: 1rem;
  }

  .close-btn svg {
    width: 1.5rem;
    height: 1.5rem;
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
