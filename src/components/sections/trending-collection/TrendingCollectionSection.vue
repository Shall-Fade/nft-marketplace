<template>
  <section class="desktop:py-[80px] py-[40px]">
    <h3 class="font-semibold desktop:text-[38px] text-[28px] leading-[39px] capitalize mb-[10px]">
      Trending Collection
    </h3>
    <p class="desktop:text-[22px] text-[16px] desktop:leading-[35px] leading-[22px] capitalize desktop:mb-[60px] mb-[40px]">
      Checkout our weekly updated trending collection.
    </p>
    <div class="grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-[30px]">
      <TrendingCollectionSectionCard />
      <TrendingCollectionSectionCard />
      <TrendingCollectionSectionCard />
    </div>
  </section>
</template>

<script>
import TrendingCollectionSectionCard from "./TrendingCollectionSectionCard.vue";

export default { components: { TrendingCollectionSectionCard } };
</script>
