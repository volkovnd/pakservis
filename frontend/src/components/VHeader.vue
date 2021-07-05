<template>
  <div id="header">
    <slot></slot>
  </div>
</template>

<style lang="scss">
#header {
  padding-top: map-get($spacers, 3);
  padding-bottom: map-get($spacers, 3);
  background-color: $white;
}
</style>
