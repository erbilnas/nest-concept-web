<script setup lang="ts">
const currentYear = new Date().getFullYear();

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = 80;
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
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Company Info Section -->
        <div class="footer-section">
          <h3 class="footer-title">Nest Concept</h3>
          <p class="footer-description">
            Mimarlık, peyzaj, yapı ve inşaat alanlarında profesyonel hizmetler
            sunan modern çözümler şirketi. Modern ve yenilikçi projeler için
            bizimle iletişime geçin.
          </p>
          <div class="social-links">
            <a
              href="https://www.instagram.com/conceptsnest/"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
            </a>
          </div>
        </div>

        <!-- Quick Links Section -->
        <div class="footer-section">
          <h3 class="footer-title">Hızlı Linkler</h3>
          <ul class="footer-links">
            <li>
              <a @click="scrollToServices" class="footer-link">Hizmetlerimiz</a>
            </li>
            <li>
              <a @click="scrollToMissionVision" class="footer-link"
                >Misyon & Vizyonumuz</a
              >
            </li>
            <li>
              <a @click="scrollToPrinciples" class="footer-link"
                >Mimari İlkelerimiz</a
              >
            </li>
            <li>
              <a @click="scrollToContact" class="footer-link">İletişim</a>
            </li>
          </ul>
        </div>

        <!-- Contact Section -->
        <div class="footer-section">
          <h3 class="footer-title">İletişim</h3>
          <ul class="footer-contact">
            <li class="contact-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="contact-icon"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                Arabacıalanı Mah. Mehmet Akif Ersoy Cad.<br />
                Aydın İş Merkezi No:44 K:1 D:22<br />
                Serdivan / SAKARYA
              </span>
            </li>
            <li class="contact-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="contact-icon"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:info@conceptnest.com.tr" class="contact-link"
                >info@conceptnest.com.tr</a
              >
            </li>
            <li class="contact-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="contact-icon"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
              <a href="tel:+905305906100" class="contact-link"
                >+90 530 590 6100</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright Section -->
      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>
            NEST CONCEPT © {{ currentYear }} Tüm hakları saklıdır. Bu sitenin
            geliştirmesi
            <a
              href="https://erbilnas.com"
              target="_blank"
              rel="noopener noreferrer"
              >Erbil Nas</a
            >
            tarafından yapılmaktadır.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
.footer {
  width: 100%;
  background: var(--color-secondary);
  padding: var(--spacing-2xl) 0 0 0;
  position: relative;
  bottom: 0;
  left: 0;
  color: var(--color-white);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.footer-title {
  font-size: var(--text-size-x-large);
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  margin: 0 0 var(--spacing-sm) 0;
  letter-spacing: 0.5px;
}

.footer-description {
  font-size: var(--text-size-medium);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-weight: var(--font-weight-light);
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-sm);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-circle);
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-white);
  transition: all var(--transition-base);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.social-link:hover {
  background: var(--color-primary);
  color: var(--color-white);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.footer-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: var(--text-size-medium);
  font-weight: var(--font-weight-light);
  transition: all var(--transition-base);
  cursor: pointer;
  display: inline-block;
  position: relative;
  padding-left: 0;
}

.footer-link::before {
  content: "→";
  margin-right: var(--spacing-sm);
  opacity: 0;
  transform: translateX(calc(-1 * var(--spacing-sm)));
  transition: all var(--transition-base);
  color: var(--color-primary);
}

.footer-link:hover {
  color: var(--color-primary);
  padding-left: var(--spacing-sm);
}

.footer-link:hover::before {
  opacity: 1;
  transform: translateX(0);
}

.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  font-size: var(--text-size-medium);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
}

.contact-icon {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--color-primary);
}

.contact-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color var(--transition-base);
  font-weight: var(--font-weight-light);
}

.contact-link:hover {
  color: var(--color-primary);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: var(--spacing-lg) 0;
  margin-top: var(--spacing-xl);
}

.footer-copyright {
  text-align: center;
  font-size: var(--text-size-small);
  color: rgba(255, 255, 255, 0.7);
  font-weight: var(--font-weight-light);
}

.footer-copyright p {
  margin: 0;
}

.footer-copyright a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color var(--transition-base);
}

.footer-copyright a:hover {
  color: var(--color-primary-light);
}

@media screen and (max-width: 968px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xl);
  }
}

@media screen and (max-width: 768px) {
  .footer {
    padding: var(--spacing-xl) 0 0 0;
  }

  .footer-container {
    padding: 0 var(--spacing-md);
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
    margin-bottom: var(--spacing-xl);
  }

  .footer-title {
    font-size: var(--text-size-large);
  }

  .footer-description {
    font-size: var(--text-size-small);
  }

  .footer-link {
    font-size: var(--text-size-small);
  }

  .contact-item {
    font-size: var(--text-size-small);
  }

  .footer-bottom {
    padding: var(--spacing-lg) 0;
    margin-top: var(--spacing-lg);
  }

  .footer-copyright {
    font-size: var(--text-size-small);
  }
}

@media screen and (max-width: 480px) {
  .footer {
    padding: var(--spacing-lg) 0 0 0;
  }

  .footer-container {
    padding: 0 var(--spacing-md);
  }

  .footer-content {
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
  }

  .social-links {
    gap: var(--spacing-md);
  }

  .social-link {
    width: 36px;
    height: 36px;
  }

  .social-link svg {
    width: 20px;
    height: 20px;
  }

  .footer-bottom {
    padding: var(--spacing-md) 0;
    margin-top: var(--spacing-lg);
  }
}
</style>
