<template>
  <div class="hover-and-see-more flex justify-center aligh-center">
    <h2 class="inline hover-and-see-more_text">Hover & See More</h2>
    <Eye />
    <h2 class="hidden md:inline hover-and-see-more_text">Hover & See More</h2>
  </div>
</template>

<script>
import Eye from "~/components/Eye.vue";

export default {
  name: "HoverAndSeeMore",
  components: {
    Eye,
  },
};
</script>

<style scoped>
.hover-and-see-more {
  width: 100%;
  max-width: 1440px;
  margin: 50px auto;
}

.hover-and-see-more .eye {
  top: -4px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.hover-and-see-more_text {
  font-size: 1.5rem;
}

@screen md {
  .hover-and-see-more {
    margin: 100px auto;
  }

  .hover-and-see-more .eye {
    top: 0.25rem;
  }

  .hover-and-see-more_text {
    font-size: 2rem;
  }
}
</style>
