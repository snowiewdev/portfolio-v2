<!-- Project Details -->
<template>
  <div class="project-detail-container">
    <PageTitleSection
      :section-number="project.id"
      :title="project.projectName"
      index-style="romans"
    >
    </PageTitleSection>

    <NextSection
      :title="nextProject.projectName"
      :url="nextProject.url"
      :type="nextProject.type"
    >
    </NextSection>
  </div>
</template>

<script>
import PageTitleSection from "~/components/PageTitleSection.vue";
import NextSection from "~/components/NextSection.vue";
import projects from "~/assets/data/projectDetail.json";

export default {
  head() {
    return {
      title: "Project | Snowie Wong",
    };
  },
  data() {
    return {
      project: {},
      nextProject: {},
    };
  },
  created() {
    this.getCurrentProject();
    this.getNextProject();
  },
  components: {
    PageTitleSection,
    NextSection,
  },
  methods: {
    getCurrentProject() {
      let currentDataKey = this.$route.params.id;
      let currentProject = projects[currentDataKey];
      // console.log(currentProject);

      if (currentProject == undefined) {
        return this.$router.push("/404");
      }

      this.project = currentProject;
    },
    getNextProject() {
      let nextDataKey = Number(this.$route.params.id) + 1;
      let nextProject = projects[nextDataKey];
      let aboutSection = {
        url: "about",
        projectName: "About",
        type: "chapter",
      };

      // console.log(nextDataKey);
      // console.log(nextProject);
      if (nextProject == undefined) {
        return (this.nextProject = aboutSection);
      }

      nextProject.type = "project";
      nextProject.url = `/projects/${nextProject.id}`;
      this.nextProject = nextProject;
    },
  },
};
</script>

<style>
/*  */
</style>
