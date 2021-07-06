<template>
  <button
    type="button"
    class="btn-close"
    :disabled="disabled"
    :aria-label="label"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Закрыть",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/close";
</style>
