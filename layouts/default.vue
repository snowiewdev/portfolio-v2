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
import Footer from "@/components/Footer.vue";
import NoiseBackground from "@/components/NoiseBackground.vue";
import CustomCursor from "@/components/CustomCursor.vue";

export default {
  components: {
    Loader,
    Header,
    Footer,
    NoiseBackground,
    CustomCursor,
  },
  data() {
    return {};
  },
};
</script>

<style>
.layout-container {
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
}
</style>
