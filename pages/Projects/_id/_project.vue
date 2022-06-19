<!-- Project Details -->
<template>
  <SmoothScroll>
    <div class="project-detail-container relative">
      <PageTitleSection
        :section-number="project.id"
        :title="project.projectName"
        index-style="romans"
      >
      </PageTitleSection>

      <div class="project-detail-cover-image">
        {{ project }}
      </div>

      <NextSection
        :title="nextProject.projectName"
        :url="nextProject.url"
        :type="nextProject.type"
      >
      </NextSection>

      <Footer />
    </div>
  </SmoothScroll>
</template>

<script>
import SmoothScroll from "~/components/SmoothScroll.vue";
import PageTitleSection from "~/components/PageTitleSection.vue";
import NextSection from "~/components/NextSection.vue";
import projects from "~/assets/data/projectDetail.json";
import Footer from "@/components/Footer.vue";

import imagesLoaded from "imagesloaded";

export default {
  head() {
    return {
      title: "Projects",
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://snowiewongdev.com/projects/${this.$route.params.slug}",
        },
      ],
    };
  },
  data() {
    return {
      project: {},
      nextProject: {},
      scroll: null,
    };
  },
  created() {
    this.getCurrentProject();
    this.getNextProject();
  },
  components: {
    SmoothScroll,
    PageTitleSection,
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
        url: "/about",
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
    locomotiveScrollInit() {
      let scrollContainer = document.querySelector("[data-scroll-container]");

      this.scroll = new this.$LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        getDirection: true,
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
