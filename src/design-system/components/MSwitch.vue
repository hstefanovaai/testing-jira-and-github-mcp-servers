<template>
  <label class="m-switch" :class="{ 'm-switch--disabled': disabled }">
    <input
      type="checkbox"
      class="m-switch__input"
      :checked="modelValue"
      :disabled="disabled"
      :aria-label="ariaLabel"
      @change="handleChange"
    />
    <span class="m-switch__track">
      <span class="m-switch__thumb"></span>
    </span>
    <span v-if="$slots.default" class="m-switch__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MSwitch',
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
.m-switch {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-3);
  cursor: pointer;
  user-select: none;
}

.m-switch__input {
  display: none;
}

.m-switch__track {
  display: flex;
  align-items: center;
  width: 52px;
  height: 32px;
  padding: 2px;
  border-radius: var(--shape-full);
  background-color: var(--color-outline-variant);
  transition: background-color 0.2s ease;
  flex-shrink: 0;
  box-sizing: border-box;
}

.m-switch__thumb {
  display: flex;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--color-outline);
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.m-switch__input:checked ~ .m-switch__track {
  background-color: var(--color-primary);
}

.m-switch__input:checked ~ .m-switch__track .m-switch__thumb {
  transform: translateX(20px);
  background-color: var(--color-on-primary);
}

.m-switch__input:focus-visible ~ .m-switch__track {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.m-switch__label {
  font-size: var(--font-size-body-medium);
  line-height: var(--line-height-body-medium);
  color: var(--color-on-surface);
}

.m-switch--disabled {
  opacity: 0.38;
  cursor: not-allowed;
}

.m-switch--disabled .m-switch__track {
  background-color: rgba(0, 0, 0, 0.12);
}
</style>
