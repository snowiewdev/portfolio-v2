<template>
  <div class="header">
    <nav class="grid grid-cols-3 py-2 box-spacing">
      <roll-up-link
        link="/projects"
        class="justify-self-start"
        text="Projects"
      ></roll-up-link>
      <!-- <roll-up-link link="/" class="justify-self-center" text="Snowie Wong"></roll-up-link> -->
      <nuxt-link to="/" class="justify-self-center"> Snowie Wong </nuxt-link>
      <DarkLightModeToggleBtn class="justify-self-end" />
    </nav>
    <PrimaryDivider class="box-spacing" />
  </div>
</template>

<script>
import PrimaryDivider from "~/components/PrimaryDivider.vue";
import DarkLightModeToggleBtn from "~/components/DarkLightModeToggleBtn.vue";
import RollUpLink from "~/components/RollUpLink.vue";

export default {
  name: "Header",
  components: {
    PrimaryDivider,
    DarkLightModeToggleBtn,
    RollUpLink,
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
}

a {
  font-family: $header-font;
  @apply text-black dark:text-white;
}
</style>
