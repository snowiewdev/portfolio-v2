<template>
  <div class="next-section">
    <h4 class="next-section__subtitle">{{ subtitle }}</h4>
    <h2 class="next-section__title" @click="goToUrl(url)">{{ title }}</h2>
    <img src="" alt="" />
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
      this.$router.push(url);
    },
  },
};
</script>

<style lang="scss">
.next-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  max-height: 480px;
  width: 85vw;
  max-width: 768px;
  margin: 0 auto;
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

// dark mode
.dark {
  .next-section__subtitle {
    &::after {
      background-color: $light-primary;
    }
  }
}

@screen md {
  .next-section__subtitle {
    font-size: 2rem;

    &::after {
      width: 100px;
    }
  }
}
</style>
