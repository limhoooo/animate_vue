<template>
  <div
    class="animate__animated"
    style="width: 100%; height: 100%; position: relative"
  >
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOutLeft"
    >
      <div
        style="width: 100%; height: 50%; background: #333333"
        v-if="menu2"
      ></div>
    </transition>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOutRight"
    >
      <div
        style="width: 100%; height: 50%; background: blue"
        v-if="menu2"
      ></div>
    </transition>
    <span
      @click="test111"
      style="
        position: absolute;
        color: #fff;
        font-size: 50px;
        top: 20%;
        left: 25%;
      "
      >포트폴리오 ㄱㄱ</span
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {},
  data: () => ({
    menu1: false,
    menu2: true,
  }),
  methods: {
    test111() {
      this.menu2 = !this.menu2;
      this.$router.push("about");
    },
  },
});
</script>

<style>
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
</style>
