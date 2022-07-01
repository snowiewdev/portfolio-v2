<template>
  <span
    data-scroll
    data-scroll-class="highlight-reveal"
    data-scroll-offset="30%"
    class="highlight highlight-span"
    :class="styleClass"
  >
    <slot> </slot>
  </span>
</template>

<script>
export default {
  name: "HighlightSpan",
  props: {
    styleClass: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin highlight($color) {
  &::before {
    background: $color;
  }
}

.highlight {
  position: relative;
  // display: inline;
  display: inline-block;
  padding-right: 4px;
  text-decoration: none;

  &::before {
    position: absolute;
    content: "";
    right: 0;
    left: 0;
    top: 40%;
    // bottom: -5%;
    height: 40%;
    transform-origin: 0 0;
    transition: transform 0.6s ease-in-out;
    transition-delay: 0.2s;
    transform: scaleX(0);
    z-index: -1;
  }
}

.highlight-reveal.highlight {
  &::before {
    transform: scaleX(1);
  }
}

.highlight-mint {
  @include highlight($highlight-1);
}

.highlight-pink {
  @include highlight($highlight-2);
}

.highlight-yellow {
  @include highlight($highlight-3);
}

.highlight-green {
  @include highlight($highlight-4);
}

.dark {
  .highlight-mint {
    @include highlight($dark-highlight-1);
  }

  .highlight-pink {
    @include highlight($dark-highlight-2);
  }

  .highlight-yellow {
    @include highlight($dark-highlight-3);
  }

  .highlight-green {
    @include highlight($dark-highlight-4);
  }
}
</style>
