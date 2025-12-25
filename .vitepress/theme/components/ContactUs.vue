<script setup lang="ts">
import { onMounted, ref } from "vue";

const mapContainer = ref<HTMLElement | null>(null);
let map: any = null;

onMounted(() => {
  if (typeof window !== "undefined" && !(window as any).L) {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
    script.crossOrigin = "";
    script.onload = () => {
      initializeMap();
    };
    document.head.appendChild(script);
  } else if ((window as any).L) {
    initializeMap();
  }
});

const businessLat = 40.78379057974739;
const businessLng = 30.366605139465648;

function initializeMap() {
  if (!mapContainer.value || !(window as any).L) return;

  const L = (window as any).L;

  map = L.map(mapContainer.value).setView([businessLat, businessLng], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  const customIcon = L.divIcon({
    className: "custom-marker",
    html: `<div style="background-color: #493f3a; width: 30px; height: 30px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  L.marker([businessLat, businessLng], { icon: customIcon })
    .addTo(map)
    .bindPopup(
      `<strong>Nest Concept</strong><br>Arabacıalanı Mah. Mehmet Akif Ersoy Cad.<br>Aydın İş Merkezi No:44 K:1 D:22<br>Serdivan / SAKARYA`
    )
    .openPopup();
}

function openInGoogleMaps() {
  const url = `https://www.google.com/maps?q=${businessLat},${businessLng}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
</script>

<template>
  <section class="contact-section" id="contact">
    <div class="contact-container">
      <div class="contact-info">
        <h2>İletişim bilgilerimiz</h2>
        <ul>
          <li>
            <span class="icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
                viewBox="17.7 2.9 54.3 81.5"
                zoomAndPan="magnify"
                style="fill: rgb(165, 144, 132)"
                original_string_length="730"
                width="30.632514010503012px"
                height="46.54111244689684px"
              >
                <g id="__id2_svsfro018m">
                  <path
                    d="M44.849,2.873c-15.001,0-27.166,12.165-27.166,27.172c0,15.001,27.166,54.326,27.166,54.326s27.166-39.325,27.166-54.326 C72.015,15.038,59.85,2.873,44.849,2.873z M44.849,42.907c-7.897,0-14.298-6.395-14.298-14.299c0-7.891,6.401-14.292,14.298-14.292 s14.292,6.401,14.292,14.292C59.141,36.512,52.746,42.907,44.849,42.907z"
                    style="fill: inherit"
                  />
                </g>
              </svg>
            </span>
            <a
              href="https://maps.app.goo.gl/nDRKRsZvhubnA5DH8"
              target="_blank"
              rel="noopener noreferrer"
              class="address-link tooltip-trigger"
              data-tooltip="Haritada konumumuzu görmek için tıklayın."
            >
              Arabacıalanı Mah. Mehmet Akif Ersoy Cad.<br />
              Aydın İş Merkezi No:44 K:1 D:22<br />
              Serdivan / SAKARYA
            </a>
          </li>
          <li>
            <span class="icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
                viewBox="0 0 24 24"
                style="fill: rgb(165, 144, 132)"
                width="30.632514010503012px"
                height="46.54111244689684px"
              >
                <path
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  style="fill: inherit"
                />
              </svg>
            </span>
            <a
              href="mailto:info@conceptnest.com.tr"
              class="email-link tooltip-trigger"
              data-tooltip="Bizimle iletişime geçmek için tıklayın veya info@conceptnest.com.tr adresine e-posta gönderin."
            >
              info@conceptnest.com.tr
            </a>
          </li>
          <li>
            <span class="icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
                viewBox="0 0 24 24"
                style="fill: rgb(165, 144, 132)"
                width="30.632514010503012px"
                height="46.54111244689684px"
              >
                <path
                  d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.9-4-8.9-9-8.9v2c3.9 0 7 3.1 7 6.9zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z"
                  style="fill: inherit"
                />
              </svg>
            </span>
            <a
              href="tel:+905305906100"
              class="phone-link tooltip-trigger"
              data-tooltip="Bizi aramak için tıklayın veya +90 530 590 61 00 numarasını çevirin."
            >
              +90 530 590 6100
            </a>
          </li>
        </ul>
      </div>
      <div class="map-container">
        <div ref="mapContainer" class="map"></div>
        <button
          @click="openInGoogleMaps"
          class="google-maps-button"
          aria-label="Google Haritalar'da Aç"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="20"
            height="20"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
            />
          </svg>
          <span>Google Haritalar'da Aç</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.contact-section {
  background: url("../assets/contact-us-background.png") center/cover no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem 0;
}
.contact-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.85);
  z-index: 1;
}
.contact-container {
  display: flex;
  gap: 64px;
  width: 80vw;
  max-width: 1100px;
  z-index: 2;
  position: relative;
  border-radius: var(--border-radius-large);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--color-secondary);
  font-size: var(--text-size-large);
  width: 100%;
  flex: 1;
}

.map-container {
  flex: 1;
  min-height: 400px;
  border-radius: var(--border-radius-large);
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
}

.map {
  width: 100%;
  height: 100%;
  min-height: 400px;
  border-radius: var(--border-radius-large);
}

.google-maps-button {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;
  font-size: var(--text-size-medium);
  font-weight: var(--font-weight-medium);
  color: var(--color-secondary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 1000;
  font-family: inherit;
}

.google-maps-button:hover {
  background-color: var(--color-primary);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}

.google-maps-button:active {
  transform: translateY(0);
}

.google-maps-button svg {
  flex-shrink: 0;
}

:deep(.leaflet-popup-content-wrapper) {
  border-radius: 8px;
  font-family: inherit;
}

:deep(.leaflet-popup-content) {
  margin: 12px 16px;
  line-height: 1.5;
  color: var(--color-secondary);
}

:deep(.leaflet-popup-content strong) {
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
}

.contact-info h2 {
  color: var(--color-secondary);
  font-size: var(--text-size-xx-large);
  margin-bottom: 32px;
  font-weight: var(--font-weight-light);
}

.contact-info ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.contact-info li {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 24px;
  font-size: var(--text-size-large);
  font-weight: var(--font-weight-light);
  line-height: 1.5;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  flex-shrink: 0;
}

.phone-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.phone-link:hover {
  color: var(--color-primary);
}

.email-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.email-link:hover {
  color: var(--color-primary);
}

.address-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.address-link:hover {
  color: var(--color-primary);
}

.tooltip-trigger {
  position: relative;
}

.tooltip-trigger::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  padding: 8px 12px;
  background-color: var(--color-secondary);
  color: white;
  font-size: var(--text-size-small);
  white-space: nowrap;
  border-radius: 6px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: none;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  font-weight: var(--font-weight-normal);
}

.tooltip-trigger::before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 2px;
  border: 6px solid transparent;
  border-top-color: var(--color-secondary);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: none;
  z-index: 1001;
}

.tooltip-trigger:hover::after,
.tooltip-trigger:hover::before {
  opacity: 1;
  visibility: visible;
}

@media (max-width: 900px) {
  .contact-container {
    flex-direction: column;
    gap: 32px;
    width: 95vw;
    padding: 32px 16px;
  }

  .map-container {
    min-height: 350px;
    width: 100%;
  }

  .map {
    min-height: 350px;
  }

  .google-maps-button {
    top: 8px;
    right: 8px;
    padding: 8px 12px;
    font-size: var(--text-size-small);
  }

  .google-maps-button span {
    display: none;
  }

  .google-maps-button svg {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 600px) {
  .contact-section {
    padding: 1rem 0;
  }

  .contact-container {
    padding: 24px 16px;
  }

  .contact-info h2 {
    font-size: var(--text-size-x-large);
    margin-bottom: 24px;
  }

  .contact-info li {
    font-size: var(--text-size-large);
    gap: 1rem;
    margin-bottom: 20px;
  }

  .icon {
    min-width: 24px;
  }
}

@media (max-width: 400px) {
  .contact-info h2 {
    font-size: var(--text-size-large);
  }

  .contact-info li {
    font-size: var(--text-size-medium);
    gap: 0.75rem;
  }

  .icon {
    min-width: 20px;
  }
}
</style>
