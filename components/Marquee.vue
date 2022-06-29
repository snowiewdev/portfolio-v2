<template>
  <div class="marquee" :class="marqueeClass">
    <div class="marquee__inner" aria-hidden="true">
      <span v-for="index in marqueeContentIndexArray" :key="index">
        {{ content }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Marquee",
  props: {
    content: {
      type: String,
      default: "Design & Develop & Deliver & ",
    },
    type: {
      type: String,
      default: "top", // "top", "bottom"
    },
  },
  data() {
    return {
      marqueeRepeat: 4,
    };
  },
  computed: {
    marqueeClass() {
      return {
        "top-marquee": this.type == "top",
        "bottom-marquee": this.type == "bottom",
      };
    },
    marqueeContentIndexArray() {
      return Array(this.marqueeRepeat)
        .fill()
        .map((_, index) => index);
    },
  },
};
</script>

<style scoped>
.marquee {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  overflow: hidden;
  --offset: 20vw;
  --item-font-size: 10vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
  margin: 0.5rem 0;
}

.marquee__inner {
  width: fit-content;
  display: flex;
  position: relative;
  transform: translate3d(var(--move-initial), 0, 0);
  animation: marquee 12s linear infinite;
}

.marquee span {
  white-space: nowrap;
  /* font-size: 5vw; */
  font-size: 2rem;
  padding-left: 0.5rem;
}

.bottom-marquee .marquee__inner {
  animation: marquee 12s linear infinite reverse;
}

@keyframes marquee {
  0% {
    transform: translate3d(var(--move-initial), 0, 0);
  }

  100% {
    transform: translate3d(var(--move-final), 0, 0);
  }
}
</style>
