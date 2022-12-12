<template>
  <div class="desktop:w-[240px] w-[142px]">
    <img class="rounded-t-[20px]" :src="currentImageLink" :alt="category" />
    <h5
      class="font-semibold desktop:text-[22px] text-[16px] desktop:leading-[31px] leading-[22px] desktop:px-[30px] px-[20px] pt-[20px] pb-[25px] bg-medium-grey rounded-b-[20px]"
    >
      <slot name="name"></slot>
    </h5>
  </div>
</template>

<script>
export default {
  props: ["category"],

  setup(props) {
    let currentImageLink = "";

    if (props.category) {
      currentImageLink = `../../../../src/assets/images/categories/${props.category}-category.png`;
    }

    return {
      currentImageLink,
    };
  },
};
</script>
