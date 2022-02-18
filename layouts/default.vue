<template>
  <div class="grid">
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

<style></style>
