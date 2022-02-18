<template>
  <div>
    <div class="cursor"></div>
    <div class="cursor-point"></div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "CustomCursor",
  mounted() {
    this.setUpCursor();
  },
  methods: {
    setUpCursor() {
      let cursor = document.querySelector(".cursor");
      let cursorPoint = document.querySelector(".cursor-point");
      let cursorScale = document.querySelectorAll(".cursor-scale");
      let mouseX = 0;
      let mouseY = 0;

      gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
          gsap.set(cursor, {
            css: {
              left: mouseX,
              top: mouseY,
            },
          });
        },
      });

      window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      cursorScale.forEach((link) => {
        link.addEventListener("mousemove", () => {
          cursor.classList.add("grow");
          if (link.classList.contains("small")) {
            cursor.classList.remove("grow");
            cursor.classList.add("grow-small");
          }
        });

        link.addEventListener("mouseleave", () => {
          cursor.classList.remove("grow");
          cursor.classList.remove("grow-small");
        });
      });
    },
  },
};
</script>

<style lang="scss">
// hide default cursor
body {
  // cursor: none;
  // cursor: url("https://ia601409.us.archive.org/7/items/minikoo/minikoo.svg"),
  // pointer;
}

.cursor-point {
  position: fixed;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  margin-top: -5px;
  border-radius: 50%;
  background: $black;
  transform-origin: center center;
  pointer-events: none;
}

.cursor {
  position: fixed;
  width: 40px;
  height: 40px;
  margin-left: -20px;
  margin-top: -20px;
  border-radius: 50%;
  border: 2px solid $black;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
  // transition: transform 0.3s ease;
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
