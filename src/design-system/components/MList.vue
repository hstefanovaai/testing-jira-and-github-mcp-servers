<template>
  <ul class="m-list" :class="{ 'm-list--dense': dense }">
    <slot></slot>
  </ul>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MList',
  props: {
    dense: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.m-list {
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: var(--color-surface);
}

.m-list--dense {
  padding: 0;
}
</style>
