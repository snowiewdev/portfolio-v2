<template>
  <a class="rotating-link" :href="link" target="_blank">
    <div>
      <span class="rotating-link-text">{{ text }}</span>
    </div>
  </a>
</template>

<script>
export default {
  name: "RotatingLink",
  props: {
    text: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "#",
    },
    // style:{
    //   type: String,
    //   default: "",
    // }
  },
  mounted() {
    this.initRotatingLink();
  },
  methods: {
    initRotatingLink() {
      const rotatingLink = document.querySelector(".rotating-link");
      const rotatingLinkText = document.querySelector(".rotating-link-text");

      // create an array with splitted text
      let wordArray = rotatingLinkText.innerText.split("");
      rotatingLink.children[0].innerHTML = "";
      wordArray.forEach((letter, index) => {
        let char = letter == "-" ? "&nbsp;" : letter;
        rotatingLink.children[0].innerHTML += `<span style="--index: ${index};">${char}</span>`;
      });

      let cloneDiv = rotatingLink.children[0].cloneNode(true);
      cloneDiv.style.position = "absolute";
      cloneDiv.style.top = "0";
      cloneDiv.style.left = "0";
      rotatingLink.appendChild(cloneDiv);
    },
  },
};
</script>

<style lang="scss">
.rotating-link {
  user-select: none;
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  line-height: 1;
  display: block;
  position: relative;
  font-family: $header-font;
}

@mixin rotating-text($index) {
  display: inline-block;
  will-change: transform; // alert browser about change
  transform-style: preserve-3d;
  transition: 0.3s;
  transition-delay: calc(0.03s * var(--index));
  transition-timing-function: ease-in;
}

.rotating-link > div:nth-child(1) span {
  @include rotating-text(var(--index));
  transform-origin: bottom;
}

.rotating-link > div:nth-child(2) span {
  @include rotating-text(var(--index));
  transform-origin: top;
  transform: translate3d(0, 100%, 0) rotateX(-90deg);
}

.rotating-link:hover > div:nth-child(1) span {
  transform: translate3d(0, -100%, 0) rotateX(-90deg);
}

.rotating-link:hover > div:nth-child(2) span {
  transform: translate3d(0, 0%, 0) rotateX(0deg);
}
</style>
