export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // SPA
  // ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Snowie Wong Portfolio",
    titleTemplate: "%s | Snowie Wong",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "A Hong Kong web developer passionate in frontend development, now based in Vancouver",
      },
      { name: "format-detection", content: "telephone=no" },
      // Open Graph
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Snowie Wong Portfolio | Web Developer",
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://snowiewongdev.com",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Snowie Wong Portfolio | Web Developer",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "A Hong Kong web developer passionate in frontend web development, now based in Vancouver",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "",
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "Snowie Wong Logo",
      },
    ],
    link: [
      { hid: "canonical", rel: "canonical", href: "https://snowiewongdev.com" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // place for global styles except variables/mixins
  css: [
    "@/assets/css/locomotive.css",
    "@/assets/css/style.css",
    "@/assets/scss/main.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/locomotiveScroll.client.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/style-resources",
    "@nuxt/postcss8",
  ],

  // used for shared variables and mixins only
  styleResources: {
    scss: ["./assets/scss/variables.scss"],
  },

  googleFonts: {
    download: true,
    families: {
      "Playfair Display": true,
      Poppins: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    transpile: ["gsap"],
    standalone: true,
    terser: {
      // https://github.com/terser/terser#compress-options
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },

  generate: {
    routes: [
      // fix nuxt generate ignore dynamic path
      "/projects/1",
      "/projects/2",
      "/projects/3",
      "/projects/4",
      "/projects/5",
      "/projects/6",
      "/projects/7",
      "/projects/8",
    ],
    fallback: true,
  },
};
