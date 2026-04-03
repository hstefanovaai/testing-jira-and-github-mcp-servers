<template>
  <div id="app">
    <!-- Top App Bar -->
    <MTopAppBar title="Material 3 Design System">
      <template #actions>
        <MIconButton aria-label="Search">🔍</MIconButton>
        <MIconButton aria-label="More options">⋯</MIconButton>
      </template>
    </MTopAppBar>

    <!-- Main content -->
    <div class="app-content">
      <h1 class="headline-large">Material 3 Design System</h1>
      <p class="body-large">A complete Material 3 design system implementation for Vue 3 using the Options API</p>

      <!-- Buttons Section -->
      <section class="section">
        <h2 class="headline-medium">Buttons</h2>
        <div class="components-grid">
          <div>
            <p class="label-small">Filled</p>
            <MButton @click="handleButtonClick">Filled Button</MButton>
          </div>
          <div>
            <p class="label-small">Outlined</p>
            <MButton variant="outlined">Outlined Button</MButton>
          </div>
          <div>
            <p class="label-small">Text</p>
            <MButton variant="text">Text Button</MButton>
          </div>
          <div>
            <p class="label-small">Elevated</p>
            <MButton variant="elevated">Elevated Button</MButton>
          </div>
          <div>
            <p class="label-small">Tonal</p>
            <MButton variant="tonal">Tonal Button</MButton>
          </div>
          <div>
            <p class="label-small">Disabled</p>
            <MButton disabled>Disabled Button</MButton>
          </div>
        </div>
      </section>

      <!-- Text Fields Section -->
      <section class="section">
        <h2 class="headline-medium">Text Fields</h2>
        <div class="components-grid">
          <div>
            <p class="label-small">Filled TextField</p>
            <MTextField
              v-model="textInput"
              label="Name"
              placeholder="Enter your name"
              helper-text="This is a helper text"
            />
          </div>
          <div>
            <p class="label-small">Outlined TextField</p>
            <MTextField
              v-model="textInput2"
              variant="outlined"
              label="Email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <p class="label-small">Error State</p>
            <MTextField
              variant="outlined"
              label="Invalid Email"
              placeholder="invalid"
              error="Please enter a valid email"
            />
          </div>
        </div>
      </section>

      <!-- Cards Section -->
      <section class="section">
        <h2 class="headline-medium">Cards</h2>
        <div class="components-grid">
          <div>
            <p class="label-small">Elevated</p>
            <MCard variant="elevated" clickable>
              <div class="p-4">
                <h3 class="title-medium">Card Title</h3>
                <p class="body-small">This is an elevated card</p>
              </div>
            </MCard>
          </div>
          <div>
            <p class="label-small">Filled</p>
            <MCard variant="filled">
              <div class="p-4">
                <h3 class="title-medium">Card Title</h3>
                <p class="body-small">This is a filled card</p>
              </div>
            </MCard>
          </div>
          <div>
            <p class="label-small">Outlined</p>
            <MCard variant="outlined">
              <div class="p-4">
                <h3 class="title-medium">Card Title</h3>
                <p class="body-small">This is an outlined card</p>
              </div>
            </MCard>
          </div>
        </div>
      </section>

      <!-- Chips Section -->
      <section class="section">
        <h2 class="headline-medium">Chips</h2>
        <div class="flex-wrap">
          <MChip v-model="chipSelected" variant="filter">Chip</MChip>
          <MChip variant="filter">Another Chip</MChip>
          <MChip variant="assist" removable>Removable Chip</MChip>
        </div>
      </section>

      <!-- Checkboxes Section -->
      <section class="section">
        <h2 class="headline-medium">Checkboxes</h2>
        <div class="flex-wrap">
          <MCheckbox v-model="checkbox1">Unchecked</MCheckbox>
          <MCheckbox v-model="checkbox2">Checked</MCheckbox>
          <MCheckbox disabled>Disabled</MCheckbox>
        </div>
      </section>

      <!-- Radio Buttons Section -->
      <section class="section">
        <h2 class="headline-medium">Radio Buttons</h2>
        <div class="flex-wrap">
          <MRadio v-model="selectedOption" value="option1">Option 1</MRadio>
          <MRadio v-model="selectedOption" value="option2">Option 2</MRadio>
          <MRadio v-model="selectedOption" value="option3" disabled>Option 3 (Disabled)</MRadio>
        </div>
      </section>

      <!-- Switches Section -->
      <section class="section">
        <h2 class="headline-medium">Switches</h2>
        <div class="flex-wrap">
          <MSwitch v-model="switch1">Switch Off</MSwitch>
          <MSwitch v-model="switch2">Switch On</MSwitch>
          <MSwitch disabled>Disabled</MSwitch>
        </div>
      </section>

      <!-- Icon Buttons Section -->
      <section class="section">
        <h2 class="headline-medium">Icon Buttons</h2>
        <div class="flex-wrap">
          <MIconButton aria-label="Standard">👍</MIconButton>
          <MIconButton variant="filled" aria-label="Filled">👍</MIconButton>
          <MIconButton variant="tonal" aria-label="Tonal">👍</MIconButton>
          <MIconButton variant="outlined" aria-label="Outlined">👍</MIconButton>
        </div>
      </section>

      <!-- FAB Section -->
      <section class="section">
        <h2 class="headline-medium">Floating Action Button</h2>
        <div class="flex-wrap">
          <MFAB size="small" aria-label="Add">➕</MFAB>
          <MFAB size="regular" aria-label="Add">➕</MFAB>
          <MFAB size="large" aria-label="Add">➕</MFAB>
          <MFAB size="regular" extended aria-label="Add new">
            <template #icon>➕</template>
            Add New
          </MFAB>
        </div>
      </section>

      <!-- Progress Indicator Section -->
      <section class="section">
        <h2 class="headline-medium">Progress Indicators</h2>
        <div class="flex-column-wrap">
          <div>
            <p class="label-small">Linear Progress ({{ linearProgress }}%)</p>
            <MProgressIndicator type="linear" :value="linearProgress" />
          </div>
          <div class="m-4">
            <p class="label-small">Circular Progress ({{ circularProgress }}%)</p>
            <MProgressIndicator type="circular" :value="circularProgress" />
          </div>
        </div>
      </section>

      <!-- List Section -->
      <section class="section">
        <h2 class="headline-medium">Lists</h2>
        <MList>
          <MListItem clickable>
            <template #leading>🏠</template>
            <span>Home</span>
          </MListItem>
          <MDivider />
          <MListItem clickable>
            <template #leading>⚙️</template>
            <span>Settings</span>
          </MListItem>
          <MDivider />
          <MListItem clickable>
            <template #leading>ℹ️</template>
            <span>About</span>
          </MListItem>
        </MList>
      </section>

      <!-- Buttons for testing Dialog and Snackbar -->
      <section class="section">
        <h2 class="headline-medium">Dialogs & Snackbars</h2>
        <div class="flex-wrap">
          <MButton @click="showDialog = true">Open Dialog</MButton>
          <MButton @click="showSnackbar">Show Snackbar</MButton>
        </div>
      </section>

      <!-- Dialog -->
      <MDialog v-model="showDialog" @close="showDialog = false" :visible="showDialog">
        <template #header>Dialog Title</template>
        <p>This is a Material 3 dialog component with proper accessibility support.</p>
        <template #actions>
          <MButton variant="text" @click="showDialog = false">Cancel</MButton>
          <MButton @click="showDialog = false">Confirm</MButton>
        </template>
      </MDialog>

      <!-- Snackbar -->
      <MSnackbar
        v-if="snackbarVisible"
        :message="snackbarMessage"
        action="Undo"
        @close="snackbarVisible = false"
        @action="handleSnackbarAction"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      textInput: '',
      textInput2: '',
      chipSelected: false,
      checkbox1: false,
      checkbox2: true,
      selectedOption: 'option1',
      switch1: false,
      switch2: true,
      linearProgress: 35,
      circularProgress: 65,
      showDialog: false,
      snackbarVisible: false,
      snackbarMessage: 'This is a snackbar notification',
      progressInterval: null,
    };
  },
  mounted() {
    // Animate progress indicators
    this.progressInterval = setInterval(() => {
      this.linearProgress = (this.linearProgress + 1) % 101;
      this.circularProgress = (this.circularProgress + 1) % 101;
    }, 100);
  },
  beforeUnmount() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  },
  methods: {
    handleButtonClick() {
      console.log('Button clicked!');
      this.showSnackbar();
    },
    showSnackbar() {
      this.snackbarMessage = 'Action completed successfully!';
      this.snackbarVisible = true;
    },
    handleSnackbarAction() {
      console.log('Snackbar action triggered');
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-content {
  flex: 1;
  padding: var(--spacing-6);
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.section {
  margin-bottom: var(--spacing-8);
}

.section h2 {
  margin-bottom: var(--spacing-4);
  color: var(--color-on-surface);
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-4);
  margin-top: var(--spacing-3);
}

.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-3);
  align-items: center;
}

.flex-column-wrap {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.components-grid > div {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}
</style>
