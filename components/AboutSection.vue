<script lang="ts" setup>
const companyLogos = ref([
  "google.svg",
  "google.svg",
  "google.svg",
  "google.svg",
  "google.svg",
  "google.svg",
])
</script>

<template>
  <section>
    <div
      class="p-12 rounded-3xl flex gap-16 bg-gray-700 bg-opacity-25 border border-gray-600"
    >
      <img
        src="../public/assets/logo.svg"
        alt="Vue School Logo"
        class="object-contain w-28 mx-12"
      />
      <div class="flex-1">
        <h2 class="text-5xl font-bold">About Vue School corporate training</h2>
        <p class="mt-8 text-xl">
          School is the #1 training resource for Vue.js and has provided the
          most comprehensive Vue.js video library in the world to over 140,000
          developers. Private individuals and small to enterprise companies have
          used our services to develop their skills since 2016.
        </p>
      </div>
    </div>
    <div class="flex my-12 justify-center">
      <img
        :src="`/assets/logo/${logo}`"
        v-for="logo in companyLogos"
        :key="logo"
        class="h-8 px-12"
        alt="Company Logo"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
