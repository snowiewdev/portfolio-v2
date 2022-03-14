<!-- Contact -->
<template>
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
        I am open to freelance projects and collaboration. I'm not good at
        urgent work but I will try my best.
      </p>
      <p>
        Or we can just be friends.
        <br class="block sm:hidden" />
        <span class="highlight-mint">Come and say hi</span> :)
      </p>
    </FullWidthContentSection>

    <RotatingTitleLink
      text="Drop-Me-An-Email"
      link="mailto:snowiewongdev@gmail.com"
    >
    </RotatingTitleLink>

    <SocialLinkSection :social-links="socialLinks"> </SocialLinkSection>

    <rotating-circle class="rotating-circle-1"> </rotating-circle>
    <rotating-circle class="rotating-circle-2"> </rotating-circle>
  </div>
</template>

<script>
import PageTitleSection from "~/components/PageTitleSection.vue";
import FullWidthContentSection from "~/components/FullWidthContentSection.vue";
import RotatingTitleLink from "~/components/RotatingTitleLink.vue";
import SocialLinkSection from "~/components/SocialLinkSection.vue";
import RotatingCircle from "~/components/RotatingCircle.vue";

export default {
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
    PageTitleSection,
    FullWidthContentSection,
    RotatingTitleLink,
    SocialLinkSection,
    RotatingCircle,
  },
};
</script>

<style lang="scss" scoped>
.contact-container {
  width: 100%;
  max-width: 100vw;
  min-height: calc(100vh - $header-height);
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
