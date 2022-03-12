<template>
  <div class="title-link-container flex justify-center mb-8">
    <RotatingLink :text="text" :link="link"> </RotatingLink>
  </div>
</template>

<script>
import RotatingLink from "~/components/RotatingLink.vue";

export default {
  name: "RotatingTitleLink",
  props: {
    text: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "#",
    },
  },
  components: {
    RotatingLink,
  },
};
</script>

<style lang="scss" scoped></style>
