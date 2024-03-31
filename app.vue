<template>
  <div>
    <HeaderSection></HeaderSection>

    <div class="container mx-auto">
      <NuxtPage />

      <FooterSection></FooterSection>
    </div>
  </div>
</template>

<style>
body {
  @apply min-h-screen bg-white dark:bg-gray-800 dark:text-gray-200;
}
</style>
