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
    };
  },
  created() {
    // this.$root.$refs.smoothScroll = this;
  },
  mounted() {
    this.locomotiveScrollInit();
  },
  beforeDestroy() {
    this.scroll.destroy();
  },
  methods: {
    locomotiveScrollInit() {
      let scrollContainer = document.querySelector("[data-scroll-container]");

      this.scroll = new this.$LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        getDirection: true,
        mobile: {
          smooth: true,
          breakpoint: 0,
        },
        tablet: {
          smooth: true,
          breakpoint: 0,
        },
      });

      // to fix locomotive bug on setting up too early (img not yet loaded)
      imagesLoaded(scrollContainer, { background: true }, () => {
        this.scroll.update();
      });
      new ResizeObserver(() => this.scroll.update()).observe(
        document.querySelector("[data-scroll-container]")
      );
    },
  },
};
</script>

<style></style>
