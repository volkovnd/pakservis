<template>
  <yandex-map :settings="settings" :coords="coords" ymap-class="map">
    <ymap-marker
      :marker-id="markerId"
      :coords="coords"
      :hint-content="hintContent"
    />
  </yandex-map>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import { YANDEX_MAP, SITE_NAME } from "@constants";

export default {
  components: {
    yandexMap,
    ymapMarker,
  },
  props: {
    coords: {
      type: Array,
      default: null,
    },
    settings: {
      type: Object,
      default: () => YANDEX_MAP,
    },
    markerId: {
      type: String,
      default: "123",
    },
    hintContent: {
      type: String,
      default: SITE_NAME,
    },
  },
};
</script>

<style lang="scss">
.map {
  width: 100%;
  min-height: 300px;
}
</style>
