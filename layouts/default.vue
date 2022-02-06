<template>
  <div class="grid">
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

export default {
  components: {
    Header,
    Footer,
    NoiseBackground,
  },
};
</script>

<style></style>
