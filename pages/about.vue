<!-- About -->
<template>
  <div class="about-container">
    <PageTitleSection :section-number="3" title="About" index-style="chapter">
    </PageTitleSection>
    <!-- <FullWidthImageSection
      src="about-cover-image.jpg"
      alt="about cover image"
    ></FullWidthImageSection> -->

    <div
      class="box-spacing content-section about-content-section about-content-section--one pb-12"
    >
      <div class="about-content-section__text-container">
        <p class="pb-6">
          Hi, my name is Snowie Wong. I’ve been working as a web developer for a
          year at a digital agency based in Hong Kong. I AM REALLY INTO
          FRONT-END DEVELOPMENT AND ANIMATIONS. I LOVE CSS, YOU CAN FIND ME ON
          CSS BATTLE SOMETIMES LOL
        </p>
        <h4 class="body-font-title mt-4 mb-6">Skills</h4>
        <p class="pb-6">
          VUE.JS // NUXT.JS // JAVASCRIPT // SCSS // CSS // GSAP // TAILWINDCSS
          // BOOTSTRAP // PHP // MYSQL // HTML // WORDPRESS // ELEMENTOR //
          WOOCOMMERCE
        </p>
      </div>
      <div class="about-content-section__image-container flex justify-end">
        <img src="~/assets/image/me-light.jpg" alt="me" />
      </div>
    </div>

    <div
      class="box-spacing content-section about-content-section about-content-section--two pb-12"
    >
      <div class="about-content-section__image-container">
        <img src="~/assets/image/cat-light.jpg" alt="me" />
      </div>
      <div class="about-content-section__text-container md:text-right">
        <p class="pb-6">
          APART FROM CODING, I LOVE CATS AND OTHER ANIMALS. I ENJOY LISTENING TO
          MUSIC WITH HEAVY BEATS LIKE EDM and HEAVY METAL. YOU MAY SPOT ME
          WATCHING GIGS AND FEEDING STRAY CATS SOMETIMES.
        </p>
        <p class="py-6">
          I also enjoy travelling a lot and am opened to worldwide job
          opportunities.
        </p>
      </div>
    </div>

    <div class="content-section about-content-section--full-width text-center">
      <p class="pb-6">
        THANKS FOR VIEWING MY PORTFOLIO, AND ALL THE LIBRARIES AND RESOURCES I
        USED WITHIN the open source community. WITHOUT THEM, THIS CANNOT HAPPEN.
      </p>
    </div>
  </div>
</template>

<script>
import PageTitleSection from "~/components/PageTitleSection.vue";
import FullWidthImageSection from "~/components/FullWidthImageSection.vue";

export default {
  data() {
    return {};
  },
  components: {
    PageTitleSection,
    FullWidthImageSection,
  },
};
</script>

<style style="scss" scoped>
/*  */
.about-content-section {
  display: grid;
  grid-template-columns: 1fr;
}

.about-content-section__text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2rem;
}

.about-content-section--full-width {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 768px;
  font-size: 1.2rem;
}

@screen md {
  .about-content-section {
    display: grid;
    grid-template-columns: 3fr 2fr;
  }
}
</style>
