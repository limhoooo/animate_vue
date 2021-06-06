<template>
  <div class="w100 h50">
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      :leave-active-class="`animate__animated ${prodsClass.animate}`"
    >
      <div class="w100 h100" v-if="firstPage">
        <div class="firstPageTextBox" :class="prodsClass.textRight">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    prodsClass: {
      type: Object,
    },
    firstPage: {},
  },
});
</script>

<style scoped>
</style>