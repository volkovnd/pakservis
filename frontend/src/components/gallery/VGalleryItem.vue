<template>
  <div class="col">
    <div class="gallery-item">
      <img :src="src" :original="originalSrc" :alt="title" v-bind="$attrs" />
    </div>
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

<style lang="scss">
.gallery-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;

  & > img {
    display: block;
    max-width: 100%;
    max-height: 150px;
  }
}
</style>
