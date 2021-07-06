<template>
  <div class="col">
    <img
      :src="src"
      :original="originalSrc"
      :alt="title"
      :class="$style.image"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  inject: {
    addItem: "addItem",
  },
  inheritAttrs: false,
  props: {
    src: {
      type: String,
      required: true,
    },
    original: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      index: null,
      originalSrc: this.original || this.src,
    };
  },
  created() {
    this.index = this.addItem(this);
  },
};
</script>

<style lang="scss" module>
.image {
  display: block;
  max-width: 100%;
  max-height: 150px;
}
</style>
