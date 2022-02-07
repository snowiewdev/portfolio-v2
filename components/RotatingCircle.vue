<template>
  <img
    class="rotating-circle transition-style-1"
    src=""
    loading="lazy"
    alt=""
  />
</template>

<script>
export default {
  name: "RotatingCircle",
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.rotating-circle {
  animation: 20s linear infinte rotation;
}
</style>
