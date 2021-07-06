<template functional>
  <div id="content">
    <slot />
  </div>
</template>

<style lang="scss">
#content {
  &::before,
  &::after {
    display: table;
    clear: both;
    content: "";
  }
}
</style>
