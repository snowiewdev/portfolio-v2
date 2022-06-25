export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // testing
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Snowie Wong Portfolio",
    titleTemplate: "Snowie Wong | %s",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A Web Developer based in Hong Kong",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { hid: "canonical", rel: "canonical", href: "https://snowiewongdev.com" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      // Open Graph
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Snowie Wong Portfolio",
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
        content: "Snowie Wong Portfolio",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "A Web Developer Based in Hong Kong",
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
    // gsap cdn functionality to be tested
    // script: [
    //   { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js" },
    //   {
    //     src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js",
    //   },
    // ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/locomotive.css",
    "@/assets/css/style.css",
    // "./assets/scss/main.scss"
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

  styleResources: {
    scss: ["./assets/scss/variables.scss", "./assets/scss/main.scss"],
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
  },

  loading: false, // hide default progress bar
  // generate: { fallback: "404.html" },
};
