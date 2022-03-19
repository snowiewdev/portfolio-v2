<template>
  <div class="noise"></div>
</template>

<script>
export default {
  name: "NoiseBackground",
};
</script>

<style lang="scss" scoped>
.noise::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(./assets/gif/noise.gif);
  opacity: 0.06;
  z-index: 999;
  pointer-events: none;
}

.dark {
  .noise::before {
    opacity: 0.04;
  }
}
</style>
