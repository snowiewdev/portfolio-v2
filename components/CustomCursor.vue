<template>
  <div>
    <div class="cursor"></div>
    <div class="cursor-lazy"></div>
  </div>
</template>

<script>
export default {
  name: "CustomCursor",
  data() {
    return {
      cursor: null,
      cursorLazy: null,
      cursorScale: null,
    };
  },
  created() {
    this.$root.$refs.customCursor = this;
  },
  mounted() {
    this.setUpCursor();
    this.initActiveCursorDetection();
  },
  watch: {
    $route(to, from) {
      // console.log("before change route");
      this.removeCursorActiveStyle();
      this.removeActiveCursorDetection();
    },
  },
  methods: {
    editCursor(event, target) {
      target.style.top = event.clientY + "px";
      target.style.left = event.clientX + "px";
    },
    addCursorActiveStyle(trigger) {
      this.cursor.classList.add("grow");
      this.cursorLazy.classList.add("border-hide");

      if (trigger.classList.contains("small")) {
        this.cursor.classList.remove("grow");
        this.cursor.classList.add("grow-small");
      }
    },
    removeCursorActiveStyle() {
      this.cursor.classList.remove("grow");
      this.cursorLazy.classList.remove("border-hide");
      this.cursor.classList.remove("grow-small");
    },
    setUpCursor() {
      this.cursor = document.querySelector(".cursor");
      this.cursorLazy = document.querySelector(".cursor-lazy");

      window.addEventListener("mousemove", (event) => {
        this.editCursor(event, this.cursor);
        this.editCursor(event, this.cursorLazy);
      });
    },
    initActiveCursorDetection() {
      this.cursorScale = document.querySelectorAll("a, .cursor-scale");

      this.cursorScale.forEach((link) => {
        link.addEventListener("mousemove", () => {
          this.addCursorActiveStyle(link);
        });
        link.addEventListener("mouseleave", () => {
          this.removeCursorActiveStyle();
        });
      });
    },
    removeActiveCursorDetection() {
      this.cursorScale.forEach((link) => {
        link.removeEventListener("mousemove", () => {
          this.addCursorActiveStyle(link);
        });
        link.removeEventListener("mouseleave", () => {
          this.removeCursorActiveStyle();
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
