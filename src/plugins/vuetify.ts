import '@mdi/font/css/materialdesignicons.css';
import { createVuetify, type ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

const myCustomTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#0b1120',
    surface: '#fafafa',
    secondary: '#a252c83d',
    primary: '#302148',
    card:'#695c90'
  },
};

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme,
    },
  },
  icons: {
    defaultSet: 'mdi',
  },
  components,
  directives,
});
