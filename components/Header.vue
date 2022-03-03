<template>
  <div class="header">
    <nav class="grid grid-cols-3 py-2 box-spacing">
      <nuxt-link to="/projects" class="justify-self-start">
        Projects
      </nuxt-link>
      <nuxt-link to="/" class="justify-self-center"> Snowie Wong </nuxt-link>
      <DarkLightModeToggleBtn class="justify-self-end" />
    </nav>
    <PrimaryDivider class="box-spacing" />
  </div>
</template>

<script>
import PrimaryDivider from "~/components/PrimaryDivider.vue";
import DarkLightModeToggleBtn from "~/components/DarkLightModeToggleBtn.vue";

export default {
  name: "Header",
  components: {
    PrimaryDivider,
    DarkLightModeToggleBtn,
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  user-select: none;
  // mix-blend-mode: difference;
}

a {
  font-family: $header-font;
  @apply text-black dark:text-white;
}
</style>
