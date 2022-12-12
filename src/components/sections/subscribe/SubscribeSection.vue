<template>
  <section class="py-[80px]">
    <div
      class="flex tablet:flex-row flex-col desktop:items-center justify-between tablet:bg-medium-grey desktop:p-[60px] tablet:px-[30px] tablet:py-[40px] tablet:rounded-[20px]"
    >
      <img
        class="desktop:w-[425px] tablet:w-[300px] w-full desktop:mr-[80px] tablet:mr-[30px] mr-0 tablet:mb-0 mb-[30px] rounded-[20px]"
        src="../../../assets/images/subscribe-placeholder.png"
        alt="Placeholder"
      />
      <div class="desktop:w-[425px] tablet:w-[300px] w-full">
        <h3
          class="font-semibold desktop:text-[38px] text-[28px] desktop:leading-[46px] leading-[39px] capitalize mb-[10px]"
        >
          Join our weekly digest
        </h3>
        <p
          class="desktop:text-[22px] text-[16px] desktop:leading-[35px] leading-[22px] capitalize mb-[40px]"
        >
          Get exclusive promotions & updates straight to your inbox.
        </p>
        <SubscribeSectionWidget />
      </div>
    </div>
  </section>
</template>

<script>
import SubscribeSectionWidget from "./SubscribeSectionWidget.vue";

export default { components: { SubscribeSectionWidget } };
</script>
