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

      <FullWidthImageSection
        :desktop-src="project.coverImage.desktopUrl"
        :mobile-src="project.coverImage.mobileUrl"
        :alt="project.coverImage.alt"
      ></FullWidthImageSection>

      <ProjectDetailMeta :project="project"></ProjectDetailMeta>

      <ProjectDetailVideoSection
        v-if="project.video.videoUrl"
        :video-url="project.video.videoUrl"
      ></ProjectDetailVideoSection>

      <HoverAndSeeMore></HoverAndSeeMore>

      <ProjectDetailImageHoverSection
        :project-images="project.projectImages"
      ></ProjectDetailImageHoverSection>

      <MarqueeSection
        :topContent="topMarqueeText"
        :bottomContent="bottomMarqueeText"
      >
      </MarqueeSection>

      <ProjectDetailMobileImageSection :project-images="project.mobileImages">
      </ProjectDetailMobileImageSection>

      <NextSection
        :title="nextProject.projectName"
        :url="nextProject.url"
        :type="nextProject.type"
      >
      </NextSection>

      <!-- <pre> {{ project }} </pre> -->

      <Footer />
    </div>
  </SmoothScroll>
</template>

<script>
import SmoothScroll from "~/components/SmoothScroll.vue";
import PageTitleSection from "~/components/PageTitleSection.vue";
import FullWidthImageSection from "~/components/FullWidthImageSection.vue";
import ProjectDetailMeta from "~/components/ProjectDetailMeta.vue";
import ProjectDetailVideoSection from "~/components/ProjectDetailVideoSection.vue";
import HoverAndSeeMore from "~/components/HoverAndSeeMore.vue";
import ProjectDetailImageHoverSection from "~/components/ProjectDetailImageHoverSection.vue";
import MarqueeSection from "~/components/MarqueeSection.vue";
import NextSection from "~/components/NextSection.vue";
import projects from "~/assets/data/projectDetail.json";
import Footer from "@/components/Footer.vue";

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
      topMarqueeText: "Responsive Design & Responsive Design & ",
      bottomMarqueeText: "Web Development & Web Development & ",
    };
  },
  created() {
    this.getCurrentProject();
    this.getNextProject();
  },
  components: {
    SmoothScroll,
    PageTitleSection,
    FullWidthImageSection,
    ProjectDetailMeta,
    ProjectDetailVideoSection,
    HoverAndSeeMore,
    ProjectDetailImageHoverSection,
    MarqueeSection,
    NextSection,
    Footer,
  },
  mounted() {
    this.$root.$refs.customCursor.removeCursorActiveStyle();
    this.$root.$refs.customCursor.initActiveCursorDetection();
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
  },
};
</script>

<style>
/*  */
</style>
