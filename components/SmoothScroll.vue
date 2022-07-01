<template>
  <div data-scroll-container>
    <slot></slot>
  </div>
</template>

<script>
import imagesLoaded from "imagesloaded";

export default {
  name: "SmoothScroll",
  data() {
    return {
      scroll: null,
      resizeObserver: null,
    };
  },
  created() {
    this.$root.$refs.smoothScroll = this;
  },
  mounted() {
    // console.log("smoothScroll setup");
    this.locomotiveScrollInit();
  },
  beforeDestroy() {
    this.scroll.destroy();
    this.resizeObserver.disconnect();
  },
  methods: {
    locomotiveScrollInit() {
      let scrollContainer = document.querySelector("[data-scroll-container]");

      this.scroll = new this.$LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        inertia: 0.8,
        getDirection: true,
        mobile: {
          breakpoint: 0,
          inertia: 0.8,
          smooth: true,
        },
        tablet: {
          breakpoint: 0,
          inertia: 0.8,
          smooth: true,
        },
      });

      // to fix locomotive bug on setting up too early (img not yet loaded)
      imagesLoaded(scrollContainer, { background: true }, () => {
        this.scroll.update();
      });

      // to fix locomotive resize calculate page height wrongly
      this.resizeObserver = new ResizeObserver(() => {
        this.scroll.update();
      });

      this.resizeObserver.observe(scrollContainer);
    },
  },
};
</script>
