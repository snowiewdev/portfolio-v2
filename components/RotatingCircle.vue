<template>
  <!-- src="~/assets/image/explore-circle-black.svg" -->
  <div
    class="rotating-circle absolute transition-style-1"
    :class="location"
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
    location: {
      type: String,
      default: "", // contact
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

.rotating-circle.contact {
  background-image: url("~assets/image/contact-circle-black.png");
}

.dark {
  .rotating-circle {
    background-image: url("~assets/image/explore-circle-white.png");
    background-size: cover;
  }

  .rotating-circle.contact {
    background-image: url("~assets/image/contact-circle-white.png");
  }
}

@screen lg {
  .rotating-circle {
    width: 300px;
    height: 300px;
  }

  .rotating-circle.contact {
    width: 260px;
    height: 260px;
  }
}
</style>
