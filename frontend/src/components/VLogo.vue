<script>
import { mergeData } from "vue-functional-data-merge";
import LogoComponent from "@assets/logo.svg";

export default {
  functional: true,
  render: (h, { data }) =>
    h(LogoComponent, mergeData(data, { staticClass: "logo" })),
};
</script>

<style lang="scss">
.logo {
  display: block;
  width: 300px;
  max-width: 100%;
}
</style>
