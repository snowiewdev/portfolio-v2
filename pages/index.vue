<!-- Home -->
<template>
  <div class="home-page-container flex flex-col justify-center align-center">
    <h4 class="">ch.01</h4>
    <h1 class="home-page-main-text">
      Creative <br />
      Web Developer
    </h1>
    <p>Explore My Journey</p>
    <div class="flex justify-center align-center py-6">
      <nuxt-link to="/projects"><Eye /></nuxt-link>
    </div>
  </div>
</template>

<script>
import Eye from "~/components/Eye.vue";
import RotatingCircle from "~/components/RotatingCircle.vue";

export default {
  name: "IndexPage",
  components: {
    Eye,
  },
};
</script>

<style scoped lang="scss">
.home-page-container {
  width: 100%;
  height: 100vh;
  text-align: center;
}

.home-page-main-text {
  font-size: clamp(4rem, 5vw, 6rem);
  line-height: 1.3;
  margin-top: 2rem;
  margin-bottom: 3rem;
}
</style>
