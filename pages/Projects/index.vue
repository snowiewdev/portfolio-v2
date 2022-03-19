<!-- Projects -->
<template>
  <div class="projects-container">
    <PageTitleSection
      :section-number="2"
      title="Projects"
      index-style="chapter"
    >
    </PageTitleSection>

    <ProjectListSection :projects="projects"> </ProjectListSection>

    <NextSection title="About" url="about" type="chapter"> </NextSection>
  </div>
</template>

<script>
import PageTitleSection from "~/components/PageTitleSection.vue";
import ProjectListSection from "~/components/ProjectListSection.vue";
import NextSection from "~/components/NextSection.vue";
import data from "~/assets/data/projects.json";

export default {
  data() {
    return {
      projects: data.projects,
    };
  },
  components: {
    PageTitleSection,
    ProjectListSection,
    NextSection,
  },
};
</script>

<style>
/*  */
</style>
