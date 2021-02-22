import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
});

const extendedTheme = extendTheme({
  //@ts-ignore
  breakpoints,
  fonts: {
    body: "Livvic, system-ui, sans-serif",
    heading: "Livvic, system-ui, serif",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={extendedTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
