<template>
  <div id="menu" class="sticky-top">
    <slot />
  </div>
</template>

<style lang="scss">
#menu {
  // padding-top: map-get($spacers, 3);
  // padding-bottom: map-get($spacers, 3);
  background-color: $primary;
}
</style>
