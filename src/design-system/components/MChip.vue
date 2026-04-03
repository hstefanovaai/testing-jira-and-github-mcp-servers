<template>
  <div :class="['m-chip', `m-chip--${variant}`, { 'm-chip--selected': modelValue, 'm-chip--disabled': disabled }]">
    <span class="m-chip__content">
      <slot></slot>
    </span>
    <button
      v-if="removable"
      type="button"
      class="m-chip__remove"
      :aria-label="`Remove ${label || 'chip'}`"
      @click="handleRemove"
    >
      ✕
    </button>
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="m-chip__input"
      @change="handleChange"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MChip',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'assist',
      validator: (v) => ['assist', 'filter', 'input', 'suggestion'].includes(v),
    },
    removable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: String,
  },
  emits: ['update:modelValue', 'remove'],
  methods: {
    handleChange(event) {
      if (!this.disabled) {
        this.$emit('update:modelValue', event.target.checked);
      }
    },
    handleRemove(event) {
      event.stopPropagation();
      this.$emit('remove');
    },
  },
});
</script>

<style scoped>
.m-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  height: 32px;
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--shape-medium);
  font-size: var(--font-size-label-large);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-label-large);
  letter-spacing: var(--letter-spacing-label-large);
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid var(--color-outline);
  background-color: var(--color-surface);
  color: var(--color-on-surface);
}

.m-chip__input {
  display: none;
}

.m-chip__content {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

/* Assist variant */
.m-chip--assist {
  background-color: var(--color-surface-variant);
  border-color: var(--color-outline-variant);
}

.m-chip--assist:hover:not(.m-chip--disabled) {
  background-color: rgba(0, 0, 0, 0.04);
}

/* Filter variant */
.m-chip--filter.m-chip--selected {
  background-color: var(--color-primary-container);
  color: var(--color-on-primary-container);
  border-color: transparent;
}

.m-chip--filter:not(.m-chip--selected) {
  background-color: transparent;
  border-color: var(--color-outline);
}

/* Input variant */
.m-chip--input.m-chip--selected {
  background-color: var(--color-primary-container);
  color: var(--color-on-primary-container);
}

/* Suggestion variant */
.m-chip--suggestion {
  background-color: transparent;
  border-color: var(--color-outline);
}

/* Remove button */
.m-chip__remove {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  color: inherit;
  font-size: 14px;
}

/* Disabled state */
.m-chip--disabled {
  opacity: 0.38;
  cursor: not-allowed;
  background-color: rgba(0, 0, 0, 0.12);
}
</style>
