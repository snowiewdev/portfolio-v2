<template>
  <div class="eye">
    <div class="iris">
      <div class="pupil"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Eye",
  mounted() {
    // this.initEyeBallMovement();
  },
  methods: {
    // initEyeBallMovement() {
    //   document.querySelector("body").addEventListener("mousemove", (event) => {
    //     let eye = document.querySelector(".eye-inner");
    //     let x = eye.getBoundingClientRect().left + eye.clientWidth / 4;
    //     let y = eye.getBoundingClientRect().top + eye.clientHeight / 4;
    //     let radian = Math.atan2(event.pageX - x, event.pageY - y);
    //     let degree = radian * (180 / Math.PI) * -1 + 270;
    //     eye.style.transform = `rotate(${degree}deg)`;
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
.eye {
  position: relative;
  width: 40px;
  height: 40px;
  border: 2px solid $black;
  border-radius: 75% 15%;
  // transform: rotate(45deg);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: blink 5s infinite alternate;

  .dark {
    border-color: $white;
  }
}

.iris {
  position: relative;
  width: 25px;
  height: 25px;
  border: 2px solid $black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-45deg);
}

.pupil {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: $black;
}

.dark {
  .eye {
    border-color: $white;
  }

  .iris {
    border-color: $white;
    background-color: $white;
  }
}

@keyframes blink {
  0% {
    transform: scaleY(1) rotate(45deg);
  }
  3% {
    transform: scaleY(0.1) rotate(45deg);
  }
  6% {
    transform: scaleY(1) rotate(45deg);
  }
  100% {
    transform: scaleY(1) rotate(45deg);
  }
}
</style>
