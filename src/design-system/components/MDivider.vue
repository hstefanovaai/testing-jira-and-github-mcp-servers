<template>
  <div class="m-divider" :class="{ 'm-divider--inset': inset }"></div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MDivider',
  props: {
    inset: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.m-divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-outline-variant);
  margin: var(--spacing-0);
}

.m-divider--inset {
  margin-left: var(--spacing-4);
  margin-right: var(--spacing-4);
  width: calc(100% - var(--spacing-8));
}
</style>
