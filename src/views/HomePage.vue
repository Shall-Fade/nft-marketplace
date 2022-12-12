<template>
  <div>
    <HeroSection />
    <TrendingCollectionSection />
    <TopCreatorsSection />
    <CategoriesSection />
    <DiscoverSection />
    <HIWSection />
    <SubscribeSection />
  </div>
</template>

<script>
import CategoriesSection from "../components/sections/categories/CategoriesSection.vue";
import DiscoverSection from "../components/sections/discover/DiscoverSection.vue";
import HeroSection from "../components/sections/hero/HeroSection.vue";
import HIWSection from "../components/sections/how-it-works/HIWSection.vue";
import SubscribeSection from "../components/sections/subscribe/SubscribeSection.vue";
import TopCreatorsSection from "../components/sections/top-creators/TopCreatorsSection.vue";
import TrendingCollectionSection from "../components/sections/trending-collection/TrendingCollectionSection.vue";

export default {
  components: {
    HeroSection,
    TrendingCollectionSection,
    TopCreatorsSection,
    CategoriesSection,
    DiscoverSection,
    HIWSection,
    SubscribeSection,
  },
};
</script>
