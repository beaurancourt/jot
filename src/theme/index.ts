import { extendTheme } from "@chakra-ui/react";
import fonts from "./fonts";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: () => ({
      body: {
        background: "primary.white.100",
        fontFamily: "riforma.regular",
      },
    }),
  },
  fonts,
});

export default theme;
