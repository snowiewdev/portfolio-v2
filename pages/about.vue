<!-- About -->
<template>
  <SmoothScroll>
    <div class="about-container" data-scroll-section>
      <PageTitleSection :section-number="3" title="About" index-style="chapter">
      </PageTitleSection>

      <client-only>
        <AboutImageContentSection
          img="me-light.jpg"
          top-img="about-cover.jpg"
          img-class="md:object-right"
        >
          <template v-slot:content>
            <p class="pb-6">
              Hi, my name is Snowie Wong. I started my web development journey
              from learning on freeCodeCamp and Youtube. Then I worked as a
              <HighlightSpan style-class="highlight-yellow"
                >web developer</HighlightSpan
              >
              for a year at a digital agency based in Hong Kong. I am really
              into
              <HighlightSpan style-class="highlight-mint"
                >front-end development</HighlightSpan
              >
              and animations. I love CSS, You may find me on
              <HighlightSpan style-class="highlight-pink"
                >CSS Battle</HighlightSpan
              >
              sometimes lol.
            </p>
            <h4 class="body-font-title mt-4 mb-6">Skills</h4>
            <p class="pb-6">
              <HighlightSpan style-class="highlight-green"
                >VUE.JS</HighlightSpan
              >
              <!-- <span class="highlight-green">VUE.JS</span>  -->
              // NUXT.JS // JAVASCRIPT // SCSS // CSS // GSAP // TAILWINDCSS //
              BOOTSTRAP // LOCOMOTIVE // PHP // MYSQL // HTML // GIT //
              WORDPRESS // ELEMENTOR // WOOCOMMERCE
            </p>
          </template>
        </AboutImageContentSection>

        <AboutImageContentSection
          img="cat-is-cute.jpg"
          top-img="wss.jpg"
          type="image-first"
        >
          <template v-slot:content>
            <p class="pt-4 md:pt-0 pb-6">
              Apart from
              <HighlightSpan style-class="highlight-yellow">
                coding</HighlightSpan
              >, I love cats and other animals. I enjoy listening to music with
              heavy beats like EDM and Heavy Metal. You may spot me
              <HighlightSpan style-class="highlight-pink"
                >watching gigs</HighlightSpan
              >
              and
              <HighlightSpan style-class="highlight-mint"
                >feeding stray cats</HighlightSpan
              >
              sometimes.
            </p>
            <p class="py-6">
              I also enjoy
              <HighlightSpan style-class="highlight-green"
                >travelling</HighlightSpan
              >
              a lot. I have recently relocated to Vancouver with my work permit
              and hopefully I could get a job as web developer there soon.
            </p>
          </template>
        </AboutImageContentSection>
      </client-only>

      <FullWidthContentSection>
        <p data-scroll data-scroll-class="reveal" class="fade-in">
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

      <!-- img-url="contact-cover.jpg" -->
      <NextSection
        title="Contact"
        url="contact"
        type="chapter"
        img-url="contact-hand.jpg"
      >
      </NextSection>

      <Footer />
    </div>
  </SmoothScroll>
</template>

<script>
import SmoothScroll from "~/components/SmoothScroll.vue";
import PageTitleSection from "~/components/PageTitleSection.vue";
import AboutImageContentSection from "~/components/AboutImageContentSection.vue";
import HighlightSpan from "~/components/HighlightSpan.vue";
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
    HighlightSpan,
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
