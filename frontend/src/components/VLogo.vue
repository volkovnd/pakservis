<script>
import { mergeData } from "vue-functional-data-merge";
import { SITE_NAME } from "@constants";
import LogoComponent from "@assets/logo.svg";

export default {
  functional: true,
  props: {
    alt: {
      type: String,
      default: SITE_NAME,
    },
    width: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
  },
  render: (h, { data, props }) => {
    return h(
      LogoComponent,
      mergeData(data, {
        staticClass: "logo",
        attrs: {
          width: props.width,
          height: props.height,
          alt: props.alt,
        },
      })
    );
  },
};
</script>

<style lang="scss">
.logo {
  display: block;
  width: 100%;
  max-width: 300px;
}
</style>
