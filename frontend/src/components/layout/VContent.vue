<template>
  <div id="content">
    <slot />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$el.querySelectorAll("img").forEach((el) => {
      el.classList.add("image");

      const parentEl = el.parentElement;

      if (parentEl.tagName === "P") {
        parentEl.classList.add("float-end");

        parentEl.previousElementSibling.classList.add("clearfix");
      }
    });
  },
};
</script>

<style lang="scss">
#content {
  @include clearfix();

  .image {
    display: block;
    width: 100%;
    max-width: 200px;
    height: auto;
    max-height: 150px;
  }
}
</style>
