<script lang="ts" setup>
const pricingSections = ref([
  {
    title: "Basic",
    icon: "/assets/leaf.svg",
    description: "Includes 1 year access to:",
    features: [
      {
        title: "All Video Courses",
        description: "Lorem ipsum dolor sit amet.",
        enable: true,
      },
      {
        title: "Vue.Js Master class",
        description: "Lorem ipsum dolor sit amet.",
        enable: true,
      },
      {
        title: "Developer assist Slack channel",
        description: "Lorem ipsum dolor sit amet.",
        enable: true,
      },
      {
        title: "Live Weekly QnA",
        description: "Lorem ipsum dolor sit amet.",
        enable: false,
      },
      {
        title: "1x ticket per licence",
        description: "Lorem ipsum dolor sit amet.",
        enable: false,
      },
    ],
    highlights: [],
    price: 50,
    discount: 26,
  },
  {
    title: "Professional",
    icon: "/assets/rocket.svg",
    description: "Includes 1 year access to:",
    features: [
      {
        title: "All Video Courses",
        description: "Lorem ipsum dolor sit amet.",
        enable: true,
      },
      {
        title: "Vue.Js Master class",
        description: "Lorem ipsum dolor sit amet.",
        enable: true,
      },
      {
        title: "Developer assist Slack channel",
        description: "Lorem ipsum dolor sit amet.",
        enable: true,
      },
      {
        title: "Live Weekly QnA",
        description: "Lorem ipsum dolor sit amet.",
        enable: true,
      },
      {
        title: "1x ticket per licence",
        description: "Lorem ipsum dolor sit amet.",
        enable: true,
      },
    ],
    highlights: [
      {
        media: "/assets/course-art.svg",
        title: "The Vue 3 Masterclass",
        description: "Enough time to watch:",
      },
    ],
    price: 50,
    discount: 26,
  },
  {
    title: "Basic",
    icon: "/assets/bolt.svg",
    description: "Includes 1 year access to:",
    features: [
      {
        title: "All Video Courses",
        description: "Lorem ipsum dolor sit amet.",
        enable: true,
      },
      {
        title: "Vue.Js Master class",
        description: "Lorem ipsum dolor sit amet.",
        enable: true,
      },
      {
        title: "Developer assist Slack channel",
        description: "Lorem ipsum dolor sit amet.",
        enable: true,
      },
      {
        title: "Live Weekly QnA",
        description: "Lorem ipsum dolor sit amet.",
        enable: true,
      },
      {
        title: "4x Virtual Workshop of your choice",
        description: "Lorem ipsum dolor sit amet.",
        enable: true,
      },
    ],
    highlights: [],
    price: 50,
    discount: 26,
  },
])

const selectedSeats = ref(12)
</script>

<template>
  <section>
    <h2 class="text-6xl font-bold text-center mx-auto max-w-lg">
      Discounted
      <span>Corporate Training</span>
      Bundles
    </h2>

    <div class="flex gap-4 md:gap-8 content-evenly place-content-evenly mt-24">
      <div
        v-for="{
          title,
          description,
          features,
          highlights,
          icon,
          price,
          discount,
        } in pricingSections"
        :key="title"
        class="flex-1 p-6 rounded-3xl bg-gray-700 bg-opacity-25 border border-gray-600"
      >
        <h3 class="flex text-2xl font-bold gap-3">
          <img :src="icon" class="object-contain" />
          {{ title }}
        </h3>

        <p class="mt-8 mb-4 text-primary">{{ description }}</p>

        <ul>
          <li
            v-for="{ title, description } in features"
            :key="title"
            class="flex gap-2 mb-4"
          >
            <img src="/assets/check.svg" class="object-contain" />
            <h4 class="font-bold flex-1">{{ title }}</h4>
            <img
              src="/assets/info.svg"
              class="object-contain"
              :title="description"
            />
          </li>
        </ul>

        <div class="my-6">
          <div
            v-for="{ title, description, media } in highlights"
            :key="title"
            class="flex py-4 px-6 gap-4 bg-green-400 bg-opacity-25 rounded-xl"
          >
            <img :src="media" class="object-contain" />
            <div>
              <span class="opacity-50 text-sm font-semibold">
                {{ description }}
              </span>
              <h4 class="font-bold">{{ title }}</h4>
            </div>
          </div>
        </div>

        <div class="p-8 bg-black bg-opacity-25 rounded-2xl">
          <h5 class="text-3xl font-bold">
            ${{ price }}
            <span class="font-light text-sm align-middle">/ seat / month</span>
          </h5>

          <p class="mt-4 font-bold">How many licenses do you need?</p>

          <div class="my-4">
            <input
              type="range"
              v-model="selectedSeats"
              min="5"
              max="20"
              class="w-full h-1 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700 appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-500"
            />
            <div class="flex justify-between text-gray-600">
              <div>5</div>
              <div>20</div>
            </div>
          </div>

          <div class="flex gap-4">
            <div
              class="flex-1 flex gap-2 bg-black bg-opacity-25 px-4 py-2 rounded-lg"
            >
              <img src="/assets/group.svg" class="object-contain" />
              <span class="font-bold">{{ selectedSeats }}</span>
              <span>seats</span>
            </div>
            <div class="flex-1 text-primary font-bold px-4 py-2">
              {{ discount }}% discount
            </div>
          </div>
        </div>

        <div class="mt-8 text-center">
          <a
            href="/contact-us"
            class="block bg-primary px-8 py-4 rounded-lg font-semibold text-green-950"
          >
            Talk To Sales
          </a>

          <a
            href="/contact-us"
            class="block text-primary px-8 py-4 rounded-lg font-semibold"
          >
            Refer Your Manager
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
