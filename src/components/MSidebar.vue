<template>
  <aside class="m-sidebar" :class="{ 'm-sidebar--collapsed': isCollapsed }">
    <!-- Header with Collapse Toggle -->
    <div class="m-sidebar__header">
      <button
        class="m-sidebar__toggle"
        :title="isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'"
        @click="isCollapsed = !isCollapsed"
        aria-label="Toggle sidebar"
      >
        <span class="m-sidebar__toggle-icon">☰</span>
      </button>
    </div>

    <!-- Profile Section -->
    <div class="m-sidebar__profile" v-if="!isCollapsed">
      <div class="m-sidebar__profile-avatar">
        <img src="https://via.placeholder.com/40" alt="User avatar" />
      </div>
      <div class="m-sidebar__profile-info">
        <div class="m-sidebar__profile-name">John Doe</div>
        <div class="m-sidebar__profile-role">Content Creator</div>
      </div>
    </div>

    <!-- Navigation Content -->
    <nav class="m-sidebar__nav">
      <!-- Main Section -->
      <div class="m-sidebar__section">
        <div class="m-sidebar__section-title" v-if="!isCollapsed">MAIN</div>
        <ul class="m-sidebar__list">
          <li class="m-sidebar__item">
            <button
              class="m-sidebar__link"
              :class="{ 'm-sidebar__link--active': activeItem === 'dashboard' }"
              @click="activeItem = 'dashboard'"
              :title="isCollapsed ? 'Dashboard' : ''"
            >
              <span class="m-sidebar__icon">📊</span>
              <span v-if="!isCollapsed" class="m-sidebar__label">Dashboard</span>
            </button>
          </li>

          <!-- Audience (expandable) -->
          <li class="m-sidebar__item">
            <button
              class="m-sidebar__link"
              :class="{ 'm-sidebar__link--active': activeItem === 'audience' }"
              @click="toggleExpanded('audience')"
              :title="isCollapsed ? 'Audience' : ''"
            >
              <span class="m-sidebar__icon">👥</span>
              <span v-if="!isCollapsed" class="m-sidebar__label">Audience</span>
              <span v-if="!isCollapsed" class="m-sidebar__expand-icon">
                {{ expandedSections.audience ? '▼' : '▶' }}
              </span>
            </button>
            <ul v-if="expandedSections.audience && !isCollapsed" class="m-sidebar__sublist">
              <li class="m-sidebar__subitem">
                <button
                  class="m-sidebar__sublink"
                  @click="activeItem = 'audience-followers'"
                >
                  Followers
                </button>
              </li>
              <li class="m-sidebar__subitem">
                <button
                  class="m-sidebar__sublink"
                  @click="activeItem = 'audience-demographics'"
                >
                  Demographics
                </button>
              </li>
            </ul>
          </li>

          <li class="m-sidebar__item">
            <button
              class="m-sidebar__link"
              :class="{ 'm-sidebar__link--active': activeItem === 'posts' }"
              @click="activeItem = 'posts'"
              :title="isCollapsed ? 'Posts' : ''"
            >
              <span class="m-sidebar__icon">📝</span>
              <span v-if="!isCollapsed" class="m-sidebar__label">Posts</span>
            </button>
          </li>

          <li class="m-sidebar__item">
            <button
              class="m-sidebar__link"
              :class="{ 'm-sidebar__link--active': activeItem === 'schedules' }"
              @click="activeItem = 'schedules'"
              :title="isCollapsed ? 'Schedules' : ''"
            >
              <span class="m-sidebar__icon">📅</span>
              <span v-if="!isCollapsed" class="m-sidebar__label">Schedules</span>
            </button>
          </li>

          <!-- Income (expandable, initially expanded) -->
          <li class="m-sidebar__item">
            <button
              class="m-sidebar__link"
              :class="{ 'm-sidebar__link--active': activeItem === 'income' }"
              @click="toggleExpanded('income')"
              :title="isCollapsed ? 'Income' : ''"
            >
              <span class="m-sidebar__icon">💰</span>
              <span v-if="!isCollapsed" class="m-sidebar__label">Income</span>
              <span v-if="!isCollapsed" class="m-sidebar__expand-icon">
                {{ expandedSections.income ? '▼' : '▶' }}
              </span>
            </button>
            <ul v-if="expandedSections.income && !isCollapsed" class="m-sidebar__sublist">
              <li class="m-sidebar__subitem">
                <button
                  class="m-sidebar__sublink"
                  @click="activeItem = 'earnings'"
                >
                  Earnings
                </button>
              </li>
              <li class="m-sidebar__subitem">
                <button
                  class="m-sidebar__sublink"
                  @click="activeItem = 'refunds'"
                >
                  Refunds
                </button>
              </li>
              <li class="m-sidebar__subitem">
                <button
                  class="m-sidebar__sublink"
                  @click="activeItem = 'declines'"
                >
                  Declines
                </button>
              </li>
              <li class="m-sidebar__subitem">
                <button
                  class="m-sidebar__sublink"
                  @click="activeItem = 'payouts'"
                >
                  Payouts
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- Settings Section -->
      <div class="m-sidebar__section">
        <div class="m-sidebar__section-title" v-if="!isCollapsed">SETTINGS</div>
        <ul class="m-sidebar__list">
          <!-- Settings (expandable) -->
          <li class="m-sidebar__item">
            <button
              class="m-sidebar__link"
              :class="{ 'm-sidebar__link--active': activeItem === 'settings' }"
              @click="toggleExpanded('settings')"
              :title="isCollapsed ? 'Settings' : ''"
            >
              <span class="m-sidebar__icon">⚙️</span>
              <span v-if="!isCollapsed" class="m-sidebar__label">Settings</span>
              <span v-if="!isCollapsed" class="m-sidebar__expand-icon">
                {{ expandedSections.settings ? '▼' : '▶' }}
              </span>
            </button>
            <ul v-if="expandedSections.settings && !isCollapsed" class="m-sidebar__sublist">
              <li class="m-sidebar__subitem">
                <button
                  class="m-sidebar__sublink"
                  @click="activeItem = 'account-settings'"
                >
                  Account Settings
                </button>
              </li>
              <li class="m-sidebar__subitem">
                <button
                  class="m-sidebar__sublink"
                  @click="activeItem = 'notification-settings'"
                >
                  Notifications
                </button>
              </li>
              <li class="m-sidebar__subitem">
                <button
                  class="m-sidebar__sublink"
                  @click="activeItem = 'privacy-settings'"
                >
                  Privacy
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Footer Section -->
    <div class="m-sidebar__footer">
      <ul class="m-sidebar__list">
        <li class="m-sidebar__item">
          <button
            class="m-sidebar__link"
            @click="activeItem = 'help'"
            :title="isCollapsed ? 'Help' : ''"
          >
            <span class="m-sidebar__icon">❓</span>
            <span v-if="!isCollapsed" class="m-sidebar__label">Help</span>
          </button>
        </li>
        <li class="m-sidebar__item">
          <button
            class="m-sidebar__link m-sidebar__link--logout"
            @click="handleLogout"
            :title="isCollapsed ? 'Logout' : ''"
          >
            <span class="m-sidebar__icon">🚪</span>
            <span v-if="!isCollapsed" class="m-sidebar__label">Logout</span>
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MSidebar',
  data() {
    return {
      isCollapsed: false,
      activeItem: 'schedules',
      expandedSections: {
        audience: false,
        income: true,
        settings: false,
      },
    };
  },
  methods: {
    toggleExpanded(section) {
      this.expandedSections[section] = !this.expandedSections[section];
    },
    handleLogout() {
      this.$emit('logout');
      // In a real app, this would trigger logout logic
      console.log('Logout clicked');
    },
  },
});
</script>

<style scoped>
:root {
  --color-primary: #6750A4;
  --color-on-primary: #FFFFFF;
  --color-surface: #FFFBFE;
  --color-on-surface: #1C1B1F;
  --color-on-surface-variant: #49454E;
  --color-error: #B3261E;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-6: 24px;
  --font-size-body-medium: 14px;
  --font-size-title-small: 14px;
  --font-weight-medium: 500;
}

.m-sidebar {
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 280px;
  height: 100vh;
  background-color: var(--color-surface);
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  transition: width 0.3s ease;
  overflow-y: auto;
}

.m-sidebar--collapsed {
  width: 80px;
}

/* Header */
.m-sidebar__header {
  padding: var(--spacing-4);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.m-sidebar__toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-3);
  font-size: 20px;
  color: var(--color-on-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

.m-sidebar__toggle:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.m-sidebar__toggle-icon {
  display: block;
}

/* Profile Section */
.m-sidebar__profile {
  padding: var(--spacing-4);
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.m-sidebar__profile-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.m-sidebar__profile-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.m-sidebar__profile-info {
  flex: 1;
  min-width: 0;
}

.m-sidebar__profile-name {
  font-size: var(--font-size-title-small);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.m-sidebar__profile-role {
  font-size: 12px;
  color: var(--color-on-surface-variant);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Navigation */
.m-sidebar__nav {
  overflow-y: auto;
  padding: var(--spacing-2) 0;
}

.m-sidebar__section {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-2);
}

.m-sidebar__section-title {
  padding: var(--spacing-3) var(--spacing-4);
  font-size: 12px;
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface-variant);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.m-sidebar__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.m-sidebar__item {
  display: flex;
  flex-direction: column;
}

.m-sidebar__link {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3) var(--spacing-4);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-on-surface);
  font-size: var(--font-size-body-medium);
  font-weight: 500;
  text-align: left;
  transition: background-color 0.2s ease, color 0.2s ease;
  position: relative;
  width: 100%;
}

.m-sidebar__link:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.m-sidebar__link--active {
  background-color: rgba(103, 80, 164, 0.12);
  color: var(--color-primary);
}

.m-sidebar__link--active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: var(--color-primary);
  border-radius: 0 2px 2px 0;
}

.m-sidebar__link--logout {
  color: var(--color-error);
}

.m-sidebar__link--logout:hover {
  background-color: rgba(179, 38, 30, 0.08);
}

.m-sidebar__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}

.m-sidebar__label {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.m-sidebar__expand-icon {
  font-size: 12px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

/* Collapsed State */
.m-sidebar--collapsed .m-sidebar__profile,
.m-sidebar--collapsed .m-sidebar__section-title {
  display: none;
}

.m-sidebar--collapsed .m-sidebar__link {
  padding: var(--spacing-3);
  justify-content: center;
}

.m-sidebar--collapsed .m-sidebar__label,
.m-sidebar--collapsed .m-sidebar__expand-icon {
  display: none;
}

/* Sublist */
.m-sidebar__sublist {
  list-style: none;
  padding: 0 0 0 var(--spacing-4);
  margin: 0;
  background-color: rgba(0, 0, 0, 0.02);
  border-left: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
}

.m-sidebar__subitem {
  display: flex;
}

.m-sidebar__sublink {
  display: flex;
  align-items: center;
  padding: var(--spacing-2) var(--spacing-4);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-on-surface-variant);
  font-size: 13px;
  font-weight: 400;
  text-align: left;
  width: 100%;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.m-sidebar__sublink:hover {
  color: var(--color-on-surface);
  background-color: rgba(0, 0, 0, 0.04);
}

/* Footer */
.m-sidebar__footer {
  padding: var(--spacing-2) 0;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

/* Scrollbar styling */
.m-sidebar::-webkit-scrollbar {
  width: 8px;
}

.m-sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.m-sidebar::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}

.m-sidebar::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.2);
}
</style>
