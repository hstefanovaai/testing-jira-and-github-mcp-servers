<template>
  <button
    :class="['m-fab', `m-fab--${size}`, { 'm-fab--extended': extended, 'm-fab--disabled': disabled }]"
    :disabled="disabled"
    :aria-label="ariaLabel"
    @click="handleClick"
  >
    <span class="m-fab__icon">
      <slot name="icon"></slot>
    </span>
    <span v-if="extended" class="m-fab__label">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MFAB',
  props: {
    size: {
      type: String,
      default: 'regular',
      validator: (v) => ['small', 'regular', 'large'].includes(v),
    },
    extended: {
      type: Boolean,
      default: false,
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
.m-fab {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  border: none;
  border-radius: var(--shape-large);
  background-color: var(--color-primary-container);
  color: var(--color-on-primary-container);
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-label-large);
  box-shadow: var(--elevation-3);
}

.m-fab--small {
  width: 40px;
  height: 40px;
  font-size: 18px;
}

.m-fab--regular {
  width: 56px;
  height: 56px;
  font-size: 24px;
}

.m-fab--large {
  width: 96px;
  height: 96px;
  font-size: 36px;
}

.m-fab--extended {
  padding: var(--spacing-4) var(--spacing-6);
  width: auto;
  height: 56px;
  border-radius: var(--shape-large);
}

.m-fab__icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.m-fab__label {
  display: flex;
  align-items: center;
  margin-left: var(--spacing-2);
}

.m-fab:hover:not(.m-fab--disabled) {
  background-color: rgba(107, 80, 164, 0.92);
  box-shadow: var(--elevation-4);
}

.m-fab:active:not(.m-fab--disabled) {
  box-shadow: var(--elevation-3);
}

.m-fab--disabled {
  opacity: 0.38;
  cursor: not-allowed;
}
</style>
