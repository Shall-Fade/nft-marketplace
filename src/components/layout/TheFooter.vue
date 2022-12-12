<template>
  <footer class="bg-medium-grey py-[40px]">
    <div class="desktop:max-w-[1050px] tablet:max-w-[690px] max-w-[315px] mx-[auto] my-0">
      <div class="flex desktop:flex-row flex-col desktop:justify-between tablet:mb-[50px] mb-[30px]">
        <ul class="desktop:w-[240px] w-full desktop:mb-0 mb-[30px]">
          <li class="mb-[30px]">
            <img src="../../assets/Logo.svg" alt="Logo" />
          </li>
          <li class="mb-[20px]">
            <p class="leading-[22px] text-[#ccc]">
              NFT marketplace UI created with Anima for Figma.
            </p>
          </li>
          <li class="mb-[15px]">
            <p class="leading-[22px] text-[#ccc]">Join our community</p>
          </li>
          <li class="flex items-center">
            <a href="#" class="mr-[10px]">
              <img
                src="../../assets/images/icons/DiscordLogo.svg"
                class="w-[32px] h-[32px]"
                alt="Discord"
              />
            </a>
            <a href="#" class="mr-[10px]">
              <img
                src="../../assets/images/icons/YoutubeLogo.svg"
                class="w-[32px] h-[32px]"
                alt="Youtube"
              />
            </a>
            <a href="#" class="mr-[10px]">
              <img
                src="../../assets/images/icons/TwitterLogo.svg"
                class="w-[32px] h-[32px]"
                alt="Twitter"
              />
            </a>
            <a href="#">
              <img
                src="../../assets/images/icons/InstagramLogo.svg"
                class="w-[32px] h-[32px]"
                alt="Instagram"
              />
            </a>
          </li>
        </ul>
        <ul class="desktop:w-[133px] w-full desktop:mb-0 mb-[30px]">
          <li class="mb-[25px]">
            <h5 class="font-space-mono font-bold text-[22px] leading-[35px]">
              Explore
            </h5>
          </li>
          <li class="mb-[20px]">
            <a class="leading-[22px] text-[#ccc]" href="#">Marketplace</a>
          </li>
          <li class="mb-[20px]">
            <a class="leading-[22px] text-[#ccc]" href="#">Rankings</a>
          </li>
          <li>
            <a class="leading-[22px] text-[#ccc]" href="#">Connect a wallet</a>
          </li>
        </ul>
        <div class="tablet:w-[420px] w-full">
          <h5
            class="font-space-mono font-bold text-[22px] leading-[35px] capitalize mb-[25px]"
          >
            Join our weekly digest
          </h5>
          <p class="w-[330px] leading-[22px] text-[#ccc] mb-[20px]">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <SubscribeSectionWidget />
        </div>
      </div>
      <hr class="border-light-grey" />
      <p class="text-[12px] leading-[13px] text-[#ccc] mt-[20px]">
        Ⓒ NFT Market. Use this template freely.
      </p>
    </div>
  </footer>
</template>

<script>
import SubscribeSectionWidget from "../sections/subscribe/SubscribeSectionWidget.vue";

export default { components: { SubscribeSectionWidget } };
</script>
