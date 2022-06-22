<template>
  <div class="project-detail__meta-container py-8 sm:py-10">
    <div class="project-detail__meta project-detail-role">
      <div class="project-detail__meta-item project-detail-about">
        <h4 class="project-detail__meta-label">About</h4>
        <p class="project-detail__meta-value">{{ project.description }}</p>
      </div>
      <div class="project-detail__meta-item project-detail-role">
        <h4 class="project-detail__meta-label">Role</h4>
        <p class="project-detail__meta-value">{{ project.role }}</p>
      </div>
      <div class="project-detail__meta-item project-detail-technology">
        <h4 class="project-detail__meta-label">Technology</h4>
        <p class="project-detail__meta-value">{{ project.technology }}</p>
      </div>
      <div class="project-detail__meta-item project-detail-website">
        <h4 class="project-detail__meta-label">Website</h4>
        <p class="project-detail__meta-value">
          <a
            class="project-detail__link"
            :href="project.website.url"
            target="_blank"
          >
            <template v-if="project.website.isLive">
              View Live website
            </template>
            <template v-else> View Past website </template>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectDetailMeta",
  props: {
    project: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style type="scss">
.project-detail__meta-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85vw;
  max-width: 997px;
  margin: 0 auto;
  min-height: 55vh;
}

.project-detail__meta {
  display: grid;
  grid-gap: 0.5rem;
  grid-template-areas:
    "about"
    "role"
    "technology"
    "website";
}

.project-detail__meta-label {
  font-size: 1.25rem;
  text-transform: uppercase;
  @apply mb-4;
}

.project-detail__meta-value {
  font-size: 1.1rem;
  @apply mb-6;
}

.project-detail-about {
  grid-area: about;
  @apply mt-4;
}

.project-detail-role {
  grid-area: role;
}

.project-detail-technology {
  grid-area: technology;
}

.project-detail-website {
  grid-area: website;
}

.project-detail__link {
  font-family: $body-font;
}

@screen md {
  .project-detail__meta {
    grid-template-columns: 205px 1fr;
    grid-gap: 2rem;
    grid-template-areas:
      "role about"
      "website technology";
  }

  .project-detail-about {
    @apply mt-0;
  }
}

@screen lg {
  .project-detail__meta {
    grid-template-columns: 240px 1fr;
  }
}

@screen xl {
  .project-detail__meta-container {
    width: 70vw;
    min-height: 70vh;
  }
}
</style>
