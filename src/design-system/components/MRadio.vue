<template>
  <label class="m-radio" :class="{ 'm-radio--disabled': disabled }">
    <input
      type="radio"
      class="m-radio__input"
      :name="name"
      :value="value"
      :checked="modelValue === value"
      :disabled="disabled"
      :aria-label="ariaLabel"
      @change="handleChange"
    />
    <span class="m-radio__circle">
      <span class="m-radio__dot"></span>
    </span>
    <span v-if="$slots.default" class="m-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MRadio',
  props: {
    modelValue: {
      type: [String, Number],
    },
    value: {
      type: [String, Number],
      required: true,
    },
    name: String,
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
        this.$emit('update:modelValue', event.target.value);
      }
    },
  },
});
</script>

<style scoped>
.m-radio {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  cursor: pointer;
  user-select: none;
}

.m-radio__input {
  display: none;
}

.m-radio__circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 2px solid var(--color-outline);
  border-radius: 50%;
  background-color: var(--color-surface);
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.m-radio__dot {
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: var(--color-primary);
  transition: all 0.2s ease;
}

.m-radio__input:checked ~ .m-radio__circle {
  border-color: var(--color-primary);
}

.m-radio__input:checked ~ .m-radio__circle .m-radio__dot {
  width: 8px;
  height: 8px;
}

.m-radio__input:focus-visible ~ .m-radio__circle {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.m-radio__label {
  font-size: var(--font-size-body-medium);
  line-height: var(--line-height-body-medium);
  color: var(--color-on-surface);
}

.m-radio--disabled {
  opacity: 0.38;
  cursor: not-allowed;
}

.m-radio--disabled .m-radio__circle {
  background-color: rgba(0, 0, 0, 0.12);
}
</style>
