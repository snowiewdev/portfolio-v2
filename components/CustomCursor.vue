<template>
  <div>
    <div class="cursor"></div>
    <div class="cursor-lazy"></div>
  </div>
</template>

<script>
export default {
  name: "CustomCursor",
  mounted() {
    this.setUpCursor();
  },
  methods: {
    setUpCursor() {
      let cursor = document.querySelector(".cursor");
      let cursorLazy = document.querySelector(".cursor-lazy");
      let cursorScale = document.querySelectorAll(".cursor-scale");

      const editCursor = (event, target) => {
        target.style.top = event.clientY + "px";
        target.style.left = event.clientX + "px";
      };

      window.addEventListener("mousemove", (event) => {
        editCursor(event, cursor);
        editCursor(event, cursorLazy);
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
  cursor: none;
  // cursor: url("https://ia601409.us.archive.org/7/items/minikoo/minikoo.svg"),
  // pointer;
  overflow: hidden;
}

.cursor,
.cursor-lazy {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate3d(-50%, -50%, 0);
  pointer-events: none;
  border-radius: 50%;
  z-index: 1000;
}

.cursor {
  width: 10px;
  height: 10px;
  background: $black;
  transition-duration: 0ms;
}

.cursor-lazy {
  width: 45px;
  height: 45px;
  border: 2px solid $black;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
}

.dark {
  .cursor {
    background: $white;
  }

  .cursor-lazy {
    border-color: $white;
  }
}

.cursor-scale {
  transform: scale(2);
  background: white;
  mix-blend-mode: difference;
  border: none;
}
</style>
