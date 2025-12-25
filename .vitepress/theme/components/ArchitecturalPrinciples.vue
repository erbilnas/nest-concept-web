<script setup lang="ts">
import { ComponentPublicInstance, onMounted, ref } from "vue";

const principles = [
  {
    number: "01",
    title: "DIŞ CEPHE TASARIMI: İLK İZLENİMİN GÜCÜ",
    description:
      "Yapının dış yüzeyi, sadece görsel bir kaplama değil; binanın ruhunu dışa vuran bir ifadedir. Cephede kullandığımız malzemeler, renkler ve dokular, yapının çevresiyle kurduğu diyalogu belirler. ",
    image: "/principles/principle-01.png", // Placeholder - replace with actual image
  },
  {
    number: "02",
    title: "İÇ MEKÂN: FONKSİYONEL VE ESTETİK DENGE",
    description:
      "Yaşam alanlarının iç tasarımında, gün ışığının yönünden, hacimlerin nefes almasına kadar her unsur planlamamızın bir parçasıdır. Her mekân, kullanıcısının yaşam ritmine uygun şekilde kurgulanır.",
    image: "/principles/principle-02.png", // Placeholder - replace with actual image
  },
  {
    number: "03",
    title: "MALZEME SEÇİMİ: KALİTE, DOKU VE DAYANIKLILIK",
    description:
      "Zamanla yaş alacak yapılar için doğru malzeme seçimi çok önemlidir. Malzemelerin yalnızca görünüşünü değil, ömrünü ve çevresel etkilerini de değerlendiririz.",
    image: "/principles/principle-03.png", // Placeholder - replace with actual image
  },
  {
    number: "04",
    title: "ORANLAR VE PROPORSİYON: GÖRSEL DENGE ARAYIŞI",
    description:
      "Bir yapının göze hoş gelmesi, doğru oranlarla kurulan dengeden doğar. Estetik geometri anlayışımız, yapıların insani ölçekte ve uyumlu biçimde tasarlanmasını sağlar.",
    image: "/principles/principle-04.png", // Placeholder - replace with actual image
  },
  {
    number: "05",
    title: "IŞIK VE GÖLGE: MEKANA CAN VEREN UNSURLAR",
    description:
      "Doğal ışığın iç mekâna nasıl girdiği, gölgelerin nasıl hareket ettiği bizim için teknik değil, sanatsal bir meseledir. Işıkla oynamayı, mekâna ruh katmanın yollarından biri olarak görürüz.",
    image: "/principles/principle-05.png", // Placeholder - replace with actual image
  },
  {
    number: "06",
    title: "ÇEVREYLE UYUM: DOĞAYA SAYGILI TASARIM",
    description:
      "Her yapı, inşa edildiği coğrafyanın bir parçasıdır. Bu nedenle çevreye zarar vermeyen, topografyayı gözeten, doğaya saygılı tasarımlar geliştiririz.",
    image: "/principles/principle-06.png", // Placeholder - replace with actual image
  },
  {
    number: "07",
    title: "DEPREM DAYANIKLILIĞI: GÜVENLİĞİN ESTETİKLE BULUŞMASI",
    description:
      "Estetik anlayışımızı, yapı güvenliğinden ayrı düşünmeyiz. Bölgesel risklere uygun mühendislik çözümleriyle, depreme dayanıklı yapılar üretir; güvenliği mimari tasarımın temel bir parçası olarak ele alırız.",
    image: "/principles/principle-07.png", // Placeholder - replace with actual image
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
  <div class="architectural-principles" id="principles">
    <h1 class="title">MİMARİ İLKELERİMİZ</h1>
    <div class="principles-grid">
      <div
        class="principle-card"
        v-for="(principle, idx) in principles"
        :key="principle.number"
        :ref="(el) => setCardRef(el, idx)"
        :style="{ transitionDelay: idx * 0.1 + 's' }"
      >
        <div class="image-container">
          <img :src="principle.image" :alt="principle.title" />
          <div class="number-overlay">{{ principle.number }}</div>
        </div>
        <div class="content">
          <h2 class="principle-title">{{ principle.title }}</h2>
          <p class="principle-description">{{ principle.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.architectural-principles {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-5xl);
  padding: var(--spacing-5xl) var(--spacing-xl);
  background: var(--bg-secondary);
  position: relative;
}

/* Subtle background pattern */
.architectural-principles::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    to bottom,
    var(--bg-secondary) 0,
    var(--bg-secondary) 600px,
    var(--bg-tertiary) 600px,
    var(--bg-tertiary) 1200px
  );
  z-index: 0;
  pointer-events: none;
  opacity: 0.5;
}

.title {
  font-size: var(--text-size-xxx-large);
  color: var(--color-primary);
  font-weight: var(--font-weight-regular);
  text-align: center;
  margin: 0;
  position: relative;
  z-index: 1;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
  max-width: 1400px;
  width: 100%;
  position: relative;
  z-index: 1;
}

.principle-card {
  display: flex;
  flex-direction: column;
  background: var(--bg-primary);
  border-radius: var(--border-radius-x-large);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(73, 63, 58, 0.08);
  opacity: 0;
  transform: translateY(40px);
  transition: opacity var(--transition-slower) cubic-bezier(0.4, 0, 0.2, 1),
    transform var(--transition-slower) cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow var(--transition-base), border-color var(--transition-base),
    transform var(--transition-base);
  will-change: transform, opacity;
}

.principle-card.in-view {
  opacity: 1;
  transform: translateY(0);
}

.principle-card:hover {
  box-shadow: var(--shadow-xl);
  border-color: rgba(73, 63, 58, 0.12);
  transform: translateY(-4px);
}

/* Alternating card backgrounds for visual rhythm */
.principle-card:nth-child(1),
.principle-card:nth-child(2),
.principle-card:nth-child(3) {
  background: var(--bg-primary);
}

.principle-card:nth-child(4),
.principle-card:nth-child(5),
.principle-card:nth-child(6) {
  background: var(--bg-accent);
}

.principle-card:nth-child(7) {
  background: var(--bg-primary);
}

.image-container {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  background: var(--bg-tertiary);
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) brightness(0.95);
  transition: transform var(--transition-slow), filter var(--transition-base);
}

.principle-card:hover .image-container img {
  transform: scale(1.05);
  filter: grayscale(0%) brightness(1);
}

.number-overlay {
  position: absolute;
  bottom: var(--spacing-md);
  left: var(--spacing-lg);
  font-size: 4rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  padding: var(--spacing-sm) var(--spacing-md);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  line-height: 1;
  letter-spacing: -0.03em;
  background: linear-gradient(
    135deg,
    rgba(73, 63, 58, 0.8),
    rgba(73, 63, 58, 0.6)
  );
  backdrop-filter: blur(8px);
  border-radius: var(--border-radius-medium);
  transition: transform var(--transition-base);
}

.principle-card:hover .number-overlay {
  transform: scale(1.05);
}

.content {
  padding: var(--spacing-xl);
  background: transparent;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.principle-title {
  font-size: var(--text-size-large);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin: 0;
  line-height: 1.4;
  letter-spacing: -0.01em;
}

.principle-description {
  font-size: var(--text-size-medium);
  font-weight: var(--font-weight-light);
  color: var(--color-tertiary);
  margin: 0;
  line-height: 1.7;
  letter-spacing: 0.01em;
}

/* On larger screens, center the 7th card */
@media (min-width: 1200px) {
  .principle-card:nth-child(7) {
    grid-column: 2;
    max-width: 600px;
    justify-self: center;
  }
}

@media (max-width: 1200px) {
  .principles-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
  }

  .principle-card:nth-child(7) {
    grid-column: span 2;
  }

  /* Alternating backgrounds for 2-column layout */
  .principle-card:nth-child(1),
  .principle-card:nth-child(2) {
    background: var(--bg-primary);
  }

  .principle-card:nth-child(3),
  .principle-card:nth-child(4) {
    background: var(--bg-accent);
  }

  .principle-card:nth-child(5),
  .principle-card:nth-child(6) {
    background: var(--bg-primary);
  }

  .principle-card:nth-child(7) {
    background: var(--bg-accent);
  }
}

@media (max-width: 768px) {
  .architectural-principles {
    padding: var(--spacing-3xl) var(--spacing-md);
    gap: var(--spacing-3xl);
  }

  .title {
    font-size: var(--text-size-xx-large);
    padding: 0 var(--spacing-md);
  }

  .principles-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .principle-card:nth-child(7) {
    grid-column: 1;
  }

  /* Alternating backgrounds for 1-column layout */
  .principle-card:nth-child(odd) {
    background: var(--bg-primary);
  }

  .principle-card:nth-child(even) {
    background: var(--bg-accent);
  }

  .image-container {
    height: 280px;
  }

  .number-overlay {
    font-size: 3rem;
    padding: var(--spacing-xs) var(--spacing-md);
    bottom: var(--spacing-md);
    left: var(--spacing-md);
  }

  .content {
    padding: var(--spacing-lg);
    gap: var(--spacing-sm);
  }

  .principle-title {
    font-size: var(--text-size-medium);
  }

  .principle-description {
    font-size: var(--text-size-small);
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .architectural-principles {
    padding: var(--spacing-2xl) var(--spacing-sm);
    gap: var(--spacing-2xl);
  }

  .title {
    font-size: var(--text-size-x-large);
  }

  .principles-grid {
    gap: var(--spacing-md);
  }

  .image-container {
    height: 240px;
  }

  .number-overlay {
    font-size: 2.5rem;
    padding: var(--spacing-xs) var(--spacing-sm);
  }

  .content {
    padding: var(--spacing-md);
  }
}
</style>
