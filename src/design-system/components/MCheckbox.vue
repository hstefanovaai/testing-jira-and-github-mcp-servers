<template>
  <label class="m-checkbox" :class="{ 'm-checkbox--disabled': disabled }">
    <input
      type="checkbox"
      class="m-checkbox__input"
      :checked="modelValue"
      :disabled="disabled"
      :aria-label="ariaLabel"
      @change="handleChange"
    />
    <span class="m-checkbox__box"></span>
    <span v-if="$slots.default" class="m-checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MCheckbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    ariaLabel: String,
  },
  emits: ['update:modelValue'],
  methods: {
    handleChange(event) {
      if (!this.disabled) {
        this.$emit('update:modelValue', event.target.checked);
      }
    },
  },
});
</script>

<style scoped>
.m-checkbox {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  cursor: pointer;
  user-select: none;
}

.m-checkbox__input {
  display: none;
}

.m-checkbox__box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 2px solid var(--color-outline);
  border-radius: var(--shape-extra-small);
  background-color: var(--color-surface);
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.m-checkbox__input:checked ~ .m-checkbox__box {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-on-primary);
}

.m-checkbox__input:checked ~ .m-checkbox__box::after {
  content: '✓';
  font-size: 14px;
  font-weight: bold;
}

.m-checkbox__input:focus-visible ~ .m-checkbox__box {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.m-checkbox__label {
  font-size: var(--font-size-body-medium);
  line-height: var(--line-height-body-medium);
  color: var(--color-on-surface);
}

.m-checkbox--disabled {
  opacity: 0.38;
  cursor: not-allowed;
}

.m-checkbox--disabled .m-checkbox__box {
  background-color: rgba(0, 0, 0, 0.12);
}
</style>
