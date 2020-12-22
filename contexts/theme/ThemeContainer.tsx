import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { ThemeProvider } from '@emotion/react';

import theme from '../../styles/theme';

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider value="light" options={{ initialColorMode: "dark" }}>
        <ThemeProvider theme={{theme}}>
          {children}
        </ThemeProvider>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default ThemeContainer;