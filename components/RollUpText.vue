<template>
  <span class="roll-up-text" :data-hover="hoverShowText">
    {{ text }}
  </span>
</template>

<script>
export default {
  name: "RollUpText",
  props: {
    text: {
      type: String,
      default: "",
    },
    hoverShowText: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.roll-up-text {
  font-family: $header-font;
  @apply text-black dark:text-white;
}

.roll-up-text {
  display: inline-block;
  will-change: transform;
  transition: transform 0.3s ease-in-out;
  position: relative;

  &::before {
    position: absolute;
    text-align: center;
    content: attr(data-hover);
    top: 105%;
  }

  &:hover {
    transform: translate3d(0, -105%, 0);
  }
}
</style>
