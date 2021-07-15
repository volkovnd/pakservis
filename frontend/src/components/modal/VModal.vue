<template>
  <div class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 v-if="!!$scopedSlots.title" class="modal-title">
            <slot name="title"></slot>
          </h5>

          <VClose @click="hide" />
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div v-if="!!$scopedSlots.footer" class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";

export default {
  data() {
    return {
      modal: null,
    };
  },
  mounted() {
    this.modal = new Modal(this.$el);
  },
  beforeDestroy() {
    if (this.modal) this.modal.dispose();
  },
  methods: {
    toggle() {
      if (this.modal) this.modal.toggle();
    },
    show() {
      if (this.modal) this.modal.show();
    },
    hide() {
      if (this.modal) this.modal.hide();
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/modal";
</style>
