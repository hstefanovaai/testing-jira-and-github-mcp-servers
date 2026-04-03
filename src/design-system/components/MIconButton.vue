<template>
  <button
    class="m-icon-button"
    :class="[`m-icon-button--${variant}`, { 'm-icon-button--disabled': disabled }]"
    :disabled="disabled"
    :aria-label="ariaLabel"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MIconButton',
  props: {
    variant: {
      type: String,
      default: 'standard',
      validator: (v) => ['standard', 'filled', 'tonal', 'outlined'].includes(v),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      required: true,
    },
  },
  emits: ['click'],
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
});
</script>

<style scoped>
.m-icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 24px;
  color: var(--color-primary);
}

.m-icon-button--standard {
  background-color: transparent;
  color: var(--color-on-surface-variant);
}

.m-icon-button--standard:hover:not(.m-icon-button--disabled) {
  background-color: rgba(0, 0, 0, var(--state-layer-hover));
}

.m-icon-button--standard:active:not(.m-icon-button--disabled) {
  background-color: rgba(0, 0, 0, var(--state-layer-pressed));
}

.m-icon-button--filled {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}

.m-icon-button--filled:hover:not(.m-icon-button--disabled) {
  background-color: rgba(103, 80, 164, 0.92);
}

.m-icon-button--filled:active:not(.m-icon-button--disabled) {
  background-color: var(--color-primary);
}

.m-icon-button--tonal {
  background-color: var(--color-primary-container);
  color: var(--color-on-primary-container);
}

.m-icon-button--tonal:hover:not(.m-icon-button--disabled) {
  background-color: rgba(107, 80, 164, 0.92);
}

.m-icon-button--outlined {
  background-color: transparent;
  color: var(--color-on-surface-variant);
  border: 1px solid var(--color-outline);
}

.m-icon-button--outlined:hover:not(.m-icon-button--disabled) {
  background-color: rgba(0, 0, 0, var(--state-layer-hover));
}

.m-icon-button--disabled {
  opacity: 0.38;
  cursor: not-allowed;
}
</style>
