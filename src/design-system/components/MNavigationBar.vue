<template>
  <nav class="m-navigation-bar">
    <ul class="m-navigation-bar__list">
      <slot></slot>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MNavigationBar',
});
</script>

<style scoped>
.m-navigation-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: var(--color-surface);
  box-shadow: var(--elevation-2);
  border-top: 1px solid var(--color-outline-variant);
}

.m-navigation-bar__list {
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
