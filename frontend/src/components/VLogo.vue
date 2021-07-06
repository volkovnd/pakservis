<template functional>
  <LogoComponent
    class="logo"
    :width="props.width"
    :height="props.height"
    :alt="alt"
  />
</template>

<script>
import { SITE_NAME } from "@constants";
import LogoComponent from "@assets/logo.svg";

export default {
  components: {
    LogoComponent,
  },
  props: {
    alt: {
      type: String,
      default: SITE_NAME,
    },
    width: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.logo {
  display: block;
  width: 100%;
  max-width: 300px;
}
</style>
