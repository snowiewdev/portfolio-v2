<template>
  <div class="page-title-section" :class="sectionStyleClass">
    <h4 class="mb-4">
      {{ sectionNumberText }}
    </h4>
    <h1 class="page-title">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "PageTitleSection",
  props: {
    sectionNumber: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      default: "",
    },
    indexStyle: {
      type: String,
      default: "chapter", // chapter & romans
    },
    sectionStyle: {
      type: String,
      default: "full", // half & full
    },
  },
  computed: {
    sectionNumberText() {
      if (this.indexStyle == "chapter") {
        let sectionNumber = this.sectionNumber.toString().padStart(2, "0");
        return `ch.${sectionNumber}`;
      }
      if (this.indexStyle == "romans") {
        return this.getRomanNumber(this.sectionNumber);
      }
    },
    sectionStyleClass() {
      return {
        "half-height": this.sectionStyle == "half",
      };
    },
  },
  methods: {
    getRomanNumber(num) {
      const map = {
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
      };
      let romanNumber = "";
      for (let key in map) {
        const repeatCounter = Math.floor(num / map[key]);
        if (repeatCounter !== 0) {
          romanNumber += key.repeat(repeatCounter);
        }

        num %= map[key];

        if (num === 0) {
          break;
        }
      }
      return romanNumber + ".";
    },
  },
};
</script>

<style scoped>
.page-title-section {
  height: 70vh;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.half-height {
  max-height: 280px;
  justify-content: flex-end;
}

@screen sm {
  .half-height {
    max-height: 340px;
  }
}
</style>
