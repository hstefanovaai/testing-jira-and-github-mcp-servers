/**
 * Material 3 Design System Plugin
 * Registers all Material 3 components globally with the 'M' prefix
 */

import MButton from './components/MButton.vue';
import MTextField from './components/MTextField.vue';
import MCard from './components/MCard.vue';
import MChip from './components/MChip.vue';
import MCheckbox from './components/MCheckbox.vue';
import MRadio from './components/MRadio.vue';
import MSwitch from './components/MSwitch.vue';
import MDivider from './components/MDivider.vue';
import MIconButton from './components/MIconButton.vue';
import MFAB from './components/MFAB.vue';
import MProgressIndicator from './components/MProgressIndicator.vue';
import MSnackbar from './components/MSnackbar.vue';
import MList from './components/MList.vue';
import MListItem from './components/MListItem.vue';
import MTopAppBar from './components/MTopAppBar.vue';
import MNavigationBar from './components/MNavigationBar.vue';
import MNavigationDrawer from './components/MNavigationDrawer.vue';
import MDialog from './components/MDialog.vue';

// Import global styles
import './styles/global.css';

// Import design tokens
import { lightTokens, darkTokens } from './tokens/tokens.js';

export {
  MButton,
  MTextField,
  MCard,
  MChip,
  MCheckbox,
  MRadio,
  MSwitch,
  MDivider,
  MIconButton,
  MFAB,
  MProgressIndicator,
  MSnackbar,
  MList,
  MListItem,
  MTopAppBar,
  MNavigationBar,
  MNavigationDrawer,
  MDialog,
  lightTokens,
  darkTokens,
};

export default {
  install(app) {
    // Register all components
    app.component('MButton', MButton);
    app.component('MTextField', MTextField);
    app.component('MCard', MCard);
    app.component('MChip', MChip);
    app.component('MCheckbox', MCheckbox);
    app.component('MRadio', MRadio);
    app.component('MSwitch', MSwitch);
    app.component('MDivider', MDivider);
    app.component('MIconButton', MIconButton);
    app.component('MFAB', MFAB);
    app.component('MProgressIndicator', MProgressIndicator);
    app.component('MSnackbar', MSnackbar);
    app.component('MList', MList);
    app.component('MListItem', MListItem);
    app.component('MTopAppBar', MTopAppBar);
    app.component('MNavigationBar', MNavigationBar);
    app.component('MNavigationDrawer', MNavigationDrawer);
    app.component('MDialog', MDialog);

    // Provide design tokens globally
    app.provide('designTokens', {
      light: lightTokens,
      dark: darkTokens,
    });
  },
};
