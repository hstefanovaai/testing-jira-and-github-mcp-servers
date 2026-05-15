<template>
  <li
    :class="[
      'm-list-item',
      { 'm-list-item--selected': selected, 'm-list-item--disabled': disabled },
    ]"
  >
    <button
      v-if="clickable"
      type="button"
      class="m-list-item__button"
      :disabled="disabled"
      @click="handleClick"
    >
      <div v-if="$slots.leading" class="m-list-item__leading">
        <slot name="leading"></slot>
      </div>
      <div class="m-list-item__content">
        <slot></slot>
      </div>
      <div v-if="$slots.trailing" class="m-list-item__trailing">
        <slot name="trailing"></slot>
      </div>
    </button>
    <div v-else class="m-list-item__content-wrapper">
      <div v-if="$slots.leading" class="m-list-item__leading">
        <slot name="leading"></slot>
      </div>
      <div class="m-list-item__content">
        <slot></slot>
      </div>
      <div v-if="$slots.trailing" class="m-list-item__trailing">
        <slot name="trailing"></slot>
      </div>
    </div>
  </li>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MListItem',
  props: {
    clickable: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit('click');
      }
    },
  },
});
</script>

<style scoped>
.m-list-item {
  position: relative;
  list-style: none;
}

.m-list-item__button {
  width: 100%;
  padding: var(--spacing-3) var(--spacing-4);
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  transition: all 0.2s ease;
  text-align: left;
}

.m-list-item__button:hover:not(:disabled) {
  background-color: rgba(0, 0, 0, var(--state-layer-hover));
}

.m-list-item__button:active:not(:disabled) {
  background-color: rgba(0, 0, 0, var(--state-layer-pressed));
}

.m-list-item__content-wrapper {
  padding: var(--spacing-3) var(--spacing-4);
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}

.m-list-item__leading {
  display: flex;
  align-items: center;
  color: var(--color-on-surface-variant);
}

.m-list-item__content {
  flex: 1;
  color: var(--color-on-surface);
  font-size: var(--font-size-body-large);
  line-height: var(--line-height-body-large);
}

.m-list-item__trailing {
  display: flex;
  align-items: center;
  color: var(--color-on-surface-variant);
}

.m-list-item--selected {
  background-color: rgba(103, 80, 164, 0.08);
}

.m-list-item--selected .m-list-item__leading {
  color: var(--color-primary);
}

.m-list-item--disabled {
  opacity: 0.38;
}

.m-list-item--disabled .m-list-item__button {
  cursor: not-allowed;
}
</style>
