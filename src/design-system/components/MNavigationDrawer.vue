<template>
  <transition name="drawer">
    <div v-if="visible" class="m-navigation-drawer__overlay" @click.self="handleClose"></div>
  </transition>
  <transition name="drawer-slide">
    <aside
      v-if="visible"
      class="m-navigation-drawer"
      role="navigation"
      :aria-labelledby="`drawer-title-${id}`"
    >
      <div v-if="$slots.header" :id="`drawer-title-${id}`" class="m-navigation-drawer__header">
        <slot name="header"></slot>
      </div>
      <div class="m-navigation-drawer__content">
        <slot></slot>
      </div>
    </aside>
  </transition>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MNavigationDrawer',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    modal: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['close'],
  data() {
    return {
      id: Math.random().toString(36).substring(7),
    };
  },
  watch: {
    visible(newVal) {
      if (newVal && this.modal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
  },
  methods: {
    handleClose() {
      this.$emit('close');
    },
  },
  beforeUnmount() {
    document.body.style.overflow = '';
  },
});
</script>

<style scoped>
.m-navigation-drawer__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.32);
  z-index: 998;
}

.m-navigation-drawer {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 360px;
  background-color: var(--color-surface);
  box-shadow: var(--elevation-1);
  z-index: 999;
  overflow-y: auto;
}

.m-navigation-drawer__header {
  padding: var(--spacing-6);
  border-bottom: 1px solid var(--color-outline-variant);
  font-size: var(--font-size-headline-small);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface);
}

.m-navigation-drawer__content {
  padding: var(--spacing-4) 0;
}

.drawer-enter-active,
.drawer-leave-active,
.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition: all 0.3s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-slide-enter-from {
  transform: translateX(-100%);
}

.drawer-slide-leave-to {
  transform: translateX(-100%);
}
</style>
