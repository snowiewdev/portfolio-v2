<template>
  <div class="layout-container">
    <Loader />
    <CustomCursor />
    <NoiseBackground />
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Header from "@/components/Header.vue";
import NoiseBackground from "@/components/NoiseBackground.vue";
import CustomCursor from "@/components/CustomCursor.vue";

export default {
  components: {
    Loader,
    Header,
    NoiseBackground,
    CustomCursor,
  },
  data() {
    return {};
  },
};
</script>

<style>
/* html,
body {
  height: 100%;
  overflow: hidden;
} */

.layout-container {
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
}

/* default page transition needed -> stop nuxt jumping in too fast & showing next section, lol */
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
