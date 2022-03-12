<template>
  <div class="content-section content-section--full-width">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: "FullWidthContentSection",
};
</script>

<style lang="scss" scoped>
.content-section--full-width {
  p {
    @apply pb-6;
  }
}
</style>
