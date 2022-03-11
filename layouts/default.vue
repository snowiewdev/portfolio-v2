<template>
  <div class="layout-container">
    <CustomCursor />
    <NoiseBackground />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import NoiseBackground from "@/components/NoiseBackground.vue";
import CustomCursor from "@/components/CustomCursor.vue";

export default {
  components: {
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
  max-width: 100%;
  margin: 0 auto;
}
</style>
