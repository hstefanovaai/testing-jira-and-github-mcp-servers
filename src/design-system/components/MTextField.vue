<template>
  <div class="m-text-field">
    <div class="m-text-field__container">
      <label v-if="label" :for="`input-${id}`" class="m-text-field__label">
        {{ label }}
      </label>
      <input
        :id="`input-${id}`"
        :class="['m-text-field__input', `m-text-field__input--${variant}`, { 'm-text-field__input--error': error }]"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :aria-label="ariaLabel"
        :aria-describedby="`helper-${id}`"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <div class="m-text-field__border"></div>
    </div>
    <div :id="`helper-${id}`" class="m-text-field__helper-text" :class="{ 'm-text-field__helper-text--error': error }">
      {{ error || helperText }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MTextField',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    label: String,
    placeholder: String,
    helperText: String,
    error: String,
    variant: {
      type: String,
      default: 'filled',
      validator: (v) => ['filled', 'outlined'].includes(v),
    },
    type: {
      type: String,
      default: 'text',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    ariaLabel: String,
  },
  emits: ['update:modelValue', 'blur', 'focus'],
  data() {
    return {
      id: Math.random().toString(36).substring(7),
      isFocused: false,
    };
  },
  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
    handleBlur() {
      this.isFocused = false;
      this.$emit('blur');
    },
    handleFocus() {
      this.isFocused = true;
      this.$emit('focus');
    },
  },
});
</script>

<style scoped>
.m-text-field {
  width: 100%;
  margin-bottom: var(--spacing-4);
}

.m-text-field__container {
  position: relative;
  width: 100%;
}

.m-text-field__label {
  display: block;
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface-variant);
  margin-bottom: var(--spacing-2);
  transition: color 0.2s ease;
}

.m-text-field__input {
  width: 100%;
  min-height: 56px;
  padding: var(--spacing-4);
  font-size: var(--font-size-body-large);
  line-height: var(--line-height-body-large);
  letter-spacing: var(--letter-spacing-body-large);
  color: var(--color-on-surface);
  border: none;
  border-radius: var(--shape-extra-small) var(--shape-extra-small) 0 0;
  background-color: var(--color-surface-variant);
  transition: all 0.2s ease;
  box-sizing: border-box;
}

/* Filled variant */
.m-text-field__input--filled {
  background-color: rgba(79, 55, 138, 0.05);
  border-bottom: 1px solid var(--color-outline);
}

.m-text-field__input--filled:focus {
  outline: none;
  background-color: rgba(79, 55, 138, 0.08);
  border-bottom-color: var(--color-primary);
  border-bottom-width: 2px;
  padding-bottom: calc(var(--spacing-4) - 1px);
}

.m-text-field__input--filled:hover:not(:disabled) {
  background-color: rgba(79, 55, 138, 0.08);
}

/* Outlined variant */
.m-text-field__input--outlined {
  background-color: transparent;
  border: 1px solid var(--color-outline);
  border-radius: var(--shape-extra-small);
  padding: var(--spacing-4);
}

.m-text-field__input--outlined:focus {
  outline: none;
  border-color: var(--color-primary);
  border-width: 2px;
  padding: calc(var(--spacing-4) - 1px);
}

.m-text-field__input--outlined:hover:not(:disabled) {
  border-color: var(--color-on-surface);
}

/* Error state */
.m-text-field__input--error {
  border-color: var(--color-error);
}

.m-text-field__input--error:focus {
  border-color: var(--color-error);
}

/* Disabled state */
.m-text-field__input:disabled {
  background-color: rgba(0, 0, 0, 0.04);
  color: rgba(0, 0, 0, 0.38);
  cursor: not-allowed;
}

.m-text-field__border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--color-outline);
}

.m-text-field__helper-text {
  font-size: var(--font-size-body-small);
  color: var(--color-on-surface-variant);
  margin-top: var(--spacing-2);
  min-height: 16px;
}

.m-text-field__helper-text--error {
  color: var(--color-error);
}
</style>
