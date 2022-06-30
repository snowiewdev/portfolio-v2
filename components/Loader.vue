<template>
  <div class="loader">
    <div class="page-transition">
      <div class="page-transition-content">
        <template v-if="target.name == 'Home'">
          <h3 class="mb-4">Snowie Wong</h3>
          <h2 class="mb-8">Web Portfolio</h2>
          <Welcome class="mb-12"></Welcome>
          <h4 class="mb-8 uppercase explore-line">
            Explore My Journey <br />
            © 2021-22
          </h4>
          <h4 clsss="mx-4">#webDev #welcome #fruitfulYear #catsAreCute</h4>
        </template>
        <template v-else>
          <h2 class="mb-8">{{ target.name }}</h2>
          <h4 clsss="mx-4">{{ target.hashtag }}</h4>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";
import PathObject from "@/assets/data/pageMeta.json";
import gsap from "gsap";

export default {
  name: "Loader",
  data() {
    return {
      target: {
        name: "Home",
        hashtag: "",
      },
      pathObject: PathObject,
    };
  },
  components: {
    Welcome,
  },
  watch: {
    $route(to, from) {
      // console.log(to, from);
      // Page Transition Here
      this.target = this.pathObject[to.path];
      this.startCover();
      setTimeout(() => {
        this.startLeave();
      }, 1800);
    },
  },
  created() {
    this.$root.$refs.loader = this;
  },
  mounted() {
    this.firstEntryLoading();
  },
  methods: {
    animation() {
      const tl = gsap.timeline();
      tl.to(".page-transition-content", {
        opacity: 0,
        y: -50,
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
      tl.to(".page-transition-content", {
        y: 0,
      });
    },
    firstEntryLoading() {
      setTimeout(this.animation, 2500);
    },
    startCover() {
      const coverTl = gsap.timeline();
      let pageTransitionHeight =
        document.querySelector(".page-transition").parentNode.offsetHeight;
      coverTl.set(".page-transition", {
        top: "auto",
        bottom: 0,
      });
      coverTl.to(".page-transition", {
        height: pageTransitionHeight,
        ease: "Power3.inOut",
        duration: 0.3,
      });
      coverTl.to(".page-transition-content", {
        opacity: 1,
        ease: "Power3.inOut",
        duration: 0.3,
      });
    },
    startLeave() {
      const tl = gsap.timeline();
      tl.set(".page-transition", {
        top: 0,
        bottom: "auto",
      });
      tl.to(".page-transition-content", {
        opacity: 0,
        y: -50,
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
      tl.to(".page-transition-content", {
        y: 0,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  cursor: auto;
}

.loader {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  height: 100vh;
  z-index: 999;
}

.page-transition {
  position: absolute;
  top: 0;
  left: 0;
  background-color: $dark-primary;
  color: $light-primary;
  width: 100%;
  height: 100%;
  pointer-events: none;

  h2,
  h3,
  h4 {
    @apply text-white dark:text-black text-center;
  }

  h3 {
    font-size: 1.2rem;
  }

  h4 {
    font-size: 1rem;
  }

  .explore-line {
    font-family: $body-font;
  }
}

// .page-transition.anim-in {
//   animation: 0.4s cubic-bezier(0.535, 0, 0, 1) heightUp;
//   animation-fill-mode: forwards;
// }

// .page-transition.anim-out {
//   top: 0;
//   bottom: auto;
//   animation: 0.4s cubic-bezier(0.535, 0, 0, 1) heightDown;
//   // animation-fill-mode: forwards;
// }

.page-transition-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

// .page-transition-content.anim-in {
//   animation-delay: 0.3s;
//   animation: 0.3s cubic-bezier(0.535, 0, 0, 1) fadeInUp;
//   animation-fill-mode: forwards;
// }

// .page-transition-content.anim-out {
//   animation: 0.3s cubic-bezier(0.535, 0, 0, 1) fadeOutUp;
// }

.dark {
  .page-transition {
    background-color: $light-primary;
  }
}

// @keyframes heightUp {
//   from {
//     height: 0;
//   }
//   to {
//     height: 100%;
//   }
// }

// @keyframes heightDown {
//   from {
//     height: 100%;
//   }
//   to {
//     height: 0;
//   }
// }

// @keyframes fadeInUp {
//   from {
//     opacity: 0;
//     transform: translateY(200px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// @keyframes fadeOutUp {
//   from {
//     opacity: 1;
//     transform: translateY(0);
//   }
//   to {
//     opacity: 0;
//     transform: translateY(-200px);
//   }
// }
</style>
