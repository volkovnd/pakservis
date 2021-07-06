<template>
  <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
    <slot />
  </div>
</template>

<script>
import "viewerjs/dist/viewer.min.css";
import Viewer from "viewerjs";

export default {
  provide() {
    return {
      view: this.view,

      addItem: this.addItem,
    };
  },
  data() {
    return {
      viewer: null,

      items: [],
    };
  },
  mounted() {
    this.viewer = new Viewer(this.$el, {
      loop: true,
      loading: true,
      movable: false,
      rotatable: false,
      scalable: false,
      zoomable: false,
      zoomOnTouch: false,
      zoomOnWheel: false,
      toolbar: {
        prev: true,
        next: true,
      },
      title: false,
      url(image) {
        return image.getAttribute("original");
      },
    });
  },
  beforeDestroy() {
    if (this.viewer) this.viewer.destroy();
  },
  methods: {
    next() {
      if (this.viewer) this.viewer.next();
    },
    prev() {
      if (this.viewer) this.viewer.prev();
    },
    show(index) {
      if (this.viewer) this.viewer.view(index);
    },
    hide() {
      if (this.viewer) this.viewer.hide();
    },
    update() {
      if (this.viewer) this.viewer.update();
    },
    addItem(item) {
      const index = this.items.push(item);

      this.update();

      return index;
    },
  },
};
</script>
