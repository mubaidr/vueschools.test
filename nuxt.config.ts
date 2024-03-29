// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: "dark",
    fallback: "dark",
    dataValue: "theme",
    classSuffix: "",
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  tailwindcss: {
    editorSupport: true,
    viewer: true,
  },
})
