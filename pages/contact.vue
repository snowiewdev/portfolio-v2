<!-- Contact -->
<template>
  <SmoothScroll>
    <div class="contact-container relative">
      <PageTitleSection
        :section-number="4"
        title="Contact"
        index-style="chapter"
        section-style="half"
      >
      </PageTitleSection>

      <FullWidthContentSection>
        <p>
          I'm currently looking for a full-time web developer job in Canada. I'm
          also open to freelance projects and collaboration. Feel free to
          contact me :)
        </p>
        <p>
          Or we can just be friends.
          <br class="inline sm:hidden" />
          <HighlightSpan style-class="highlight-mint">
            Come and say hi
          </HighlightSpan>
          :)
        </p>
      </FullWidthContentSection>

      <RotatingTitleLink
        text="Drop-Me-An-Email"
        link="mailto:snowiewongdev@gmail.com"
        class="mb-4"
      >
      </RotatingTitleLink>

      <SocialLinkSection :social-links="socialLinks"> </SocialLinkSection>

      <rotating-circle class="rotating-circle-1" location="contact">
      </rotating-circle>
      <rotating-circle class="rotating-circle-2" location="contact">
      </rotating-circle>

      <Footer />
    </div>
  </SmoothScroll>
</template>

<script>
import SmoothScroll from "~/components/SmoothScroll.vue";
import PageTitleSection from "~/components/PageTitleSection.vue";
import FullWidthContentSection from "~/components/FullWidthContentSection.vue";
import HighlightSpan from "~/components/HighlightSpan.vue";
import RotatingTitleLink from "~/components/RotatingTitleLink.vue";
import SocialLinkSection from "~/components/SocialLinkSection.vue";
import RotatingCircle from "~/components/RotatingCircle.vue";
import Footer from "@/components/Footer.vue";

export default {
  head() {
    return {
      title: "Contact",
    };
  },
  data() {
    return {
      socialLinks: [
        {
          name: "Github",
          url: "https://github.com/snowiewdev",
          icon: "github.svg",
        },
        {
          name: "Codepen",
          url: "https://codepen.io/snowiewdev",
          icon: "codepen.svg",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/snowie-wong/",
          icon: "linkedin.svg",
        },
        {
          name: "CSSBattle",
          url: "https://cssbattle.dev/player/snowiewdev",
          icon: "cssbattle.svg",
        },
      ],
    };
  },
  components: {
    SmoothScroll,
    PageTitleSection,
    FullWidthContentSection,
    HighlightSpan,
    RotatingTitleLink,
    SocialLinkSection,
    RotatingCircle,
    Footer,
  },
  mounted() {
    this.$root.$refs.customCursor.removeCursorActiveStyle();
    this.$root.$refs.customCursor.initActiveCursorDetection();
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
[data-scroll-container] {
  perspective: none;
}

.contact-container {
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  // height: -webkit-fill-available;
  padding-bottom: 100px;
  overflow: hidden;
}

.rotating-circle-1 {
  top: 7%;
  left: -70px;
}

.rotating-circle-2 {
  bottom: 7%;
  right: -70px;
  animation-direction: reverse;
}

@screen lg {
  .rotating-circle-1 {
    top: 10%;
    left: -7%;
  }

  .rotating-circle-2 {
    bottom: 5%;
    right: -7%;
  }
}
</style>
