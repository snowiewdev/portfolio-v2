<!-- About -->
<template>
  <SmoothScroll>
    <div class="about-container" data-scroll-section>
      <PageTitleSection :section-number="3" title="About" index-style="chapter">
      </PageTitleSection>

      <!-- <FullWidthImageSection
        desktop-src="about-me-in-kolwoon.jpg"
        mobile-src="about-cover-square.jpg"
        alt="about me cover photo"
        class="mb-8"
      ></FullWidthImageSection> -->

      <AboutImageContentSection img="me-light.jpg" img-class="md:object-right">
        <template v-slot:content>
          <p class="pb-6">
            Hi, my name is Snowie Wong. I started my web development journey
            from learning on freeCodeCamp and Youtube. Then I worked as a
            <span class="highlight-yellow"> web developer</span> for a year at a
            digital agency based in Hong Kong. I am really into
            <span class="highlight-mint">front-end development</span> and
            animations. I love CSS, You can find me on
            <span class="highlight-pink">CSS Battle</span> sometimes.
          </p>
          <h4 class="body-font-title mt-4 mb-6">Skills</h4>
          <p class="pb-6">
            <span class="highlight-green">VUE.JS</span> // NUXT.JS // JAVASCRIPT
            // SCSS // CSS // GSAP // TAILWINDCSS // BOOTSTRAP // LOCOMOTIVE //
            PHP // MYSQL // HTML // GIT // WORDPRESS // ELEMENTOR // WOOCOMMERCE
          </p>
        </template>
      </AboutImageContentSection>

      <AboutImageContentSection img="cat-is-cute.jpg" type="image-first">
        <template v-slot:content>
          <p class="pt-4 md:pt-0 pb-6">
            Apart from <span class="highlight-yellow">coding</span>, I love cats
            and other animals. I enjoy listening to music with heavy beats like
            EDM and Heavy Metal. You may spot me
            <span class="highlight-pink">watching gigs</span> and
            <span class="highlight-mint">feeding stray cats</span> sometimes.
          </p>
          <p class="py-6">
            I also enjoy <span class="highlight-green">travelling</span> a lot.
            I have recently relocated to Vancouver with my work permit and
            hopefully I could get a job as web developer there soon.
          </p>
        </template>
      </AboutImageContentSection>

      <FullWidthContentSection>
        <p class="">
          Thanks for viewing my portfolio, and all the libraries and resources I
          used within the open source community. Without them, this cannot
          happen.
        </p>
        <!-- <nuxt-link to="/" class="inline-block"> View Credits </nuxt-link> -->
      </FullWidthContentSection>

      <MarqueeSection
        :topContent="topMarqueeText"
        :bottomContent="bottomMarqueeText"
      >
      </MarqueeSection>

      <NextSection title="Contact" url="contact" type="chapter"> </NextSection>

      <Footer />
    </div>
  </SmoothScroll>
</template>

<script>
import SmoothScroll from "~/components/SmoothScroll.vue";
import PageTitleSection from "~/components/PageTitleSection.vue";
import AboutImageContentSection from "~/components/AboutImageContentSection.vue";
import FullWidthImageSection from "~/components/FullWidthImageSection.vue";
import FullWidthContentSection from "~/components/FullWidthContentSection.vue";
import MarqueeSection from "~/components/MarqueeSection.vue";
import NextSection from "~/components/NextSection.vue";
import Footer from "@/components/Footer.vue";

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
    SmoothScroll,
    PageTitleSection,
    AboutImageContentSection,
    FullWidthImageSection,
    FullWidthContentSection,
    MarqueeSection,
    NextSection,
    Footer,
  },
  mounted() {
    this.$root.$refs.customCursor.removeCursorActiveStyle();
    this.$root.$refs.customCursor.initActiveCursorDetection();
  },
  methods: {},
};
</script>

<style></style>
