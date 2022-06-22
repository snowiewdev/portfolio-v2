<template>
  <div
    class="box-spacing content-section about-content-section pb-8 md:pb-12"
    :class="type"
  >
    <div class="about-content-section__text-container">
      <slot name="content"></slot>
    </div>
    <div class="about-content-section__image-container overflow-hidden">
      <!-- <slot name="image"></slot> -->
      <img
        data-scroll
        data-scroll-speed="-0.6"
        class="about-content-section__image"
        :class="imgClass"
        :src="getImgUrl(img)"
        alt="me"
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

<style style="scss">
$text-padding: 0rem;

.about-content-section__text-container {
  grid-area: text;
}

.about-content-section__image-container {
  grid-area: image;
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
