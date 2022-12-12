<template>
  <section class="desktop:py-[80px] py-[40px]">
    <h3 class="font-semibold desktop:text-[38px] text-[28px] desktop:leading-[46px] leading-[39px] desktop:mb-[60px] mb-[40px]">
      Browse Categories
    </h3>
    <div class="grid tablet:grid-cols-4 grid-cols-2 gap-[30px]">
      <categories-section-card category="art">
        <template v-slot:name>Art</template>
      </categories-section-card>
      <categories-section-card category="collectibles">
        <template v-slot:name>Collectibles</template>
      </categories-section-card>
      <categories-section-card category="music">
        <template v-slot:name>Music</template>
      </categories-section-card>
      <categories-section-card category="photography">
        <template v-slot:name>Photography</template>
      </categories-section-card>
      <categories-section-card category="video">
        <template v-slot:name>Video</template>
      </categories-section-card>
      <categories-section-card category="utility">
        <template v-slot:name>Utility</template>
      </categories-section-card>
      <categories-section-card category="sport">
        <template v-slot:name>Sport</template>
      </categories-section-card>
      <categories-section-card category="virtual">
        <template v-slot:name>Virtual Worlds</template>
      </categories-section-card>
    </div>
  </section>
</template>

<script>
import CategoriesSectionCard from "./CategoriesSectionCard.vue";

export default { components: { CategoriesSectionCard } };
</script>
