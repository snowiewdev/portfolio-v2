<template>
  <div
    class="dark-light-mode-toggle-btn text-black dark:text-white"
    @click.prevent="toggleDarkMode"
  >
    <template v-if="isDarkMode"> LIGHT MODE </template>
    <template v-else> DARK MODE </template>
  </div>
</template>

<script>
export default {
  name: "DarkLightModeToggleBtn",
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode(e) {
      e.preventDefault();
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle("dark");
      this.isDarkMode
        ? (localStorage.theme = "dark")
        : (localStorage.theme = "light"); // update system preference
      // this.$store.commit("toggleDarkMode");
    },
  },
};
</script>

<style lang="scss" scoped>
.dark-light-mode-toggle-btn {
  font-family: $header-font;
}
</style>
