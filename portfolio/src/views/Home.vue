<template>
  <div class="pageBaseBox">
    <first-page :prodsClass="prodsClassLeft" :firstPage="firstPage">
      <div class="firstPageTextBox">
        <h1>FRONT</h1>
        <h1>END</h1>
      </div>
    </first-page>
    <first-page :prodsClass="prodsClassRight" :firstPage="firstPage">
      <div class="firstPageTextBox">
        <h1>LIMHO</h1>
        <h1>PORTFOLIO</h1>
      </div>
    </first-page>

    <span @click="firstBtnFnc" class="fierstBtn bounceAM">Click Me.</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FirstPage from "../components/FirstPage.vue";
export default Vue.extend({
  name: "Home",
  components: {
    FirstPage,
  },
  data: () => ({
    firstPage: true,
    prodsClassLeft: { animate: "animate__fadeOutLeft" },
    prodsClassRight: {
      animate: "animate__fadeOutRight",
      textRight: "textRight",
    },
  }),
  methods: {
    firstBtnFnc() {
      this.firstPage = !this.firstPage;
      this.$router.push("about");
    },
  },
});
</script>

<style>
.w100 {
  width: 100%;
}
.h50 {
  height: 50%;
}
.textRight {
  text-align: right;
}
.pageBaseBox {
  width: 100%;
  height: 100%;
  position: relative;
}
.firstPageTextBox h1 {
  font-size: 8em;
  line-height: 1.3em;
  margin: 0;
  color: #eee;
}
.firstPageTextBox {
  height: 100%;
}
.fierstBtn {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 140px;
  height: 100px;
  margin: -50px 0 0 -80px;
  font-size: 2em;
  cursor: pointer;
}
.bounceAM {
  animation-name: bounce;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: reverse;
  animation-timing-function: linear;
  animation-fill-mode: none;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}
.test {
}
</style>

