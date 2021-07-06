<template>
  <li v-if="!active" class="breadcrumb-item">
    <a :href="href">
      <slot />
    </a>
  </li>
  <li v-else class="breadcrumb-item active" aria-current="page">
    <slot />
  </li>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: null,
    },
  },
};
</script>
