<template>
  <div
    class="relative flex desktop:flex-col tablet:flex-row items-center bg-medium-grey p-[20px] rounded-[20px]"
  >
    <p
      class="absolute desktop:top-[18px] desktop:left-[20px] top-[13px] left-[12px] flex items-center justify-center w-[30px] h-[30px] font-space-mono leading-[22px] text-light-grey bg-dark-grey rounded-full"
    >
      1
    </p>
    <img
      class="desktop:w-[120px] desktop:h-[120px] w-[60px] h-[60px] desktop:mb-[20px] desktop:mr-0 mr-[20px]"
      src="../../../assets/images/avatar.svg"
      alt="Avatar"
    />
    <div class="flex flex-col desktop:items-center tablet:items-start">
      <h5 class="font-semibold text-[22px] leading-[31px] mb-[5px]">
        Dish Studio
      </h5>
      <p class="leading-[22px] text-light-grey">
        Total Sales:
        <span class="font-space-mono text-white leading-[22px]">34.53 ETH</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
