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
      <div class="about-content-section__text-container pr-0 md:pr-8">
        <p class="pb-6">
          Hi, my name is Snowie Wong. I've been working as a
          <span class="highlight-yellow"> web developer</span> for a year at a
          digital agency based in Hong Kong. I am really into
          <span class="highlight-mint">front-end development</span> and
          animations. I love CSS, You can find me on
          <span class="highlight-pink">CSS Battle</span> sometimes LOL
        </p>
        <h4 class="body-font-title mt-4 mb-6">Skills</h4>
        <p class="pb-6">
          <span class="highlight-green">VUE.JS</span> // NUXT.JS // JAVASCRIPT
          // SCSS // CSS // GSAP // TAILWINDCSS // BOOTSTRAP // PHP // MYSQL //
          HTML // GIT // WORDPRESS // ELEMENTOR // WOOCOMMERCE
        </p>
      </div>
      <div
        class="about-content-section__image-container flex justify-center md:justify-end"
      >
        <img
          class="about-content-section__image"
          src="~/assets/image/me-light.jpg"
          alt="me"
        />
      </div>
    </div>

    <div
      class="box-spacing content-section about-content-section about-content-section--two pb-12"
    >
      <div class="about-content-section__image-container">
        <img class="" src="~/assets/image/cat-light.jpg" alt="me" />
      </div>
      <div
        class="about-content-section__text-container md:text-right pl-0 md:pl-8"
      >
        <p class="pt-4 md:pt-0 pb-6">
          Apart from <span class="highlight-yellow">coding</span>, I love cats
          and other animals. I enjoy listening to music with heavy beats like
          EDM and Heavy Metal. You may spot me
          <span class="highlight-pink">watching gigs</span> and
          <span class="highlight-mint">feeding stray cats</span> sometimes.
        </p>
        <p class="py-6">
          I also enjoy <span class="highlight-green">travelling</span> a lot and
          am opened to worldwide job opportunities.
        </p>
      </div>
    </div>

    <FullWidthContentSection>
      <p class="">
        Thanks for viewing my portfolio, and all the libraries and resources I
        used within the open source community. Without them, this cannot happen.
      </p>
      <!-- <nuxt-link to="/" class="inline-block"> View Credits </nuxt-link> -->
    </FullWidthContentSection>

    <MarqueeSection
      :topContent="topMarqueeText"
      :bottomContent="bottomMarqueeText"
    >
    </MarqueeSection>

    <NextSection title="Contact" url="contact" type="chapter"> </NextSection>
  </div>
</template>

<script>
import PageTitleSection from "~/components/PageTitleSection.vue";
import FullWidthImageSection from "~/components/FullWidthImageSection.vue";
import FullWidthContentSection from "~/components/FullWidthContentSection.vue";
import MarqueeSection from "~/components/MarqueeSection.vue";
import NextSection from "~/components/NextSection.vue";

export default {
  head() {
    return {
      title: "About",
    };
  },
  data() {
    return {
      topMarqueeText: "Design & Develop & Debug & Deliver & ",
      bottomMarqueeText: "Coffee & Coding & Tea & Coding & Cats & ",
    };
  },
  components: {
    PageTitleSection,
    FullWidthImageSection,
    FullWidthContentSection,
    MarqueeSection,
    NextSection,
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
}

.about-content-section__image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

@screen md {
  .about-content-section {
    display: grid;
    grid-template-columns: 3fr 2fr;
  }
}
</style>
