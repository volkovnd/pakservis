<template>
  <div
    :class="{
      [`container${fluid ? '-fluid' : ''}`]: true,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/containers";
</style>
