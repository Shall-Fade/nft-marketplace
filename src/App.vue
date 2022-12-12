<template>
  <div class="text-[16px] text-[white] font-work-sans font-normal bg-dark-grey">
    <TheHeader />
    <main
      class="desktop:max-w-[1050px] tablet:max-w-[690px] max-w-[315px] mx-auto my-0"
    >
      <HomePage />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "./components/layout/TheFooter.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import HomePage from "./views/HomePage.vue";
export default {
  components: {
    TheHeader,
    HomePage,
    TheFooter,
  },
};
</script>
