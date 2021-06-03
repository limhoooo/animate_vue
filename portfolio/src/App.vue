<template>
  <div style="width: 100%; height: 100%">
    <div
      class="page"
      style="padding-left: 7%; padding-top: 3%; background: black"
    >
      <h1
        style="font-size: 6rem; color: white"
        class="test1 animate__animated animate__backInLeft"
      >
        LimHo
      </h1>
      <h1 style="font-size: 5rem; line-height: 0; color: white" class="test2">
        PortFolio
      </h1>
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
.test2 {
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
</style>