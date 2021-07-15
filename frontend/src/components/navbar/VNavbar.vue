<template>
  <div
    class="navbar"
    :class="{
      [`navbar-${theme}`]: true,
      [`navbar-expand${expand ? '-' + expand : ''}`]: true,
    }"
  >
    <v-container :fluid="fluid">
      <slot name="toggler" v-bind="{ toggle, show, hide }">
        <button type="button" class="navbar-toggler" @click="toggle()">
          <span class="navbar-toggler-icon" />
        </button>
      </slot>

      <div ref="collapse" class="navbar-collapse collapse">
        <slot v-bind="{ toggle, show, hide }" />
      </div>
    </v-container>
  </div>
</template>

<script>
import { Collapse } from "bootstrap";

export default {
  inheritAttrs: false,
  provide() {
    return {
      navbar: true,
    };
  },
  props: {
    expand: {
      type: String,
      default: "md",
    },
    fluid: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: "light",
    },
  },
  data() {
    return {
      collapse: null,
    };
  },
  mounted() {
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false,
    });
  },
  beforeDestroy() {
    if (this.collapse) this.collapse.dispose();
  },
  methods: {
    toggle() {
      if (this.collapse) this.collapse.toggle();
    },
    show() {
      if (this.collapse) this.collapse.show();
    },
    hide() {
      if (this.collapse) this.collapse.hide();
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/navbar";
</style>
