<template>
  <div class="layout-container">
    <Loader />
    <CustomCursor />
    <NoiseBackground />
    <Header />
    <Nuxt />
    <Footer />
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
};
</script>

<style>
.layout-container {
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
}
</style>
