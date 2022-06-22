<template>
  <div class="marquee-container my-8 mx-auto">
    <PrimaryDivider border-style="medium"></PrimaryDivider>
    <Marquee :content="topContent" type="top"> </Marquee>

    <PrimaryDivider border-style="medium"></PrimaryDivider>

    <Marquee :content="bottomContent" type="bottom"> </Marquee>
    <PrimaryDivider border-style="medium"></PrimaryDivider>
  </div>
</template>

<script>
import PrimaryDivider from "./PrimaryDivider.vue";
import Marquee from "./Marquee.vue";

export default {
  name: "MarqueeSection",
  props: {
    topContent: {
      type: String,
    },
    bottomContent: {
      type: String,
    },
  },
  components: {
    PrimaryDivider,
    Marquee,
  },
};
</script>

<style style="scss">
.marquee-container {
  max-width: 1440px;
}
</style>
