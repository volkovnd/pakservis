<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  functional: true,

  props: {
    src: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: "",
    },
    fluid: {
      type: Boolean,
      default: false,
    },
  },

  render: (h, { data, props }) =>
    h(
      "img",
      mergeData(data, {
        attrs: {
          src: props.src,
          alt: props.alt,
        },
        class: {
          "img-fluid": props.fluid,
        },
      })
    ),
};
</script>

<style lang="scss">
@import "~bootstrap/scss/images";
</style>
