<template>
  <nuxt-link :to="link" :class="linkClass">
    <roll-up-text :text="text" :hover-show-text="hoverShowText"></roll-up-text>
  </nuxt-link>
</template>

<script>
import RollUpText from "~/components/RollUpText.vue";

export default {
  name: "RollUpLink",
  props: {
    link: {
      type: String,
      default: "/",
    },
    linkClass: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    hoverText: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      hoverShowText: this.hoverText == "" ? this.text : this.hoverText,
    };
  },
  components: {
    RollUpText,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
a {
  font-family: $header-font;
  overflow: hidden;
}
</style>
