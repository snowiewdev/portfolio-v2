<template>
  <div>
    <div class="footer">
      <PrimaryDivider class="box-spacing" />
      <nav class="footer-link-container grid grid-cols-3 py-2 box-spacing">
        <nuxt-link to="/about" class="justify-self-start"> About </nuxt-link>
        <nuxt-link to="/" class="justify-self-center">
          Web Portfolio
        </nuxt-link>
        <nuxt-link to="/contact" class="justify-self-end"> Contact </nuxt-link>
      </nav>
    </div>
    <div v-if="needSpacer" class="footer-spacer"></div>
  </div>
</template>

<script>
import PrimaryDivider from "~/components/PrimaryDivider.vue";

export default {
  name: "Footer",
  components: {
    PrimaryDivider,
  },
  props: {},
  computed: {
    needSpacer() {
      return this.$route.name == "index" ? false : true;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  font-family: $header-font;
  @apply text-black dark:text-white;
}

.footer-spacer {
  height: $header-height;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
