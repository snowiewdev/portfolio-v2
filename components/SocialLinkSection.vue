<template>
  <div class="social-link-section pb-8">
    <div v-for="link in socialLinks" :key="link.name" class="social-link-item">
      <RotatingLink
        :id="link.name"
        :text="link.name"
        :link="link.url"
        class="social-rotating-link"
        type="body"
      >
      </RotatingLink>
      <img
        class="social-link-icon"
        :src="getImgUrl(link.icon)"
        :alt="link.name"
      />
    </div>
  </div>
</template>

<script>
import RotatingLink from "~/components/RotatingLink.vue";

export default {
  name: "SocialLinkSection",
  props: {
    socialLinks: {
      type: Array,
      default: [],
    },
  },
  components: {
    RotatingLink,
  },
  methods: {
    getImgUrl(img) {
      return require(`~/assets/image/${img}`);
    },
  },
};
</script>

<style lang="scss">
.social-link-section {
  width: 70vw;
  max-width: 560px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.social-link-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  position: relative;
}

.social-link {
  text-align: center;
  font-family: $body-font;
  font-size: clamp(1rem, 2vw, 1.2rem);
}

.social-link-icon {
  position: absolute;
  width: 2rem;
  filter: invert(66%) sepia(0%) saturate(1%) hue-rotate(282deg) brightness(101%)
    contrast(101%);
  opacity: 0;
  z-index: -1;
  transition: all 0.3s ease-in-out;
  top: 1rem;
}

.dark {
  .social-link-icon {
    filter: invert(99%) sepia(4%) saturate(1418%) hue-rotate(232deg)
      brightness(112%) contrast(80%);
  }
}

// hover
.social-link-item:hover {
  .social-link-icon {
    opacity: 0.4;
    top: 0rem;
  }
}

@screen sm {
  .social-link-section {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
