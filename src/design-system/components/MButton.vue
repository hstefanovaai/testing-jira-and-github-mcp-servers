<template>
  <button
    :class="['m-button', `m-button--${variant}`, { 'm-button--disabled': disabled }]"
    :disabled="disabled"
    :aria-label="ariaLabel"
    :type="type"
    @click="handleClick"
  >
    <span class="m-button__content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MButton',
  props: {
    variant: {
      type: String,
      default: 'filled',
      validator: (v) => ['filled', 'outlined', 'text', 'elevated', 'tonal'].includes(v),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
      validator: (v) => ['button', 'submit', 'reset'].includes(v),
    },
    ariaLabel: String,
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
.m-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-6);
  min-height: 40px;
  border-radius: var(--shape-medium);
  font-size: var(--font-size-label-large);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-label-large);
  letter-spacing: var(--letter-spacing-label-large);
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  user-select: none;
}

.m-button__content {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

/* Filled variant */
.m-button--filled {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  box-shadow: var(--elevation-0);
}

.m-button--filled:hover:not(.m-button--disabled) {
  background-color: rgb(103, 80, 164, 0.92);
  box-shadow: var(--elevation-1);
}

.m-button--filled:active:not(.m-button--disabled) {
  box-shadow: var(--elevation-0);
}

.m-button--filled:focus-visible:not(.m-button--disabled) {
  outline: 2px solid var(--color-on-primary);
  outline-offset: 2px;
}

/* Outlined variant */
.m-button--outlined {
  background-color: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-outline);
}

.m-button--outlined:hover:not(.m-button--disabled) {
  background-color: rgba(103, 80, 164, var(--state-layer-hover));
}

.m-button--outlined:active:not(.m-button--disabled) {
  background-color: rgba(103, 80, 164, var(--state-layer-pressed));
}

.m-button--outlined:focus-visible:not(.m-button--disabled) {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Text variant */
.m-button--text {
  background-color: transparent;
  color: var(--color-primary);
}

.m-button--text:hover:not(.m-button--disabled) {
  background-color: rgba(103, 80, 164, var(--state-layer-hover));
}

.m-button--text:active:not(.m-button--disabled) {
  background-color: rgba(103, 80, 164, var(--state-layer-pressed));
}

.m-button--text:focus-visible:not(.m-button--disabled) {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Elevated variant */
.m-button--elevated {
  background-color: var(--color-surface-variant);
  color: var(--color-primary);
  box-shadow: var(--elevation-1);
}

.m-button--elevated:hover:not(.m-button--disabled) {
  background-color: var(--color-surface-variant);
  box-shadow: var(--elevation-2);
}

.m-button--elevated:active:not(.m-button--disabled) {
  box-shadow: var(--elevation-1);
}

.m-button--elevated:focus-visible:not(.m-button--disabled) {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Tonal variant */
.m-button--tonal {
  background-color: var(--color-primary-container);
  color: var(--color-on-primary-container);
}

.m-button--tonal:hover:not(.m-button--disabled) {
  background-color: rgba(107, 80, 164, 0.92);
}

.m-button--tonal:active:not(.m-button--disabled) {
  background-color: rgb(103, 80, 164);
}

.m-button--tonal:focus-visible:not(.m-button--disabled) {
  outline: 2px solid var(--color-on-primary-container);
  outline-offset: 2px;
}

/* Disabled state */
.m-button--disabled {
  opacity: 0.38;
  cursor: not-allowed;
}
</style>
