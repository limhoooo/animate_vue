<template>
  <div style="width: 100%; height: 100%">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section" style="position: relative">
        <div class="page">
          <div class="test123" style="width: 100%; height: 70%"></div>
          <div
            class="sss"
            style="position: absolute; top: 0; width: 100%; text-align: center"
          >
            <img
              style="width: 43vw; padding: 2vw"
              alt="mainTextBg"
              src="../assets/mainTextBg.png"
              class="pulseAM"
            />
          </div>
        </div>
      </div>
      <div class="section">
        <div class="page"></div>
      </div>
      <div class="section">
        <div class="page"></div>
      </div>
      <div class="section">
        <div class="page"></div>
      </div>
    </full-page>
  </div>
</template>

<script>
import Vue from "vue";
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
// import "./fullpage.scrollHorizontally.min"; // Optional. When using fullpage extensions
import VueFullPage from "vue-fullpage.js";

Vue.use(VueFullPage);
export default Vue.extend({
  data: () => ({
    options: {
      licenseKey: "YOUR_KEY_HEERE",
      anchors: ["page1", "page2", "page3", "page4"],
      sectionsColor: ["", "#ff5f45", "#0798ec", "#ff5f45"],
      navigation: true,
      navigationPosition: "right",
      navigationTooltips: ["1", "2", "3", "4"],
      showActiveTooltip: true,
      slidesNavigation: true,
      slidesNavPosition: "bottom",
    },
  }),
});
</script>

<style scoped>
.test2,
.test1 {
  animation-name: bounce;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: reverse;
  animation-timing-function: linear;
  animation-fill-mode: none;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}
.test3 {
  animation-name: flipInX;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: reverse;
  animation-timing-function: linear;
  animation-fill-mode: none;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}
@keyframes test2 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.page {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.test123 {
  background-image: url("../assets/bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.pulseAM {
  animation-name: pulse;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: reverse;
  animation-timing-function: linear;
  animation-fill-mode: none;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}
</style>