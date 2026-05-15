<template>
  <header :class="['m-top-app-bar', `m-top-app-bar--${variant}`]">
    <div class="m-top-app-bar__content">
      <div v-if="$slots.leading" class="m-top-app-bar__leading">
        <slot name="leading"></slot>
      </div>
      <div class="m-top-app-bar__title">
        <slot>{{ title }}</slot>
      </div>
      <div v-if="$slots.actions" class="m-top-app-bar__actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MTopAppBar',
  props: {
    title: String,
    variant: {
      type: String,
      default: 'small',
      validator: (v) => ['small', 'medium', 'large'].includes(v),
    },
  },
});
</script>

<style scoped>
.m-top-app-bar {
  background-color: var(--color-surface);
  box-shadow: var(--elevation-2);
  color: var(--color-on-surface);
}

.m-top-app-bar--small {
  height: 64px;
  padding: 0 var(--spacing-4);
}

.m-top-app-bar--medium {
  height: 112px;
  padding: var(--spacing-4);
}

.m-top-app-bar--large {
  height: 152px;
  padding: var(--spacing-6);
}

.m-top-app-bar__content {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  height: 100%;
}

.m-top-app-bar__leading {
  display: flex;
  align-items: center;
}

.m-top-app-bar__title {
  flex: 1;
  font-size: var(--font-size-title-large);
  font-weight: var(--font-weight-medium);
}

.m-top-app-bar__actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}
</style>
