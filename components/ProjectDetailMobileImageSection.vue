<template>
  <div
    data-scroll
    data-scroll-class="reveal"
    data-scroll-offset="30%"
    class="project-detail__mobile-image-section mx-auto fade-in"
  >
    <ProjectDetailMobileImageItem
      v-for="(projectImage, index) in projectImages"
      :key="'project-mobile-image-item-' + index"
      :images="projectImage"
      :id="'project-mobile-image-item-' + index"
      data-scroll
      :data-scroll-speed="staggerSpeed(index)"
    >
    </ProjectDetailMobileImageItem>
  </div>
</template>

<script>
import ProjectDetailMobileImageItem from "~/components/ProjectDetailMobileImageItem.vue";

export default {
  name: "ProjectDetailMobileImageSection",
  props: {
    projectImages: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ProjectDetailMobileImageItem,
  },
  methods: {
    staggerSpeed(index) {
      if (typeof window !== "undefined") {
        if (document.body.clientWidth < 540) {
          return 0;
        }
        return -0.2 * (index + 1);
      }
    },
  },
};
</script>

<style>
.project-detail__mobile-image-section {
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: row;
  padding: 30px 0.5rem;
  gap: 0.5rem;
}

@screen xs {
  .project-detail__mobile-image-section {
    padding: 60px 1.5rem;
    gap: 1.5rem;
  }
}

@screen md {
  .project-detail__mobile-image-section {
    flex-direction: row;
    padding: 65px 2rem;
    gap: 2rem;
  }
}
</style>
