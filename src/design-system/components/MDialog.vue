<template>
  <transition name="dialog">
    <div v-if="visible" class="m-dialog__overlay" @click.self="handleClose">
      <div class="m-dialog" role="dialog" :aria-modal="true" :aria-labelledby="`dialog-title-${id}`">
        <div v-if="$slots.header" :id="`dialog-title-${id}`" class="m-dialog__header">
          <slot name="header"></slot>
        </div>
        <div class="m-dialog__content">
          <slot></slot>
        </div>
        <div v-if="$slots.actions" class="m-dialog__actions">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closable: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['close'],
  data() {
    return {
      id: Math.random().toString(36).substring(7),
    };
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
  },
  methods: {
    handleClose() {
      if (this.closable) {
        this.$emit('close');
      }
    },
  },
  beforeUnmount() {
    document.body.style.overflow = '';
  },
});
</script>

<style scoped>
.m-dialog__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.32);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.m-dialog {
  background-color: var(--color-surface);
  border-radius: var(--shape-large);
  box-shadow: var(--elevation-5);
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
}

.m-dialog__header {
  padding: var(--spacing-6);
  border-bottom: 1px solid var(--color-outline-variant);
  font-size: var(--font-size-headline-small);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface);
}

.m-dialog__content {
  padding: var(--spacing-6);
  font-size: var(--font-size-body-large);
  line-height: var(--line-height-body-large);
  color: var(--color-on-surface);
}

.m-dialog__actions {
  display: flex;
  gap: var(--spacing-2);
  padding: var(--spacing-4) var(--spacing-6);
  border-top: 1px solid var(--color-outline-variant);
  justify-content: flex-end;
}

.dialog-enter-active,
.dialog-leave-active {
  transition: all 0.2s ease;
}

.dialog-enter-from {
  opacity: 0;
}

.dialog-enter-from .m-dialog {
  transform: scale(0.95);
}

.dialog-leave-to {
  opacity: 0;
}

.dialog-leave-to .m-dialog {
  transform: scale(0.95);
}
</style>
