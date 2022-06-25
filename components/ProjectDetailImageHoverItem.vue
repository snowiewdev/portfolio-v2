<template>
  <div
    class="project-detail__image-hover-item-container flex mx-auto"
    :class="classObject"
  >
    <div :id="id" class="project-detail__image-hover-item">
      <h2 class="project-detail__image-hover-overlay-text">
        {{ images.before.text }}
      </h2>
    </div>
  </div>
</template>

<script>
import hoverEffect from "hover-effect";

export default {
  name: "ProjectDetailImageHoverItem",
  props: {
    images: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      hoverEffect: null,
      classObject: {
        "justify-start": this.images.position == "left",
        "justify-end image-right": this.images.position == "right",
        "justify-center": this.images.position == "center",
      },
      resizeObserver: null,
    };
  },
  mounted() {
    this.initHoverEffect();
  },
  beforeDestroy() {
    this.hoverEffect = null;
    this.resizeObserver.disconnect();
  },
  methods: {
    initHoverEffect() {
      let hoverImage = document.querySelector(`#${this.id}`);

      this.hoverEffect = new hoverEffect({
        parent: hoverImage,
        intensity: 0.5,
        image1: require(`~/assets/image/${this.images.before.url}`),
        image2: require(`~/assets/image/${this.images.after.url}`),
        displacementImage: require("~/assets/image/displacement/liquid.png"),
        imagesRatio: 9 / 16, // height : width
        speedIn: 1,
        speedOut: 0.7,
      });

      // fix for HoverEffect not updating when only opening & closing devtool, which has no resize event
      this.resizeObserver = new ResizeObserver(() => {
        // dispatch resize effect to trigger update on size
        window.dispatchEvent(new Event("resize"));
      });
      this.resizeObserver.observe(hoverImage);
    },
  },
};
</script>

<style style="scss">
.project-detail__image-hover-item-container {
  width: 100%;
  max-width: 1440px;
  background: $light-primary;
  transition: $transition-1;
  margin-top: 30px;
  margin-bottom: 60px;
  /* background: black; */
}

.project-detail__image-hover-item {
  width: 85vw;
  aspect-ratio: 16 / 9;
  max-width: 1080px;
  position: relative;
}

/* fix for aspect ratio in hoverEffect */
.project-detail__image-hover-item:after {
  content: "";
  display: block;
  padding-bottom: 56.25%;
}

.project-detail__image-hover-item canvas {
  position: absolute;
}

.project-detail__image-hover-overlay-text {
  font-size: 1.5rem;
  position: absolute;
  mix-blend-mode: difference;
  top: 50%;
  right: 0px;
  transform: translate(55%, -50%);
  z-index: 10;
}

.image-right .project-detail__image-hover-overlay-text {
  left: 0px;
  right: auto;
  transform: translate(-55%, -50%);
}

.dark .project-detail__image-hover-item-container {
  background: $dark-primary;
}

@screen md {
  .project-detail__image-hover-item-container {
    margin-top: 75px;
    margin-bottom: 100px;
  }

  .project-detail__image-hover-item {
    width: 75vw;
    aspect-ratio: 16 / 9;
    max-width: 1080px;
  }

  .project-detail__image-hover-overlay-text {
    font-size: 3rem;
    transform: translate(70%, -50%);
  }

  .image-right .project-detail__image-hover-overlay-text {
    transform: translate(-70%, -50%);
  }
}

@screen lg {
  .project-detail__image-hover-overlay-text {
    font-size: 5rem;
  }
}
</style>
