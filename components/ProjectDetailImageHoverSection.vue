<template>
  <div class="project-detail__image-hover-section">
    <ProjectDetailImageHoverItem
      v-for="(projectImage, index) in projectImages"
      :key="'project-image-item-' + index"
      :images="projectImage"
      :id="'project-image-item-' + index"
    >
    </ProjectDetailImageHoverItem>
  </div>
</template>

<script>
import ProjectDetailImageHoverItem from "~/components/ProjectDetailImageHoverItem.vue";

export default {
  name: "ProjectDetailImageHoverSection",
  props: {
    projectImages: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ProjectDetailImageHoverItem,
  },
};
</script>
