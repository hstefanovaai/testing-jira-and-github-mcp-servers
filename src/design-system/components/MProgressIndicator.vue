<template>
  <div v-if="type === 'linear'" class="m-progress--linear">
    <div class="m-progress__bar" :style="{ width: `${value}%` }"></div>
  </div>
  <div v-else class="m-progress--circular">
    <svg viewBox="0 0 100 100" class="m-progress__svg">
      <circle class="m-progress__circle-bg" cx="50" cy="50" r="45"></circle>
      <circle
        class="m-progress__circle"
        cx="50"
        cy="50"
        r="45"
        :style="{ strokeDashoffset: `${(1 - value / 100) * 282.74}` }"
      ></circle>
    </svg>
    <div v-if="showLabel" class="m-progress__label">{{ value }}%</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MProgressIndicator',
  props: {
    value: {
      type: Number,
      default: 0,
      validator: (v) => v >= 0 && v <= 100,
    },
    type: {
      type: String,
      default: 'linear',
      validator: (v) => ['linear', 'circular'].includes(v),
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style scoped>
.m-progress--linear {
  width: 100%;
  height: 4px;
  background-color: var(--color-surface-variant);
  border-radius: var(--shape-full);
  overflow: hidden;
}

.m-progress__bar {
  height: 100%;
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}

.m-progress--circular {
  position: relative;
  width: 100px;
  height: 100px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.m-progress__svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.m-progress__circle-bg {
  fill: none;
  stroke: var(--color-surface-variant);
  stroke-width: 4;
}

.m-progress__circle {
  fill: none;
  stroke: var(--color-primary);
  stroke-width: 4;
  stroke-dasharray: 282.74;
  stroke-dashoffset: 282.74;
  transition: stroke-dashoffset 0.3s ease;
  stroke-linecap: round;
}

.m-progress__label {
  position: absolute;
  font-size: var(--font-size-label-medium);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface);
}
</style>
