<template>
  <transition name="snackbar">
    <div v-if="visible" :class="['m-snackbar', `m-snackbar--${variant}`]" role="status" :aria-live="ariaLive">
      <div class="m-snackbar__content">
        <span class="m-snackbar__message">{{ message }}</span>
        <slot></slot>
      </div>
      <button v-if="action" type="button" class="m-snackbar__action" @click="handleAction">
        {{ action }}
      </button>
      <button
        v-if="closable"
        type="button"
        class="m-snackbar__close"
        aria-label="Close snackbar"
        @click="close"
      >
        ✕
      </button>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MSnackbar',
  props: {
    message: {
      type: String,
      required: true,
    },
    action: String,
    closable: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 4000,
    },
    variant: {
      type: String,
      default: 'default',
      validator: (v) => ['default', 'error', 'success'].includes(v),
    },
    ariaLive: {
      type: String,
      default: 'polite',
      validator: (v) => ['polite', 'assertive'].includes(v),
    },
  },
  emits: ['action', 'close'],
  data() {
    return {
      visible: false,
      timeoutId: null,
    };
  },
  methods: {
    show() {
      this.visible = true;
      if (this.duration > 0) {
        this.timeoutId = setTimeout(() => {
          this.close();
        }, this.duration);
      }
    },
    close() {
      this.visible = false;
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.$emit('close');
    },
    handleAction() {
      this.$emit('action');
      this.close();
    },
  },
});
</script>

<style scoped>
.m-snackbar {
  position: fixed;
  bottom: var(--spacing-4);
  left: var(--spacing-4);
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-4);
  background-color: var(--color-on-surface);
  color: var(--color-surface);
  border-radius: var(--shape-extra-small);
  box-shadow: var(--elevation-3);
  z-index: 1000;
  max-width: calc(100vw - var(--spacing-8));
  font-size: var(--font-size-body-medium);
}

.m-snackbar__content {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.m-snackbar__message {
  line-height: var(--line-height-body-medium);
}

.m-snackbar__action {
  padding: var(--spacing-2) var(--spacing-3);
  border: none;
  background: none;
  color: var(--color-primary);
  font-size: var(--font-size-label-large);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: opacity 0.2s ease;
  flex-shrink: 0;
}

.m-snackbar__action:hover {
  opacity: 0.8;
}

.m-snackbar__close {
  padding: 0;
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  color: var(--color-surface);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.m-snackbar--error {
  background-color: var(--color-error);
  color: var(--color-on-error);
}

.m-snackbar--error .m-snackbar__action {
  color: var(--color-on-error);
}

.m-snackbar--success {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}

.m-snackbar--success .m-snackbar__action {
  color: var(--color-on-primary);
}

.snackbar-enter-active,
.snackbar-leave-active {
  transition: all 0.3s ease;
}

.snackbar-enter-from {
  transparency: 0;
  transform: translateY(100px);
}

.snackbar-leave-to {
  transparency: 0;
  transform: translateY(100px);
}
</style>
