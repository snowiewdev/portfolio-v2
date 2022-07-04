<template>
  <div class="next-section" :class="type">
    <h4 class="next-section__subtitle cursor-scale" @click="goToUrl(url)">
      {{ subtitle }}
    </h4>
    <h2 class="next-section__title cursor-scale" @click="goToUrl(url)">
      {{ title }}
    </h2>
    <img
      data-scroll
      data-scroll-repeat
      data-scroll-offset="50%, 50%"
      v-if="imgUrl.length > 0"
      class="next-section__img"
      :src="getImgUrl(imgUrl)"
      :alt="title"
    />
  </div>
</template>

<script>
export default {
  name: "NextSection",
  props: {
    url: {
      type: String,
      default: "",
    },
    imgUrl: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "chapter", // "chapter", "project"
    },
  },
  computed: {
    subtitle() {
      switch (this.type) {
        case "chapter":
          return "Next Chapter";
        case "project":
          return "Next Project";
        default:
          return "Next Chapter";
      }
    },
  },
  methods: {
    goToUrl(url) {
      this.$router.push({ path: url });
    },
    getImgUrl(img) {
      return require(`~/assets/image/${img}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.next-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  max-height: 480px;
  width: 85vw;
  max-width: 768px;
  margin: 0 auto;
  position: relative;
}

.next-section__subtitle {
  font-size: 1.25rem;
  text-transform: uppercase;
  font-family: $body-font;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    display: block;
    width: 75px;
    height: 1.5px;
    background-color: $dark-primary;
    margin-left: 1rem;
  }
}

.next-section__title {
  font-size: clamp(2.4rem, 6vw, 6.5rem);
  text-align: right;
}

.next-section__img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 80%;
  aspect-ratio: 3 / 4;
  max-width: 300px;
  object-fit: cover;
  opacity: 0.4;
  z-index: -1;
  transform: translateX(-50%);
  transform-origin: 50% 100%;
  will-change: clip-path;
  clip-path: inset(0 0 100% 0);
  transition: clip-path 0.6s cubic-bezier(0.79, 0.14, 0.15, 0.86);
}

.is-inview.next-section__img {
  clip-path: inset(0 0 0 0);
}

// dark mode
.dark {
  .next-section__subtitle {
    &::after {
      background-color: $light-primary;
    }
  }
}

@screen md {
  .next-section__img {
    left: 10%;
    height: 90%;
    transform: none;
  }

  .next-section__subtitle {
    font-size: 2rem;

    &::after {
      width: 100px;
    }
  }

  .projects-container,
  .chapter {
    .next-section__img {
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
