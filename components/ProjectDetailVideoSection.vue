<template>
  <div class="project-detail__video-container mx-auto mb-8 sm:mb-10">
    <video
      :src="require(`~/assets/image/${videoUrl}`)"
      class="project-detail__video-highlight"
      playsinline
      autoplay
      loop
      muted
      :poster="imgUrl"
    ></video>
  </div>
</template>

<script>
export default {
  name: "ProjectDetailVideoSection.vue",
  props: {
    videoUrl: {
      type: String,
      default: "",
    },
    imgUrl: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.project-detail__video-container {
  width: 98vw;
  max-width: 1400px;
  background: black;
  border: 4px solid black;
  border-radius: 4px;
}

@screen md {
  .project-detail__video-container {
    width: 94vw;
  }
}

@screen lg {
  .project-detail__video-container {
    width: 85vw;
    border: 10px solid black;
    border-radius: 10px;
  }
}
</style>
