<template>
  <div
    class="project-detail__image-hover-item-container flex mx-auto"
    :class="classObject"
  >
    <!-- @mouseover="afterTextAnimateIn"
      @mouseleave="beforeTextAnimateIn" -->
    <div :id="id" class="project-detail__image-hover-item cursor-scale small">
      <h2 class="project-detail__image-hover-overlay-text overlay-text-before">
        {{ images.before.text }}
      </h2>
      <!-- <h2 class="project-detail__image-hover-overlay-text overlay-text-after">
        {{ images.after.text }}
      </h2> -->
    </div>
  </div>
</template>

<script>
import hoverEffect from "hover-effect";
// import gsap from "gsap";

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
    // this.initTextAnimationSetup();
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
    //   splitText(target) {
    //     let textAnimate = document.querySelector(target);
    //     textAnimate.innerHTML = textAnimate.textContent.replace(
    //       /\S/g,
    //       "<span class='letter'>$&</span>"
    //     );
    //   },
    //   animateText(targetClass, mode) {
    //     let target = document.querySelector(targetClass);
    //     let char = target.querySelectorAll("span");
    //     var tl = gsap.timeline();

    //     if (mode == "in") {
    //       tl.set(char, {
    //         xPercent: 80,
    //       });
    //       tl.set(target, {
    //         autoAlpha: 1,
    //       });
    //       // move in
    //       tl.to(char, {
    //         duration: 1,
    //         opacity: 1,
    //         xPercent: 0,
    //         stagger: 0.04,
    //         ease: "expo.out",
    //       });
    //     }

    //     // move out
    //     if (mode == "out") {
    //       tl.to(char, {
    //         duration: 0.8,
    //         opacity: 0,
    //         xPercent: -80,
    //         stagger: 0.04,
    //         ease: "expo.in",
    //       });
    //     }
    //   },
    //   initTextAnimationSetup() {
    //     let target1 = `#${this.id} .overlay-text-before`;
    //     let target2 = `#${this.id} .overlay-text-after`;

    //     this.splitText(target1);
    //     this.splitText(target2);
    //   },
    //   afterTextAnimateIn() {
    //     let beforeText = `#${this.id} .overlay-text-before`;
    //     let afterText = `#${this.id} .overlay-text-after`;
    //     // this.animateText(beforeText, "out");
    //     this.animateText(afterText, "in");
    //   },
    //   beforeTextAnimateIn() {
    //     let beforeText = `#${this.id} .overlay-text-before`;
    //     let afterText = `#${this.id} .overlay-text-after`;
    //     this.animateText(afterText, "out");
    //     // this.animateText(beforeText, "in");
    //   },
  },
};
</script>

<style lang="scss">
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
  filter: invert(1);
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

.dark {
  .project-detail__image-hover-item-container {
    background: $dark-primary;
  }
  .project-detail__image-hover-overlay-text {
    filter: none;
  }
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

// text animation related
// .overlay-text-before,
// .overlay-text-after {
//   display: flex;
//   overflow: hidden;
//   visibility: hidden;

//   .letter {
//     display: iniline-block;
//     position: relative;
//     overflow: hidden;
//     font-family: $body-font;
//   }
// }

// .overlay-text-before span {
//   opacity: 1;
// }

// .overlay-text-after span {
//   opacity: 0;
// }
</style>
