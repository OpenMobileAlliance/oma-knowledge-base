// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts", "@nuxt/content"],
  content: {},
  googleFonts: {
    families: {
      "DM Sans": [400, 500, 600, 700],
      "DM Mono": [400, 500],
    },
  },
  app: {
    head: {
      link: [
        { rel: "shortcut icon", href: "favicon-1.png", type: "image/x-icon" },
      ],
    },
  },
  devtools: { enabled: true },
});
