<template>
  <div
    class="error-container flex flex-col justify-center align-center w-100 text-center"
  >
    <h2 class="mb-6" v-if="error.statusCode == 404">Page not found</h2>
    <h2 class="mb-6" v-else>Oops, unexpected error has occurred</h2>
    <h4 class="body-font-title error-subtitle px-4 mx-auto">
      This lovely typing cat from Giphy has already tried its very best
    </h4>
    <img
      class="typing-cat my-8 mx-auto"
      src="~/assets/gif/cat-computer.gif"
      alt="Cat is typing"
    />
    <NuxtLink class="underline-effect body-font-title back-home-link" to="/">
      Set It Free & Back Home
      <img src="~/assets/image/arrow.svg" alt="link arrow" />
    </NuxtLink>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  props: ["error"],
  layout: "error",
  components: {
    Footer,
  },
};
</script>

<style scoped>
.error-container {
  height: 100vh;
  height: -webkit-fill-available;
}

.typing-cat {
  width: 50vw;
  max-width: 300px;
}

.back-home-link {
  display: flex;
  align-items: center;
  margin: 0 auto;
}

.error-subtitle {
  max-width: 500px;
}

.back-home-link img {
  margin-left: 4px;
  filter: invert(12%) sepia(10%) saturate(609%) hue-rotate(151deg)
    brightness(94%) contrast(93%);
}

.dark .back-home-link img {
  filter: invert(100%) sepia(0%) saturate(4296%) hue-rotate(62deg)
    brightness(87%) contrast(110%);
}
</style>
