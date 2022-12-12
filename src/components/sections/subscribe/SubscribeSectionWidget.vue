<template>
  <div class="flex desktop:flex-row flex-col desktop:bg-white rounded-[20px]">
    <input
      class="text-dark-grey placeholder:text-dark-grey placeholder:leading-[22px] leading-[22px] desktop:py-[19px] py-[12px] px-[20px] outline-none rounded-[20px] desktop:mb-0 mb-[16px]"
      type="text"
      placeholder="Enter your email here"
    />
    <button
      class="flex items-center justify-center bg-lilac desktop:px-[50px] px-[94px] desktop:py-[19px] py-[12px] rounded-[20px]"
    >
      <img
        class="w-[20px] h-[20px] mr-[12px]"
        src="../../../assets/images/icons/EnvelopeSimple.svg"
        alt="Email"
      />
      <p class="font-semibold leading-[22px]">Subscribe</p>
    </button>
  </div>
</template>

<script>
export default {};
</script>
