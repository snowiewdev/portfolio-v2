<template>
  <hr
    :class="classObject"
    class="border-solid border-black dark:border-white"
  />
</template>

<script>
export default {
  name: "PrimaryDivider",
  props: {
    borderStyle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      classObject: {
        "border-t": this.borderStyle == "",
        "border-t-2": this.borderStyle == "medium",
      },
    };
  },
};
</script>

<style></style>
