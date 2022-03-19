<template>
  <div class="project-list-section box-spacing">
    <div class="hover-img-wrapper">
      <div class="hover-img-placeholder">
        <img src="" alt="" />
      </div>
    </div>

    <div
      v-for="project in projects"
      :key="project.id"
      class="project-list-item"
    >
      <a
        class="img-hover-effect-link"
        :href="'project/' + project.id"
        :data-src="project.imgUrl"
      >
        <h4 class="project-list-item__index">{{ project.id }}</h4>
        <h2 class="project-list-item__title">{{ project.projectName }}</h2>
        <p class="project-list-item__content">{{ project.type }}</p>
      </a>
      <div class="project-list-item__divider"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectListSection",
  props: {
    projects: {
      type: Array,
      default: [],
    },
  },
  computed: {
    firstItem() {
      return this.projects[0];
    },
  },
};
</script>

<style lang="scss">
.project-list-section {
  width: 100%;
  margin: 0 auto;
}
</style>
