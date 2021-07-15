<template>
  <LogoComponent class="logo" v-bind="$attrs" />
</template>

<script>
export default {
  components: {
    LogoComponent: () => import("@assets/logo.svg"),
  },
  inheritAttrs: false,
};
</script>

<style lang="scss">
.logo {
  display: block;
  width: 300px;
  max-width: 100%;
}
</style>
