<template>
  <section class="section">
    <div v-if="!!$scopedSlots.title" class="section-title">
      <slot name="title"></slot>
    </div>

    <slot />
  </section>
</template>

<style lang="scss">
.section {
  padding-top: map-get($spacers, 3);
  padding-bottom: map-get($spacers, 3);

  &-title {
    margin-bottom: $headings-margin-bottom;
    font-size: $h2-font-size;
    font-weight: $headings-font-weight;
  }
}
</style>
