<template>
  <div
    class="dark-light-mode-toggle-btn text-black dark:text-white cursor-scale"
    @click.prevent="toggleDarkMode"
  >
    <roll-up-text
      v-if="isDarkMode"
      text="LIGHT MODE"
      hover-show-text="LIGHT MODE"
    ></roll-up-text>
    <roll-up-text
      v-else
      text="DARK MODE"
      hover-show-text="DARK MODE"
    ></roll-up-text>
  </div>
</template>

<script>
import RollUpText from "~/components/RollUpText.vue";

export default {
  name: "DarkLightModeToggleBtn",
  data() {
    return {
      isDarkMode: false,
    };
  },
  components: {
    RollUpText,
  },
  // created() {
  //   this.initDarkMode();
  // },
  methods: {
    toggleDarkMode(e) {
      e.preventDefault();
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle("dark");
      this.isDarkMode
        ? localStorage.setItem("theme", "dark")
        : localStorage.setItem("theme", "light"); // update system preference
    },
    // initDarkMode() {
    //   if (process.client) {
    //     if (localStorage.getItem("theme") == "dark") {
    //       this.isDarkMode = true;
    //       document.body.classList.add("dark");
    //     }
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
.dark-light-mode-toggle-btn {
  font-family: $header-font;
  overflow: hidden;
}
</style>
