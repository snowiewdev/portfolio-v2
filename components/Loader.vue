<template>
  <div class="loader">
    <div class="page-transition">
      <div class="page-transition-content">
        <template v-if="currentPage == 'index'">
          <h4 class="uppercase">Snowie Wong Portfolio</h4>
          <h1 id="percent">{{ percent }}%</h1>
          <h4 class="uppercase explore-line">Explore My Journey</h4>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Loader",
  data() {
    return {
      percent: 0,
      loader: 0,
    };
  },
  mounted() {
    // uncomment for loading event
    // this.loading();
  },
  computed: {
    currentPage() {
      return this.$route.name;
    },
  },
  methods: {
    animation() {
      const tl = gsap.timeline();
      tl.to(".page-transition-content", {
        opacity: 0,
        duration: 0.3,
      });
      tl.to(
        ".page-transition",
        {
          height: 0,
          ease: "Power3.inOut",
          duration: 0.3,
        },
        "+=0.2"
      );
    },
    loading() {
      this.loader = setInterval(this.frame, 15);
      setTimeout(this.animation, 1800);
    },
    frame() {
      if (this.percent >= 100) {
        clearInterval(this.loader);
        return;
      }

      this.percent++;
    },
  },
};
</script>

<style lang="scss">
.loader {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  // height: 100vh;
  z-index: 999;
}

.page-transition {
  position: absolute;
  top: 0;
  background-color: $dark-primary;
  color: $light-primary;
  width: 100%;
  height: 100%;
  pointer-events: none;

  h1,
  h4 {
    @apply text-white dark:text-black text-center;
  }

  .explore-line {
    font-family: $body-font;
  }
}

.page-transition-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
}

.dark {
  .page-transition {
    background-color: $light-primary;
  }
}
</style>
