<template>
  <button
    :type="type"
    :class="classNames"
    :disabled="disabled"
    :aria-pressed="active ? 'true' : false"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    theme: {
      type: [String, Boolean],
      default: "primary",
    },
    outline: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "md",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classNames() {
      let classNames = [];

      if (this.size && this.size !== "md") {
        classNames.push(`btn-${this.size}`);
      }

      if (this.link) {
        classNames.push("btn-link");
      } else {
        if (this.theme) {
          classNames.push(`btn-${this.outline ? "outline-" : ""}${this.theme}`);
        }
      }

      return classNames;
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/buttons";
</style>
