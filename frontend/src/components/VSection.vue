<template>
  <section>
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: "light",
    },
  },
};
</script>
