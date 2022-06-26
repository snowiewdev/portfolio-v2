<template>
  <div class="project-detail__mobile-image-item-container">
    <div :id="id" class="project-detail__mobile-image-item"></div>
  </div>
</template>

<script>
import hoverEffect from "hover-effect";

export default {
  name: "ProjectDetailMobileImageItem",
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
        displacementImage: require("~/assets/image/displacement/line.jpg"),
        imagesRatio: 19.5 / 9, // height : width
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

<style lang="scss">
.project-detail__mobile-image-item-container {
  flex-grow: 1;
}

.project-detail__mobile-image-item {
  width: 100%;
  max-width: 300px;
  aspect-ratio: 9 / 19.5;
  position: relative;
  // background: black;
}

.project-detail__mobile-image-item-container {
  display: flex;
  justify-content: center;
}

/* fix for aspect ratio in hoverEffect */
.project-detail__mobile-image-item:after {
  content: "";
  display: block;
  padding-bottom: 46.15%;
}

.project-detail__mobile-image-item canvas {
  position: absolute;
}

@screen xs {
  $stairSpace: 50px;
  $doubleStairSpace: 100px;

  .project-detail__mobile-image-item-container:nth-child(1) {
    .project-detail__mobile-image-item {
      margin-bottom: $doubleStairSpace;
    }
  }

  .project-detail__mobile-image-item-container:nth-child(2) {
    .project-detail__mobile-image-item {
      margin-top: $stairSpace;
      margin-bottom: $stairSpace;
    }
  }

  .project-detail__mobile-image-item-container:nth-child(3) {
    .project-detail__mobile-image-item {
      margin-top: $doubleStairSpace;
    }
  }
}

@screen md {
  $stairSpace: 75px;
  $doubleStairSpace: 150px;

  .project-detail__mobile-image-item-container:nth-child(1) {
    .project-detail__mobile-image-item {
      margin-bottom: $doubleStairSpace;
    }
  }

  .project-detail__mobile-image-item-container:nth-child(2) {
    .project-detail__mobile-image-item {
      margin-top: $stairSpace;
      margin-bottom: $stairSpace;
    }
  }

  .project-detail__mobile-image-item-container:nth-child(3) {
    .project-detail__mobile-image-item {
      margin-top: $doubleStairSpace;
    }
  }
}

// @screen lg {
// }
</style>
