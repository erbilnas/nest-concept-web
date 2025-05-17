<script setup lang="ts"></script>

<template>
  <div class="motto">
    <div class="image">
      <img src="../assets/motto-01.png" alt="Motto" />
    </div>

    <div class="content">
      <p>
        Nest Consept olarak, yılların deneyimiyle şekillenen birikimimizi,
        mimarlık, tasarım uygulama ve peyzaj alanlarında yeni bir vizyonla
        birleştiriyoruz. Her projede, sadece bir yapı değil; yaşamın içinden
        doğan, estetikle işlevselliği harmanlayan mekânlar inşa ediyoruz.
      </p>
      <p>
        Estetikten ve etik değerlerden ödün vermeden güvenle tasarlıyor;
        yaşanacak değil hissedilecek yapılar inşa ediyoruz.
      </p>
      <p>
        Kaba inşaattan ince işçiliğe kadar her aşamada kaliteyi ön planda
        tutarak, detaylarda saklı olan duyguyu ortaya çıkarıyoruz. Peyzaj
        tasarımlarımızla doğayla uyumlu, sürdürülebilir ve estetik yaşam
        alanları oluşturuyoruz.
      </p>
      <p>
        Bizim için mimarlık, sadece yapı inşa etmek değil; insanlara ilham
        veren, zamana meydan okuyan ve duygusal bağ kuran mekânlar yaratmaktır.
      </p>
      <p class="quote">
        "Nest Consept ile , tutkuyla şekillenen , zamansız ve kaliteyle
        bütünleşen yaşam alanlarına adım atın."
      </p>
    </div>
  </div>
</template>

<style lang="css" scoped>
.motto {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
  gap: 5rem;

  .image {
    width: 100%;
    max-width: 1200px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 80%;
      height: auto;
      max-height: 600px;
      object-fit: contain;
    }
  }

  .content {
    background: var(--color-secondary);
    color: var(--color-white);
    text-align: center;
    padding: 4rem 14vw;

    p {
      font-size: var(--text-size-large);
      font-weight: var(--font-weight-extra-light);
    }

    .quote {
      font-size: var(--text-size-x-large);
      font-weight: var(--font-weight-regular);
      font-style: italic;
    }
  }
}
</style>
