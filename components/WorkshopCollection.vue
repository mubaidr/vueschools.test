<script lang="ts" setup>
const workshops = ref([
  {
    time: {
      start: new Date(),
      end: new Date(),
    },
    type: "Live Training",
    duration: 15,
    title: "Vue.js Fundamentals",
    description:
      "A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally...",
    author: {
      name: "Steve Popoola",
      profile: "/assets/profile.svg",
    },
  },
  {
    time: {
      start: new Date(),
      end: new Date(),
    },
    type: "Live Training",
    duration: 15,
    title: "Vue 3 and Composition API",
    description:
      "Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...",
    author: {
      name: "Steve Popoola",
      profile: "/assets/profile.svg",
    },
  },
  {
    time: {
      start: new Date(),
      end: new Date(),
    },
    type: "Live Training",
    duration: 15,
    title: "Vue 3 and Composition API",
    description:
      "Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...",
    author: {
      name: "Steve Popoola",
      profile: "/assets/profile.svg",
    },
  },
])
</script>

<template>
  <section class="my-32">
    <div class="flex justify-between mb-16">
      <h2 class="text-6xl font-bold">Available Workshops</h2>
      <a
        href="/contact-us"
        class="block bg-primary px-8 py-4 rounded-lg font-semibold text-green-950"
      >
        See all the workshops
      </a>
    </div>

    <div class="flex gap-8 flex-nowrap overflow-x-auto pb-8">
      <div
        v-for="{
          time,
          type,
          duration,
          title,
          description,
          author,
        } in workshops"
        :key="title"
        class="w-full min-w-96"
      >
        <div class="bg-purple-950 px-8 py-4 rounded-tl-3xl rounded-tr-3xl">
          {{ time }}
        </div>

        <div
          class="bg-gray-700 bg-opacity-25 px-8 py-8 text-gray-400 rounded-bl-3xl rounded-br-3xl"
        >
          <div class="flex gap-6">
            <div class="flex gap-2">
              <img src="/assets/video-dark.svg" class="object-contain" />
              <span>{{ type }}</span>
            </div>
            <div class="flex gap-2">
              <img src="/assets/time-dark.svg" class="object-contain" />
              <span>{{ duration }} hours</span>
            </div>
          </div>

          <div class="mt-4">
            <h3 class="text-2xl font-semibold text-white">{{ title }}</h3>
            <p class="mt-2">{{ description }}</p>
          </div>

          <div class="flex gap-2 mt-4">
            <img :src="author.profile" class="object-contain" />
            <span>{{ author.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
