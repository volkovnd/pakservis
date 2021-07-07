<template>
  <div :id="id" ref="modal" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div v-if="!!$scopedSlots.title" class="modal-title">
            <slot name="title"></slot>
          </div>

          <VClose @click="hide()" />
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div v-if="!!$scopedSlots.footer" class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
import uniqueId from "@/utils/uniqueId";

export default {
  data() {
    return {
      modal: null,
      id: this.$attrs.id || uniqueId("modal-"),
    };
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
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
