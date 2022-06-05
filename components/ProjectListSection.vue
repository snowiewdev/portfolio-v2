<template>
  <div class="project-list-section">
    <div
      v-for="project in projects"
      :key="project.id"
      class="project-list-item"
      :id="'project-list-item-' + project.id"
      :data-src="project.imgUrl"
      @mousemove="
        moveHoverRevealImage($event, 'project-list-item-' + project.id)
      "
      @mouseleave="
        fadeOutHoverRevealImage($event, 'project-list-item-' + project.id)
      "
    >
      <a
        class="img-hover-effect-link project-list-item__link"
        :href="'projects/' + project.id"
        @click.prevent="goToUrl('projects/' + project.id)"
      >
        <h4 class="project-list-item__index projest-list-text">
          {{ getRomanNumber(project.id) }}
        </h4>
        <h2 class="project-list-item__title projest-list-text mb-2 md:mb-0">
          {{ project.projectName }}
        </h2>
        <div class="project-list-item__desc">
          <p
            class="project-list-item__meta projest-list-text"
            v-html="project.meta"
          ></p>
          <p class="view-project-link projest-list-text">
            View Project <img src="~/assets/image/arrow.svg" alt="link arrow" />
          </p>
        </div>

        <!-- project image show on mobile -->
        <img
          class="project-list-item__image"
          :src="require(`~/assets/image/${project.imgUrl}`)"
          :alt="project.projectName"
        />

        <!-- hover show project image on desktop, may need require -->
        <div class="hover-reveal">
          <div class="hover-reveal__inner">
            <div
              class="hover-reveal__img"
              :class="'project-' + project.id"
              :style="{
                backgroundImage:
                  `url(` + require(`~/assets/image/${project.imgUrl}`) + `)`,
              }"
            ></div>
          </div>
        </div>
      </a>
      <PrimaryDivider></PrimaryDivider>
    </div>
  </div>
</template>

<script>
import utils from "~/utils/utils.js";
import PrimaryDivider from "~/components/PrimaryDivider.vue";
import { gsap } from "gsap";

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
  data() {
    return {
      defaultImage: "ayes/ayes-hoodie.jpg",
    };
  },
  mounted() {},
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
    moveHoverRevealImage(e, itemID) {
      console.log("itemID", itemID);
      let currentItem = `#${itemID}`;
      let currentItemLink = document.querySelector(
        `${currentItem}  .project-list-item__link`
      );
      let hoverRevealContainer = document.querySelector(
        `${currentItem} .hover-reveal`
      );
      let currentItemText = document.querySelectorAll(
        `${currentItem} .projest-list-text`
      );
      let hoverRevealImage = document.querySelector(
        `${currentItem} .hover-reveal__img`
      );

      currentItemText.forEach((text) => {
        text.style.zIndex = 3;
      });
      hoverRevealContainer.style.transform = `translate(${
        e.clientX - 300
      }px, -${e.clientY / 3}px) rotate(${e.clientX / 120}deg)`;
      hoverRevealContainer.style.zIndex = 2;
      hoverRevealImage.style.clipPath = "inset(0 0 0 0)";
    },
    fadeOutHoverRevealImage(e, itemID) {
      let currentItem = `#${itemID}`;
      let hoverRevealContainer = document.querySelector(
        `${currentItem} .hover-reveal`
      );
      let currentItemText = document.querySelectorAll(
        `${currentItem} .projest-list-text`
      );
      let hoverRevealImage = document.querySelector(
        `${currentItem} .hover-reveal__img`
      );

      hoverRevealContainer.style.zIndex = 0;
      currentItemText.forEach((text) => {
        text.style.zIndex = 0;
      });
      hoverRevealImage.style.clipPath = "inset(100% 0 0 0)";
    },
  },
};
</script>

<style lang="scss">
.project-list-section {
  @apply lg:container lg:mx-auto;
  width: 100%;
  max-width: 1440px;
  // max-width: 1280px;
  margin: 0 auto;
  padding-left: 0;
  padding-right: 0;
  // overflow: hidden;
}

.project-list-item {
  display: flex;
  flex-direction: column;
  position: relative;
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

.projest-list-text {
  mix-blend-mode: difference;
  filter: invert(1);
  color: $black;
}

.dark {
  .projest-list-text {
    filter: none;
    color: $absWhite;
  }
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

// only show when mouseover
.hover-reveal {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 400px;
  // opacity: 0;
  pointer-events: none;
  transform: translate(0, -300px);
}

.hover-reveal__inner {
  width: 100%;
  height: 100%;
  position: relative;
  will-change: transform;
  overflow: hidden;
}

.hover-reveal__img {
  background-size: cover;
  background-position: 50% 50%;
  transform-origin: 50% 100%;
  width: 100%;
  height: 100%;
  will-change: clip-path;
  clip-path: inset(100% 0 0 0);
  transition: clip-path 0.4s cubic-bezier(0.79, 0.14, 0.15, 0.86);
}

// responsive
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

  .hover-img-wrapper {
    display: block;
  }

  // .project-list-item__link {
  //   grid-template-columns: 50px repeat(7, 1fr);
  // }

  // .project-list-item__index {
  //   grid-column: 1;
  // }

  // .project-list-item__title {
  //   grid-column: span 5;
  // }

  // .project-list-item__desc {
  //   grid-column: span 2;
  // }
}
</style>
