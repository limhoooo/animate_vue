<template>
  <div style="width: 100%; height: 100%">
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    menu1: false,
    menu2: true,
  }),
  methods: {
    test111() {
      this.menu1 = !this.menu1;
      this.menu2 = !this.menu2;
    },
  },
});
</script>

<style>
html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>