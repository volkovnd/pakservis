<template>
  <ul
    :class="{
      nav: !navbar,
      'navbar-nav': !!navbar,
      'flex-column': column,
    }"
  >
    <slot />
  </ul>
</template>

<script>
export default {
  inject: {
    navbar: {
      from: "navbar",
      default: false,
    },
  },
  props: {
    column: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/nav";
</style>
