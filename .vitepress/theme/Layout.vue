<script setup lang="ts">
import { useData } from "vitepress";
import { computed, onMounted } from "vue";
import ArchitecturalPrinciples from "./components/ArchitecturalPrinciples.vue";
import ContactUs from "./components/ContactUs.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import Motto from "./components/Motto.vue";
import OurMissionVision from "./components/OurMissionVision.vue";
import ScrollToTop from "./components/ScrollToTop.vue";
import Services from "./components/Services.vue";

const { site, page } = useData();

const structuredData = computed(() => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.value.title,
  description: site.value.description,
  url: "https://nest-concept.com", // Update with your actual domain
  logo: "https://nest-concept.com/favicon.png", // Update with your actual domain
  sameAs: [
    // Add your social media profiles here
    // "https://www.facebook.com/nestconcept",
    // "https://www.twitter.com/nestconcept",
    // "https://www.linkedin.com/company/nestconcept",
  ],
}));

const websiteStructuredData = computed(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.value.title,
  description: site.value.description,
  url: "https://nest-concept.com", // Update with your actual domain
  potentialAction: {
    "@type": "SearchAction",
    target: "https://nest-concept.com/search?q={search_term_string}", // Update if you have search
    "query-input": "required name=search_term_string",
  },
}));

// Inject structured data scripts into head
onMounted(() => {
  // Organization schema
  const orgScript = document.createElement("script");
  orgScript.type = "application/ld+json";
  orgScript.textContent = JSON.stringify(structuredData.value);
  document.head.appendChild(orgScript);

  // Website schema
  const websiteScript = document.createElement("script");
  websiteScript.type = "application/ld+json";
  websiteScript.textContent = JSON.stringify(websiteStructuredData.value);
  document.head.appendChild(websiteScript);
});
</script>

<template>
  <div>
    <transition name="fade-slide-up" appear>
      <Header />
    </transition>

    <transition name="fade-slide-up" appear>
      <HeroSection />
    </transition>

    <transition name="fade-slide-up" appear>
      <Motto />
    </transition>

    <transition name="fade-slide-up" appear>
      <Services />
    </transition>

    <transition name="fade-slide-up" appear>
      <OurMissionVision />
    </transition>

    <transition name="fade-slide-up" appear>
      <ArchitecturalPrinciples />
    </transition>

    <transition name="fade-slide-up" appear>
      <ContactUs />
    </transition>

    <transition name="fade-slide-up" appear>
      <Footer />
    </transition>

    <ScrollToTop />
  </div>
</template>

<style scoped>
.fade-slide-up-enter-active {
  transition: all 0.6s ease-out;
}

.fade-slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

/* Add delay for each component */
.fade-slide-up-enter-active:nth-child(2) {
  transition-delay: 0.2s;
}

.fade-slide-up-enter-active:nth-child(3) {
  transition-delay: 0.4s;
}
</style>
