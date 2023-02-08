// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@mdi/font/css/materialdesignicons.min.css",
    "vuetify/lib/styles/main.sass",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  modules: ["nuxt-basic-auth-module", "nuxt-basic-auth"],
  basicAuth: {
    username: "theUsername",
    password: "thePassword",
    enabled: true, // true by default
  },
});
