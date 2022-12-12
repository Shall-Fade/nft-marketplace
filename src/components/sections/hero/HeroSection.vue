<template>
  <section
    class="tablet:py-[80px] py-[40px] flex items-center justify-between tablet:flex-row flex-col"
  >
    <div class="flex flex-col desktop:w-[510px] tablet:w-[330px] w-[315px]">
      <div class="tablet:order-none order-1">
        <h1
          class="font-semibold desktop:text-[67px] tablet:text-[38px] text-[28px] desktop:leading-[74px] tablet:leading-[46px] leading-[39px] tablet:mb-[20px] mb-[10px] capitalize"
        >
          Discover digital art & Collect NFTs
        </h1>
        <p
          class="desktop:text-[22px] desktop:leading-[35px] leading-[22px] desktop:mb-[40px] tablet:mb-[20px] mb-[40px] capitalize"
        >
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
      </div>
      <button
        class="flex items-center px-[50px] py-[19px] tablet:justify-start justify-center tablet:w-[224px] w-full bg-lilac rounded-[20px] desktop:mb-[40px] tablet:mb-[20px] mb-[40px] tablet:order-none order-3"
      >
        <img
          class="w-[20px] h-[20px] mr-[12px]"
          src="../../../assets/images/icons/RocketLaunch.svg"
          alt="Rocket Launch"
        />
        <p class="font-semibold leading-[22px]">Get Started</p>
      </button>
      <HeroSectionAdditionalInfo class="tablet:order-none order-3" />
    </div>
    <HeroSectionHighlightedNFT />
  </section>
</template>

<script>
import HeroSectionAdditionalInfo from "./HeroSectionAdditionalInfo.vue";
import HeroSectionHighlightedNFT from "./HeroSectionHighlightedNFT.vue";

export default {
  components: {
    HeroSectionAdditionalInfo,
    HeroSectionHighlightedNFT,
  },
};
</script>
