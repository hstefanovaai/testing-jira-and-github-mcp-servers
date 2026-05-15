<template>
  <div :class="['m-card', `m-card--${variant}`, { 'm-card--clickable': clickable }]" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MCard',
  props: {
    variant: {
      type: String,
      default: 'elevated',
      validator: (v) => ['elevated', 'filled', 'outlined'].includes(v),
    },
    clickable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  methods: {
    handleClick() {
      if (this.clickable) {
        this.$emit('click');
      }
    },
  },
});
</script>

<style scoped>
.m-card {
  border-radius: var(--shape-medium);
  background-color: var(--color-surface);
  padding: var(--spacing-4);
  transition: all 0.2s ease;
}

.m-card--elevated {
  box-shadow: var(--elevation-1);
}

.m-card--elevated:hover {
  box-shadow: var(--elevation-2);
}

.m-card--filled {
  background-color: var(--color-surface-variant);
  box-shadow: var(--elevation-0);
}

.m-card--filled:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.m-card--outlined {
  background-color: var(--color-surface);
  border: 1px solid var(--color-outline-variant);
  box-shadow: var(--elevation-0);
}

.m-card--outlined:hover {
  border-color: var(--color-on-surface-variant);
}

.m-card--clickable {
  cursor: pointer;
}
</style>
