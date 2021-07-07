<template>
  <div
    :id="id"
    class="modal fade"
    tabindex="-1"
    :aria-labelledby="title ? id + '-label' : false"
    :aria-hidden="isShown ? 'false' : 'true'"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <slot
            name="title"
            v-bind="{ show, hide, toggle, id, isShown, title }"
          >
            <h5 v-if="title" :id="id + '-label'" class="modal-title">
              {{ title }}
            </h5>
          </slot>
          <VClose @click="hide" />
        </div>
        <div class="modal-body">
          <slot v-bind="{ show, hide, toggle, id, isShown }" />
        </div>
        <div v-if="!!$scopedSlots.footer" class="modal-footer">
          <slot name="footer" v-bind="{ show, hide, toggle, id, isShown }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
import uniqueId from "@/utils/uniqueId";

export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: uniqueId("modal-"),
    },
    shown: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      modal: null,

      isShown: this.shown,
    };
  },
  mounted() {
    this.modal = new Modal(this.$el);

    this.$el.addEventListener(`show${Modal.EVENT_KEY}`, () => {
      this.isShown = true;
    });

    this.$el.addEventListener(`hide${Modal.EVENT_KEY}`, () => {
      this.isShown = false;
    });
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
