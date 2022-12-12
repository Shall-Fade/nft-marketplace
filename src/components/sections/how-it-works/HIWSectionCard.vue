<template>
  <div
    class="flex tablet:flex-col flex-row items-center desktop:w-[330px] tablet:w-[200px] w-[315px] desktop:px-[30px] px-[20px] desktop:pt-[10px] pt-[20px] tablet:pb-[30px] pb-[20px] bg-medium-grey rounded-[20px]"
  >
    <img
      class="desktop:w-[250px] desktop:h-[250px] tablet:w-[160px] tablet:h-[160px] w-[100px] h-[100px] tablet:mb-[20px] mb-0 tablet:mr-0 mr-[20px]"
      :src="currentImageLink"
      alt="Wallet"
    />
    <div>
      <h5
        class="font-semibold desktop:text-[22px] text-[16px] desktop:leading-[31px] leading-[22px] tablet:text-center text-left mb-[10px]"
      >
        <slot name="title"></slot>
      </h5>
      <p
        class="desktop:text-[16px] text-[12px] desktop:leading-[22px] leading-[17px] tablet:text-center text-left"
      >
        <slot name="info"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["HIWIcon"],
  setup(props) {
    let currentImageLink = "";

    if (props.HIWIcon) {
      currentImageLink = `../../../../src/assets/images/icons/${props.HIWIcon}.svg`;
    }

    return {
      currentImageLink,
    };
  },
};
</script>
