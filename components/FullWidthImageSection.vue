<template>
  <div class="full-width-image-section">
    <img
      data-scroll
      data-scroll-speed="-1.7"
      class="full-width-image-section__desktop-image"
      :src="getImgUrl(desktopSrc)"
      :alt="alt"
    />
    <img
      data-scroll
      data-scroll-speed="-1.7"
      class="full-width-image-section__mobile-image"
      :src="getImgUrl(mobileSrc)"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  name: "FullWidthImageSection",
  props: {
    desktopSrc: {
      type: String,
      default: "",
    },
    mobileSrc: {
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
  max-width: 1440px;
  display: block;
  margin: 0 auto;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
}

.full-width-image-section__desktop-image {
  display: none;
}

.full-width-image-section__mobile-image {
  display: block;
}

@screen md {
  .full-width-image-section__mobile-image {
    display: none;
  }

  .full-width-image-section__desktop-image {
    display: block;
  }
}
</style>
