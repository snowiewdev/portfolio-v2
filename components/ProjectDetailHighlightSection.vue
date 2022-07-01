<template>
  <div
    data-scroll
    data-scroll-class="reveal"
    data-scroll-offset="30%"
    class="project-detail__highlight-container mx-auto mb-8 sm:mb-10 fade-in"
  >
    <video
      v-if="videoUrl.length > 0"
      :src="require(`~/assets/image/${videoUrl}`)"
      class="project-detail__video-highlight"
      playsinline
      autoplay
      loop
      muted
      :poster="imgUrl"
    ></video>
    <img
      v-else
      class="project-detail__image-highlight"
      :src="require(`~/assets/image/${imgUrl}`)"
      alt="project highlight"
    />
  </div>
</template>

<script>
export default {
  name: "ProjectDetailHighlightSection.vue",
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

<style lang="scss" scoped>
.project-detail__highlight-container {
  width: 100vw;
  max-width: 1400px;
  background: black;
  border: 4px solid black;
  border-radius: 4px;

  video {
    filter: brightness(0.91);
  }
}

@screen md {
  .project-detail__highlight-container {
    width: 94vw;
  }
}

@screen lg {
  .project-detail__highlight-container {
    width: 85vw;
    border: 10px solid black;
    border-radius: 10px;
  }
}
</style>
