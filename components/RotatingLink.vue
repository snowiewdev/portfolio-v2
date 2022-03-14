<template>
  <a
    :id="id"
    class="rotating-link"
    :class="typeClass"
    :href="link"
    target="_blank"
  >
    <div>
      <span class="rotating-link-text">{{ text }}</span>
    </div>
  </a>
</template>

<script>
export default {
  name: "",
  props: {
    id: {
      type: String,
      default: "rotatingLink",
    },
    text: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "#",
    },
    type: {
      type: String,
      default: "title", // title, body
    },
  },
  mounted() {
    this.initRotatingLink();
  },
  computed: {
    typeClass() {
      return `rotating-link-${this.type}`;
    },
  },
  methods: {
    initRotatingLink() {
      const rotatingLink = document.querySelector("#" + this.id);
      const rotatingLinkText = document.querySelector(
        "#" + this.id + " .rotating-link-text"
      );

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
.rotating-link-title span {
  // font-family: $header-font;
  font-size: clamp(1.6rem, 4vw, 2.5rem);
}

.rotating-link-body span {
  // font-family: $body-font;
  font-size: clamp(1rem, 2vw, 1.2rem);
}

.rotating-link {
  user-select: none;
  text-align: center;
  line-height: 1;
  display: block;
  position: relative;
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
