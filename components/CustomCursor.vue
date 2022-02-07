<template>
  <div class="cursor"></div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "CustomCursor",
};
</script>

<style lang="scss">
.cursor {
  position: fixed;
  width: 40px;
  height: 40px;
  margin-left: -20px;
  margin-top: -20px;
  border-radius: 50%;
  border: 2px solid $black;
  transition: transform 0.3s ease;
  transform-origin: center center;
  pointer-events: none;
  z-index: 1000;
}

.hover-cursor-grow {
  transform: scale(2);
  background: white;
  mix-blend-mode: difference;
  border: none;
}
</style>
