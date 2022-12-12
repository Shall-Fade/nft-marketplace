<template>
  <section class="desktop:py-[80px] py-[40px]">
    <div class="flex tablet:flex-row flex-col tablet:items-end justify-between desktop:mb-[60px] tablet:mb-[40px]">
      <div class="desktop:w-[703px] tablet:w-[343px] w-full tablet:mb-0 mb-[40px]">
        <h3 class="font-semibold desktop:text-[38px] text-[28px] desktop:leading-[46px] leading-[39px] capitalize mb-[10px]">
          Top creators
        </h3>
        <p class="desktop:text-[22px] text-[16px] desktop:leading-[35px] leading-[22px] capitalize">
          Checkout Top Rated Creators on the NFT Marketplace
        </p>
      </div>
      <button
        class="flex items-center justify-center px-[50px] py-[19px] border-[2px] border-lilac rounded-[20px] tablet:mb-0 mb-[40px]"
      >
        <img
          class="w-[20px] h-[20px] mr-[12px]"
          src="../../../assets/images/icons/RocketLaunch.svg"
          alt="Rocket Launch"
        />
        <p class="font-semibold leading-[22px]">View Rankings</p>
      </button>
    </div>
    <div class="grid desktop:grid-cols-4 tablet:grid-cols-2 grid-cols-1 gap-[30px]">
      <TopCreatorsSectionArtistCard />
      <TopCreatorsSectionArtistCard />
      <TopCreatorsSectionArtistCard />
      <TopCreatorsSectionArtistCard />
      <TopCreatorsSectionArtistCard />
      <TopCreatorsSectionArtistCard />
      <TopCreatorsSectionArtistCard />
      <TopCreatorsSectionArtistCard />
      <TopCreatorsSectionArtistCard />
      <TopCreatorsSectionArtistCard />
      <TopCreatorsSectionArtistCard />
      <TopCreatorsSectionArtistCard />
    </div>
  </section>
</template>

<script>
import TopCreatorsSectionArtistCard from "./TopCreatorsSectionArtistCard.vue";

export default { components: { TopCreatorsSectionArtistCard } };
</script>
