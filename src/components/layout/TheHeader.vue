<template>
  <header
    class="desktop:max-w-[1050px] tablet:max-w-[690px] max-w-[315px] mx-auto my-0 flex items-center justify-between py-[20px]"
  >
    <img src="../../assets/Logo.svg" alt="Logo" />
    <nav class="desktop:flex items-center hidden">
      <ul class="flex items-center mr-[10px]">
        <li class="font-semibold leading-[22px] px-[20px] py-[12px] mr-[10px]">
          <a href="#">Marketplace</a>
        </li>
        <li class="font-semibold leading-[22px] px-[20px] py-[12px] mr-[10px]">
          <a href="#">Rankings</a>
        </li>
        <li class="font-semibold leading-[22px] px-[20px] py-[12px]">
          <a href="#">Connect a wallet</a>
        </li>
      </ul>
      <button class="flex items-center px-[30px] py-[19px] bg-lilac rounded-[20px]">
        <img class="w-[20px] h-[20px] mr-[12px]" src="../../assets/images/icons/User.svg" alt="User" />
        <p class="font-semibold leading-[22px]">Sign Up</p>
      </button>
    </nav>
    <button class="desktop:hidden block">
      <img class="w-[24px] h-[24px]" src="../../assets/images/icons/List.svg" alt="Burger Menu">
    </button>
  </header>
</template>

<script>
export default {};
</script>
