<template>
  <div class="full-width-image-section">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: "FullWidthImageSection",
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.full-width-image-section {
  width: 100%;
  height: 100%;
  display: block;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
