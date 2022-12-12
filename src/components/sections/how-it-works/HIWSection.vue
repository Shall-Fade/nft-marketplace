<template>
  <section class="desktop:py-[80px] py-[40px]">
    <h3
      class="font-semibold desktop:text-[38px] text-[28px] desktop:leading-[46px] leading-[39px] mb-[10px]"
    >
      How it works
    </h3>
    <p
      class="desktop:text-[22px] text-[16px] desktop:leading-[35px] leading-[22px] desktop:mb-[48px] mb-[40px]"
    >
      Find out how to get started
    </p>
    <div
      class="grid tablet:grid-cols-3 grid-cols-1 tablet:gap-[30px] gap-[20px]"
    >
      <h-i-w-section-card HIWIcon="SetupWalletIcon">
        <template v-slot:title>Setup Your wallet</template>
        <template v-slot:info>
          Set up your wallet of choice. Connect it to the Animarket by clicking
          the wallet icon in the top right corner.
        </template>
      </h-i-w-section-card>
      <h-i-w-section-card HIWIcon="CreateCollectionIcon">
        <template v-slot:title>Create Collection</template>
        <template v-slot:info>
          Upload your work and setup your collection. Add a description, social
          links and floor price.
        </template>
      </h-i-w-section-card>
      <h-i-w-section-card HIWIcon="StartEarningIcon">
        <template v-slot:title>Start Earning</template>
        <template v-slot:info>
          Choose between auctions and fixed-price listings. Start earning by
          selling your NFTs or trading others.
        </template>
      </h-i-w-section-card>
    </div>
  </section>
</template>

<script>
import HIWSectionCard from "./HIWSectionCard.vue";
export default {
  components: {
    HIWSectionCard,
  },
};
</script>
