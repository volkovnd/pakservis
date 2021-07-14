<template>
  <footer id="footer">
    <slot />
  </footer>
</template>

<style lang="scss">
#footer {
  padding-top: map-get($spacers, 4);
  padding-bottom: map-get($spacers, 4);
  margin-top: auto;
  color: $white;
  background-color: $primary;
}
</style>
