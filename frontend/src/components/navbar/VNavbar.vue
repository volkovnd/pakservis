<template>
  <div
    class="navbar"
    :class="{
      'navbar-expand': !expand,
      [`navbar-expand-${expand}`]: !!expand,
      [`navbar-${theme}`]: !!theme,
    }"
  >
    <v-container :fluid="fluid" class="g-0">
      <button
        ref="toggler"
        type="button"
        class="navbar-toggler"
        @click="toggle()"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div :id="id" ref="collapse" class="navbar-collapse collapse">
        <slot />
      </div>
    </v-container>
  </div>
</template>

<script>
import { Collapse } from "bootstrap";

export default {
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
    theme: {
      type: String,
      default: "dark",
    },
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      collapse: null,

      id: this.$attrs.id || `navbar-${this._uid}`,
    };
  },
  mounted() {
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false,
    });
  },
  beforeDestroy() {
    // this.collapse;
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
