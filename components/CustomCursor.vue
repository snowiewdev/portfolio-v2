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
      let cursorScale = document.querySelectorAll("a, .cursor-scale");

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
          cursorLazy.classList.add("border-hide");

          if (link.classList.contains("small")) {
            cursor.classList.remove("grow");
            cursor.classList.add("grow-small");
          }
        });

        link.addEventListener("mouseleave", () => {
          cursor.classList.remove("grow");
          cursorLazy.classList.remove("border-hide");

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
  position: relative;
  max-width: 100vw;
  height: 100%;
  overflow-x: hidden;
}

.cursor,
.cursor-lazy {
  // position: absolute;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate3d(-50%, -50%, 0) scale(1);
  pointer-events: none;
  border-radius: 50%;
  z-index: 998;
  mix-blend-mode: difference;
  filter: invert(1);
  // mix-blend-mode: difference;
}

.cursor {
  width: 10px;
  height: 10px;
  // background: $light-primary;
  background: $dark-primary;
  transition-duration: 0ms;
  transition-timing-function: ease-out;
}

.cursor-lazy {
  width: 45px;
  height: 45px;
  // border: 2px solid $light-primary;
  border: 2px solid $dark-primary;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
  opacity: 1;
}

.dark {
  .cursor {
    background: $light-primary;
  }

  .cursor-lazy {
    border-color: $light-primary;
  }

  .cursor,
  .cursor-lazy {
    filter: none;
  }
}

.grow {
  transform: translate3d(-50%, -50%, 0) scale(4);
  background: white;
  mix-blend-mode: difference;
  filter: none;
  border: none;
}

.border-hide {
  opacity: 0;
  transform: translate3d(-50%, -50%, 0) scale(0);
}
</style>
