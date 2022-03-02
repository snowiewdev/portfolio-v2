<template>
  <div class="full-width-image-section">
    <img :src="getImgUrl(src)" :alt="alt" />
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
  methods: {
    getImgUrl(img) {
      return require(`~/assets/image/${img}`);
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
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
