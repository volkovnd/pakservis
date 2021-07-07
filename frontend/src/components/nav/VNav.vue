<template>
  <ul
    :class="{
      nav: !navbar,
      'navbar-nav': !!navbar,
      'flex-column': column,
      'nav-tabs': tabs,
      'nav-pills': pills,
      'nav-fill': fill,
      'nav-justified': justified,
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
    tabs: {
      type: Boolean,
      default: false,
    },
    pills: {
      type: Boolean,
      default: false,
    },
    fill: {
      type: Boolean,
      default: false,
    },
    justified: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/nav";
</style>
