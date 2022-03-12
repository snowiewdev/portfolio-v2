<!-- Contact -->
<template>
  <div class="contact-container">
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
        <span class="highlight-yellow">Come and say hi</span> :)
      </p>
    </FullWidthContentSection>

    <RotatingTitleLink
      text="Drop-Me-An-Email"
      link="mailto:snowiewongdev@gmail.com"
    >
    </RotatingTitleLink>

    <div class="social-link-section"></div>
  </div>
</template>

<script>
import PageTitleSection from "~/components/PageTitleSection.vue";
import FullWidthContentSection from "~/components/FullWidthContentSection.vue";
import RotatingTitleLink from "~/components/RotatingTitleLink.vue";

export default {
  data() {
    return {
      socialLinks: [
        {
          name: "Github",
          url: "https://github.com/snowiewdev",
        },
        {
          name: "Codepen",
          url: "https://codepen.io/snowiewdev",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/snowie-wong/",
        },
        {
          name: "CSSBattle",
          url: "https://cssbattle.dev/player/snowiewdev",
        },
      ],
    };
  },
  components: {
    PageTitleSection,
    FullWidthContentSection,
    RotatingTitleLink,
  },
};
</script>

<style>
/*  */
</style>
