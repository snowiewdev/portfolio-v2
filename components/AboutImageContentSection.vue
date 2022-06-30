<template>
  <div
    class="box-spacing content-section about-content-section pb-8 md:pb-12"
    :class="type"
  >
    <div class="about-content-section__text-container">
      <slot name="content"></slot>
    </div>
    <div class="about-content-section__image-container overflow-hidden">
      <img
        data-scroll
        data-scroll-speed="-0.6"
        class="about-content-section__image"
        :class="imgClass"
        :src="getImgUrl(img)"
        alt="about me image"
      />
      <img
        v-if="topImg.length > 0"
        data-scroll
        data-scroll-speed="-0.6"
        class="about-content-section__image top-image"
        :class="imgClass"
        :src="getImgUrl(topImg)"
        alt="about me image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutImageContentSection",
  props: {
    img: {
      type: String,
      default: "",
    },
    topImg: {
      type: String,
      default: "",
    },
    imgClass: {
      type: String,
      default: "",
    },
    type: {
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
$text-padding: 0rem;

.about-content-section__text-container {
  grid-area: text;
}

.about-content-section__image-container {
  grid-area: image;
  position: relative;
}

.about-content-section {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "text"
    "image";
}

.about-content-section__image {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-top: 1rem;
}

.top-image {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  will-change: clip-path;
  clip-path: inset(0 0 0 100%);
  transition: clip-path 0.4s cubic-bezier(0.79, 0.14, 0.15, 0.86);
}

.image-first {
  .top-image {
    clip-path: inset(0 100% 0 0);
  }
}

.about-content-section__image-container:hover {
  .top-image {
    clip-path: inset(0 0 0 0);
  }
}

@screen md {
  .about-content-section {
    grid-template-columns: 1fr 270px;
    grid-template-areas: "text image";
  }

  .image-first {
    grid-template-columns: 270px 1fr !important;
    grid-template-areas: "image text";
  }

  .about-content-section__text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 1rem;
  }

  .image-first .about-content-section__text-container {
    text-align: right;
    padding-right: 0px;
    padding-left: 1rem;
  }

  .about-content-section__image {
    height: 400px;
    margin-top: 0px;
  }
}

@screen lg {
  .about-content-section {
    grid-template-columns: 1fr 327px;
    grid-template-areas: "text image";
  }

  .image-first {
    grid-template-columns: 327px 1fr !important;
    grid-template-areas: "image text";
  }

  .about-content-section__text-container {
    padding-right: 2rem;
  }

  .image-first .about-content-section__text-container {
    padding-left: 2rem;
  }

  .about-content-section__image {
    height: auto;
  }
}
</style>
