<!-- Home -->
<template>
  <div
    class="home-page-container relative flex flex-col justify-center align-center"
  >
    <h4 class="">ch.01</h4>
    <h1 class="home-page-main-text">
      Creative <br />
      Web Developer
    </h1>
    <p>Explore My Journey</p>
    <div class="flex justify-center align-center py-6">
      <nuxt-link to="/projects"><Eye /></nuxt-link>
    </div>
    <rotating-circle class="rotating-circle-1"> </rotating-circle>
    <rotating-circle class="rotating-circle-2"> </rotating-circle>
  </div>
</template>

<script>
import Eye from "~/components/Eye.vue";
import RotatingCircle from "~/components/RotatingCircle.vue";

export default {
  name: "IndexPage",
  head: {
    title: "Web Portfolio",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Snowie Wong - A Web Developer based in Hong Kong",
      },
    ],
  },
  // transition: "intro",
  components: {
    Eye,
    RotatingCircle,
  },
  methods: {},
};
</script>

<style scoped lang="scss">
body {
  overflow: hidden;
}

.home-page-container {
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  text-align: center;
  overflow: hidden;
}

.home-page-main-text {
  font-size: clamp(2.4rem, 5vw, 6rem);
  line-height: 1.3;
  margin-top: 2rem;
  margin-bottom: 3rem;
}

.rotating-circle-1 {
  top: 7%;
  right: -70px;
  animation-direction: reverse;
}

.rotating-circle-2 {
  bottom: 7%;
  left: -70px;
}

@screen lg {
  .rotating-circle-1 {
    top: 10%;
    right: -7%;
  }

  .rotating-circle-2 {
    bottom: 10%;
    left: -7%;
  }
}
</style>
