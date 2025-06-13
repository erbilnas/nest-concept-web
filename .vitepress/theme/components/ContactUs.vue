<script setup lang="ts"></script>

<template>
  <section class="contact-section">
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
            Arabacıalanı Mah. Mehmet Akif Ersoy Cad.<br />
            Aydın İş Merkezi No:44 K:1 D:22<br />
            Serdivan / SAKARYA
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
            info@conceptnest.com.tr
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
            +90 530 590 6100
          </li>
        </ul>
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
}

.contact-info li {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 24px;
  font-size: var(--text-size-large);
  font-weight: var(--font-weight-light);
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
}

@media (max-width: 900px) {
  .contact-container {
    flex-direction: column;
    gap: 32px;
    width: 95vw;
    padding: 32px 8px;
  }
}
</style>
