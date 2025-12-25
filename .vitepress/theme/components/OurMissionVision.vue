<script setup lang="ts">
import { onMounted, ref } from "vue";
// @ts-ignore
import missionIcon from "../assets/our-mission-icon.png";
// @ts-ignore
import visionIcon from "../assets/our-vision-icon.png";

const missionText = `Nest Consept olarak misyonumuz, her projede yalnızca estetik değil, yaşamı dönüştüren tasarımlar yaratmaktır. Mimarlık ve peyzaj alanındaki derin bilgimizi, yenilikçi düşünce ve yaratıcı çözümlerle birleştirerek, mekânları işlevsel ve anlamlı hale getiriyoruz.

Her yeni projede, insanın ve doğanın ihtiyaçlarını esas alarak, mekânları sadece şekil değil, duygu ve işlevle biçimlendiriyoruz.

Bizim için her proje, bir vizyonun başlangıcıdır; her tasarım, geleceğe değer katacak ve yaşadıkça gelişecek bir yaşam alanı olmalıdır.

Müşterilerimizin beklentilerini aşmayı, her projede özgünlüğü ve mükemmeliyeti hedef alıyoruz. Nest Consept olarak, sektördeki sınırları zorlayarak, yaşamla uyumlu tasarımlar yaratmaya devam edeceğiz.`;

const visionText = `Nest Consept olarak vizyonumuz, sektördeki liderliğimizi sürdürerek, mimarlık ve tasarım dünyasında kalıcı etkiler bırakmaktır. Yılların deneyimiyle şekillenen bakış açımızı, geleceği dönüştüren ve sürdürülebilir çözümler sunan projelere dönüştürmeyi hedefliyoruz.

Her projede, estetik ve fonksiyonelliği mükemmel bir uyum içinde birleştirerek, her zaman öncü olmayı amaçlıyoruz. Biz, yalnızca yapılar inşa etmiyoruz; insanı, doğayı ve zamanın gereksinimlerini göz önünde bulundurarak, geleceğe değer katacak mekânlar yaratıyoruz.

Nest Consept, sektördeki en yenilikçi ve ileri görüşlü tasarım anlayışını benimseyerek, her adımda mükemmeliyetin sınırlarını zorlar ve bir sonraki seviyeye taşır. Geleceğin mimarisini inşa etmek için sağlam temeller üzerinde yükseliyoruz ve bu yolculukta en yüksek standartları hedefliyoruz.`;

const sectionRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (typeof window === "undefined" || !sectionRef.value) return;

  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          // Animate columns with stagger
          const columns = entry.target.querySelectorAll(".column");
          columns.forEach((column, index) => {
            setTimeout(() => {
              column.classList.add("animate-in");
            }, index * 150);
          });
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(sectionRef.value);
});
</script>

<template>
  <div class="mission-vision" id="mission-vision" ref="sectionRef">
    <div class="columns-container">
      <!-- Mission Column -->
      <div class="column mission-column">
        <div class="icon-container">
          <img :src="missionIcon" alt="Mission Icon" class="icon-image" />
        </div>
        <h2 class="title">Misyonumuz</h2>
        <div class="text-content">
          <p>{{ missionText }}</p>
        </div>
      </div>

      <!-- Vision Column -->
      <div class="column vision-column">
        <div class="icon-container">
          <img :src="visionIcon" alt="Vision Icon" class="icon-image" />
        </div>
        <h2 class="title">Vizyonumuz</h2>
        <div class="text-content">
          <p>{{ visionText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.mission-vision {
  padding: 5rem 2rem;
  background: #f5f3f0;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.mission-vision.in-view {
  opacity: 1;
  transform: translateY(0);
}

.columns-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1400px;
  margin: 0 auto;
  gap: 0;
}

.column {
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.column.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.mission-column {
  background: #faf9f7; /* Very light off-white/beige */
}

.vision-column {
  background: #ede9e4; /* Slightly darker beige/greyish-brown */
}

.icon-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.icon-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  opacity: 0.9;
  mix-blend-mode: multiply;
  transform: scale(0.8) rotate(-5deg);
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.6s ease;
}

.column.animate-in .icon-image {
  transform: scale(1) rotate(0deg);
  opacity: 0.9;
}

.icon-image:hover {
  transform: scale(1.1) rotate(5deg);
  opacity: 1;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.3s ease;
}

.title {
  font-size: var(--text-size-xx-large);
  font-weight: var(--font-weight-regular);
  color: var(--color-primary);
  margin: 0;
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s,
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
}

.column.animate-in .title {
  opacity: 1;
  transform: translateX(0);
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s,
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
}

.column.animate-in .text-content {
  opacity: 1;
  transform: translateY(0);
}

.text-content p {
  font-size: var(--text-size-medium);
  font-weight: var(--font-weight-light);
  color: var(--color-primary);
  line-height: 1.8;
  margin: 0;
  white-space: pre-line;
}

@media (max-width: 1200px) {
  .columns-container {
    grid-template-columns: 1fr;
  }

  .mission-column {
    border-bottom: 1px solid rgba(73, 63, 58, 0.1);
  }

  .vision-column {
    background: #ede9e4;
  }
}

@media (max-width: 768px) {
  .mission-vision {
    padding: 3rem 1rem;
  }

  .column {
    padding: 3rem 2rem;
    gap: 1.5rem;
  }

  .title {
    font-size: var(--text-size-x-large);
  }

  .text-content p {
    font-size: var(--text-size-small);
    line-height: 1.7;
  }

  .icon-image {
    width: 60px;
    height: 60px;
  }
}
</style>
