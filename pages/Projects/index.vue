<!-- Projects -->
<template>
  <SmoothScroll>
    <div class="projects-container">
      <PageTitleSection
        :section-number="2"
        title="Projects"
        index-style="chapter"
      >
      </PageTitleSection>

      <ProjectListSection :projects="projects"> </ProjectListSection>

      <NextSection title="About" url="about" type="chapter"> </NextSection>

      <Footer />
    </div>
  </SmoothScroll>
</template>

<script>
import SmoothScroll from "~/components/SmoothScroll.vue";
import PageTitleSection from "~/components/PageTitleSection.vue";
import ProjectListSection from "~/components/ProjectListSection.vue";
import NextSection from "~/components/NextSection.vue";
import Footer from "@/components/Footer.vue";
import data from "~/assets/data/projects.json";

import imagesLoaded from "imagesloaded";

export default {
  head() {
    return {
      title: "Projects",
    };
  },
  data() {
    return {
      projects: data.projects,
      scroll: null,
    };
  },
  components: {
    SmoothScroll,
    PageTitleSection,
    ProjectListSection,
    NextSection,
    Footer,
  },
  mounted() {
    this.locomotiveScrollInit();
    this.$root.$refs.customCursor.initActiveCursorDetection();
  },
  beforeDestroy() {
    this.scroll.destroy();
  },
  methods: {
    locomotiveScrollInit() {
      let scrollContainer = document.querySelector("[data-scroll-container]");

      this.scroll = new this.$LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        getDirection: true,
        mobile: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      // to fix locomotive bug on setting up too early (img not yet loaded)
      imagesLoaded(scrollContainer, { background: true }, () => {
        this.scroll.update();
      });
    },
  },
};
</script>

<style>
/*  */
</style>
