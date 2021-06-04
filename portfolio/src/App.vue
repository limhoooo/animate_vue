<template>
  <div style="width: 100%; height: 100%">
    <div class="page" style="position: relative">
      <div class="test123" style="width: 100%; height: 70%"></div>
      <div
        class="sss"
        style="position: absolute; top: 5%; width: 100%; text-align: center"
      >
        <img
          style="width: 45vw"
          alt="mainTextBg"
          src="./assets/mainTextBg.png"
        />
      </div>
      <div style="padding-left: 7%; padding-top: 1%">
        <h1 style="font-size: 2.5rem" class="test1">LimHo</h1>
        <h1 style="font-size: 3.5rem; line-height: 0" class="test2">
          PortFolio
        </h1>
      </div>
      <!-- <div>
      <router-link to="/about">aboat</router-link>
      <br />
      <router-link to="/home">home</router-link>
    </div>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view />
    </transition> -->
    </div>
    <div style="background: blue" class="page">
      <div id="sec1" data-aos="fade-up">
        <h1 style="text-align: center; padding-top: 100px">ㅎㅇㅎㅇ</h1>
      </div>
    </div>
    <div style="background: red" class="page">
      <div id="sec2" data-aos="fade-up">
        <h1 style="text-align: center">ㅎㅇㅎㅇ</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style>
html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
}
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
  background-image: url("./assets/bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>