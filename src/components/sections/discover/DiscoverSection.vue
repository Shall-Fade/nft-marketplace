<template>
  <section class="desktop:py-[80px] py-[40px]">
    <div class="flex tablet:flex-row flex-col tablet:items-end justify-between desktop:mb-[60px] mb-[40px]">
      <div class="tablet:mb-0 mb-[40px]">
        <h3
          class="font-semibold desktop:text-[38px] text-[28px] desktop:leading-[46px] leading-[39px] capitalize mb-[10px]"
        >
          Discover More NFTs
        </h3>
        <p
          class="desktop:text-[22px] text-[16px] desktop:leading-[35px] leading-[22px]"
        >
          Explore new trending NFTs
        </p>
      </div>
      <button
        class="flex items-center justify-center border-[2px] border-lilac px-[50px] py-[19px] rounded-[20px]"
      >
        <img
          class="w-[20px] h-[20px] mr-[12px]"
          src="../../../assets/images/icons/Eye.svg"
          alt="Eye"
        />
        <p class="font-semibold leading-[22px]">See All</p>
      </button>
    </div>
    <div class="grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-[30px]">
      <DiscoverSectionCard />
      <DiscoverSectionCard />
      <DiscoverSectionCard />
    </div>
  </section>
</template>

<script>
import DiscoverSectionCard from "./DiscoverSectionCard.vue";

export default { components: { DiscoverSectionCard } };
</script>
