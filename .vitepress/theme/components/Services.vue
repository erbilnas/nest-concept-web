<script setup lang="ts">
import { ComponentPublicInstance, onMounted, ref } from "vue";
// @ts-ignore
import buildingImg from "../assets/services-building.png";
// @ts-ignore
import architectureImg from "../assets/services-architecture.png";
// @ts-ignore
import landscapeImg from "../assets/services-landscape.png";

const services = [
  {
    title: "YAPI / İNŞAAT",
    img: buildingImg,
    class: "construction",
  },
  {
    title: "MİMARLIK",
    img: architectureImg,
    class: "architecture",
  },
  {
    title: "PEYZAJ",
    img: landscapeImg,
    class: "landscape",
  },
];

const cardRefs = ref<(HTMLElement | null)[]>([]);
function setCardRef(el: Element | ComponentPublicInstance | null, idx: number) {
  cardRefs.value[idx] = el instanceof HTMLElement ? el : null;
}

onMounted(() => {
  if (typeof window === "undefined") return;
  const cards = cardRefs.value;
  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.2 }
  );
  cards.forEach((el) => {
    if (el) observer.observe(el);
  });
});
</script>

<template>
  <div class="services" id="services">
    <h1 class="title">HİZMETLERİMİZ</h1>
    <div class="service-cards">
      <div
        class="service-card"
        v-for="(service, idx) in services"
        :key="service.title"
        :ref="(el) => setCardRef(el, idx)"
        :style="{ transitionDelay: idx * 0.15 + 's' }"
      >
        <img :src="service.img" :alt="service.title" />
        <div class="service-label" :class="service.class">
          {{ service.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.services {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 5rem 0;
}

.title {
  font-size: var(--text-size-xxx-large);
  color: var(--color-primary);
  font-weight: var(--font-weight-regular);
}

.service-cards {
  display: flex;
  gap: 32px;
  justify-content: center;
}

.service-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.7s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    scale 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.service-card.in-view {
  opacity: 1;
  transform: translateY(0);
}

.service-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  transform: translateY(-8px) scale(1.035);
  z-index: 1;
}

.service-card img {
  width: 100%;
  height: 270px;
  object-fit: cover;
  filter: grayscale(80%) sepia(10%) contrast(1.1);
}

.service-label {
  width: 100%;
  text-align: center;
  font-size: var(--text-size-xx-large);
  font-weight: var(--font-weight-light);
  padding: 24px 0;
  color: var(--color-primary);
}

.construction {
  background: #e0dfdd;
}
.architecture {
  background: #b7a89b;
}
.landscape {
  background: #b2c7b0;
}

@media (max-width: 1200px) {
  .service-cards {
    flex-direction: column;
    gap: 24px;
  }
  .service-card {
    width: 90vw;
    max-width: 400px;
  }
  .service-card:hover {
    /* Disable hover effect on touch devices */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transform: none;
    z-index: auto;
  }
}
</style>
