<template>
  <div :id="id" class="navbar" :class="[expandClassName, themeClassName]">
    <v-container :fluid="fluid">
      <slot name="toggler" v-bind="{ id, toggle, show, hide, isShown }">
        <button type="button" class="navbar-toggler" @click="toggle">
          <span class="navbar-toggler-icon" />
        </button>
      </slot>

      <div ref="collapse" class="navbar-collapse collapse">
        <slot v-bind="{ toggle, show, hide, isShown, id }"></slot>
      </div>
    </v-container>
  </div>
</template>

<script>
import { Collapse } from "bootstrap";
import uniqueId from "@/utils/uniqueId";

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
    theme: {
      type: String,
      default: "dark",
    },
    fluid: {
      type: Boolean,
      default: false,
    },
    shown: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      id: this.$attrs.id || uniqueId("navbar-"),

      collapse: null,

      isShown: this.shown,
    };
  },
  computed: {
    expandClassName() {
      if (!this.expand) return "navbar-expand";

      return `navbar-expand-${this.expand}`;
    },
    themeClassName() {
      return `navbar-${this.theme}`;
    },
  },
  mounted() {
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false,
    });

    this.$el.addEventListener(`hide${Collapse.EVENT_KEY}`, () => {
      this.isShown = false;
    });

    this.$el.addEventListener(`show${Collapse.EVENT_KEY}`, () => {
      this.isShown = true;
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
