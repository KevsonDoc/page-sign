import { theme, DefaultTheme, Theme } from '@chakra-ui/react';

const customTheme: Theme = {
  ...theme,
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
  },
  fontSizes: {
    ...theme.fontSizes,
  },
  colors: {
    ...theme.colors,
    purple: {
      ...theme.colors.purple,
      500: '#FF6663'
    },
    gray: {
      ...theme.colors.gray,
      300: '#E3E3E3',
      600: '#FF5E00',
      700: '#363636',
    }
  }
};

export default customTheme;