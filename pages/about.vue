<!-- About -->
<template>
  <div class="about-container">
    <PageTitleSection :section-number="3" title="About" index-style="chapter">
    </PageTitleSection>
    <FullWidthImageSection src="" alt=""></FullWidthImageSection>
  </div>
</template>

<script>
import PageTitleSection from "~/components/PageTitleSection.vue";
import FullWidthImageSection from "~/components/FullWidthImageSection.vue";

export default {
  data() {
    return {};
  },
  components: {
    PageTitleSection,
    FullWidthImageSection,
  },
};
</script>

<style>
/*  */
</style>
