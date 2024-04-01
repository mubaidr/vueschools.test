<script lang="ts" setup>
const socialLinks = ref([
  {
    link: "http://facebook.com/vueschool.io",
    icon: "/assets/social/facebook.svg",
  },
  {
    link: "http://twitter.com/vueschool.io",
    icon: "/assets/social/twitter.svg",
  },
  {
    link: "http://github.com/vueschool.io",
    icon: "/assets/social/github.svg",
  },
  {
    link: "http://linkedin.com/vueschool.io",
    icon: "/assets/social/linkedin.svg",
  },
  {
    link: "http://youtube.com/vueschool.io",
    icon: "/assets/social/youtube.svg",
  },
])
</script>

<template>
  <footer class="flex gap-24 pb-24">
    <div class="flex-1">
      <div class="flex gap-4">
        <img src="/assets/logo.svg" alt="vueschool.io logo" class="w-20 h-20" />
        <h5 class="text-3xl font-bold">
          Vue
          <br />
          School.io
        </h5>
      </div>

      <p class="my-16">
        Thanks to fine people like you, Vue School can proudly sponsor Evan and
        the future of Vue.js by being a Platinum Patreon
      </p>

      <h6 class="text-2xl text-gray-500 font-semibold">
        FOLLOW US IN SOCIAL MEDIA
      </h6>

      <div class="flex gap-16 mt-8">
        <a
          class="bg-white bg-opacity-5 p-4 rounded-full flex"
          v-for="{ link, icon } in socialLinks"
          :key="link"
          href="link"
          target="_blank"
        >
          <img
            :src="icon"
            alt="social icon"
            class="min-w-6 justify-self-center"
          />
        </a>
      </div>
    </div>
    <div class="flex-1 flex gap-24">
      <div>
        <h6 class="text-2xl text-gray-500 font-semibold">PRODUCTS</h6>
        <a class="block my-4">Courses</a>
        <a class="block my-4">Workshops</a>
        <a class="block my-4">Vue Masterclass</a>
        <a class="block my-4">Mastering Nuxt</a>

        <h6 class="text-2xl text-gray-500 font-semibold mt-12">PRICING</h6>
        <a class="block my-4">Plans</a>

        <h6 class="text-2xl text-gray-500 font-semibold mt-12">
          CONNECT WITH US
        </h6>
        <a class="block my-4">About Us</a>
        <a class="block my-4">Careers</a>
        <a class="block my-4">Contact Us</a>
      </div>

      <div>
        <h6 class="text-2xl text-gray-500 font-semibold">EVENTS</h6>
        <a class="block my-4">Vue.js Nation</a>
        <a class="block my-4">Nuxt Nation</a>
        <a class="block my-4">Vue.js Forge</a>

        <h6 class="text-2xl text-gray-500 font-semibold mt-12">CORPORATE</h6>
        <a class="block my-4">Corporate Training</a>
        <a class="block my-4">Developer Recruitment</a>
        <a class="block my-4">Course Development</a>
        <a class="block my-4">On-site Workshops</a>
        <a class="block my-4">Consulting</a>
        <a class="block my-4">Affiliate Programs</a>

        <h6 class="text-2xl text-gray-500 font-semibold mt-12">RESOURCES</h6>
        <a class="block my-4">Articles</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
