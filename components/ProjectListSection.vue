<template>
  <div class="project-list-section">
    <div class="hover-img-wrapper">
      <div class="hover-img-placeholder">
        <img src="~/assets/image/ayes/ayes-hoodie.jpg" alt="ayes" />
      </div>
    </div>

    <div
      v-for="project in projects"
      :key="project.id"
      class="project-list-item"
    >
      <a
        class="img-hover-effect-link project-list-item__link"
        :href="'projects/' + project.id"
        :data-src="project.imgUrl"
        @click.prevent="goToUrl('projects/' + project.id)"
      >
        <h4 class="project-list-item__index">
          {{ getRomanNumber(project.id) }}
        </h4>
        <h2 class="project-list-item__title mb-2 md:mb-0">
          {{ project.projectName }}
        </h2>
        <div class="project-list-item__desc">
          <p class="project-list-item__meta" v-html="project.meta"></p>
          <p class="view-project-link">
            View Project <img src="~/assets/image/arrow.svg" alt="link arrow" />
          </p>
        </div>
        <img
          class="project-list-item__image"
          src="~/assets/image/ayes/ayes-hoodie.jpg"
          :alt="project.projectName"
        />
        <!-- {{ require(`~/assets/image/${project.imgUrl}`) }} -->
      </a>
      <PrimaryDivider></PrimaryDivider>
    </div>
  </div>
</template>

<script>
import utils from "~/utils/utils.js";
import PrimaryDivider from "~/components/PrimaryDivider.vue";

export default {
  name: "ProjectListSection",
  components: {
    PrimaryDivider,
  },
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
  methods: {
    getRomanNumber(num) {
      return utils.getRomanNumber(num) + ".";
    },
    goToUrl(url) {
      this.$router.push(url);
    },
    getImgUrl(img) {
      return require(`${img}`);
    },
  },
};
</script>

<style lang="scss">
.project-list-section {
  @apply lg:container lg:mx-auto;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  padding-left: 0;
  padding-right: 0;
}

.hover-img-wrapper {
  position: absolute;
  right: 150px;
  top: -100px;
  width: 250px;
  height: 250px;
  // border-radius: 50%;
  overflow: hidden;
  pointer-events: none;
  z-index: 10;
  // mix-blend-mode: difference;
  visibility: hidden;
  // transform: scale(0.3);
}

.hover-img-placeholder,
.hover-img-placeholder img {
  height: 100%;
  width: 100%;
}

.img-placeholder img {
  object-fit: cover;
  display: block;
}

.project-list-item {
  display: flex;
  flex-direction: column;
  // border-bottom: 1px solid currentColor;
}

.project-list-item__link {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @apply px-3 py-4;
}

.project-list-item__image {
  grid-column: 3;
  grid-row: 1 / span 3;
  justify-content: center;
  align-self: center;
  height: 100%;
  object-fit: cover;
}

.project-list-item__index {
  grid-column: span 2;
}

.project-list-item__title {
  grid-column: span 2;
  font-size: 1.8rem;
  line-height: 1.2;
  min-height: 70px;
  display: flex;
  align-items: center;
}

.project-list-item__desc {
  grid-column: span 2;
}

.project-list-item__meta {
  white-space: pre-line;
  line-height: 1.3;
  margin-bottom: 0.75rem;
}

.view-project-link {
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1;

  img {
    width: 0.75rem;
    margin-left: 4px;
    filter: invert(12%) sepia(10%) saturate(609%) hue-rotate(151deg)
      brightness(94%) contrast(93%);
  }
}

.dark {
  .view-project-link {
    img {
      filter: invert(100%) sepia(0%) saturate(4296%) hue-rotate(62deg)
        brightness(87%) contrast(110%);
    }
  }
}

@screen xs {
  .project-list-item__title {
    font-size: 2.5rem;
  }

  .view-project-link {
    font-size: 0.8rem;
  }
}

@screen md {
  .project-list-item__image {
    display: none;
  }

  .project-list-item__link {
    grid-template-columns: 50px repeat(5, 1fr);
  }

  .project-list-item__index {
    grid-column: 1;
    align-self: center;
  }

  .project-list-item__title {
    grid-column: span 3;
  }

  .project-list-item__desc {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .project-list-item__meta {
    text-align: right;
  }

  .view-project-link {
    justify-content: flex-end;
  }
}

@screen lg {
  .project-list-item__title {
    font-size: 3.8rem;
  }

  .project-list-item__meta {
    font-size: 1rem;
  }
}
</style>
