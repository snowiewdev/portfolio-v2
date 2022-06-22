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

export default {
  head() {
    return {
      title: "Projects",
    };
  },
  data() {
    return {
      projects: data.projects,
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
    this.$root.$refs.customCursor.initActiveCursorDetection();
  },
  methods: {},
};
</script>

<style>
/*  */
</style>
