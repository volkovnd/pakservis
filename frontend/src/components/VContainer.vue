<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  functional: true,
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      "div",
      mergeData(data, {
        class: {
          "container-fluid": props.fluid,
          container: !props.fluid,
        },
      }),
      children
    );
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/container";
</style>
