<script>
import { mergeData } from "vue-functional-data-merge";
import LogoSrc from "@assets/logo.svg";

export default {
  functional: true,
  render: (h, { data }) =>
    h(
      "img",
      mergeData(data, {
        attrs: {
          src: LogoSrc,
          alt: "",
        },
        staticClass: "logo",
      })
    ),
};
</script>

<style lang="scss">
.logo {
  display: block;
  width: 100%;
  max-width: 300px;
}
</style>
