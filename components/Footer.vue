<template>
  <div>
    <div class="footer">
      <PrimaryDivider class="box-spacing" />
      <nav class="footer-link-container grid grid-cols-3 py-2 box-spacing">
        <roll-up-link
          link="/about"
          class="justify-self-start"
          text="About"
        ></roll-up-link>
        <roll-up-link
          link="/"
          class="justify-self-center"
          text="Web Portfolio"
        ></roll-up-link>
        <roll-up-link
          link="/contact"
          class="justify-self-end"
          text="Contact"
        ></roll-up-link>
      </nav>
    </div>
    <div v-if="needSpacer" class="footer-spacer"></div>
  </div>
</template>

<script>
import PrimaryDivider from "~/components/PrimaryDivider.vue";
import RollUpLink from "~/components/RollUpLink.vue";

export default {
  name: "Footer",
  components: {
    PrimaryDivider,
    RollUpLink,
  },
  props: {},
  computed: {
    needSpacer() {
      return this.$route.name == "index" ? false : true;
    },
  },
};
</script>

<style lang="scss">
a {
  font-family: $header-font;
  @apply text-black dark:text-white;
}

.footer-spacer {
  height: $header-height;
}

.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
}

// .home-page-container,
// .contact-container {
//   .footer {
//     position: absolute;
//     bottom: 0;
//   }
// }
</style>
