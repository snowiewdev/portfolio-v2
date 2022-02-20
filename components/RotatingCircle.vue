<template>
  <!-- src="~/assets/image/explore-circle-black.svg" -->
  <div
    class="rotating-circle absolute transition-style-1"
    alt="explore-circle"
  ></div>
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
  width: 200px;
  height: 200px;
  background: url("~assets/image/explore-circle-black.png") no-repeat center
    center;
  background-size: cover;
  animation: 20s linear infinite rotation;
}

.dark {
  .rotating-circle {
    background-image: url("~assets/image/explore-circle-white.png");
    background-size: cover;
  }
}

@screen lg {
  .rotating-circle {
    width: 300px;
    height: 300px;
  }
}
</style>
