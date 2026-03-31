import { extendTheme } from "@chakra-ui/react";

interface BrandColors {
  primary: string;
  secondary: string;
}

interface ThemeColors {
  brand: BrandColors;
}

interface ThemeFonts {
  body: string;
  heading: string;
}

interface CustomThemeConfig {
  colors: ThemeColors;
  fonts: ThemeFonts;
}

const customTheme: CustomThemeConfig = {
  colors: {
    brand: {
      primary: "#0069CA",
      secondary: "#8C19D2",
    },
  },
  fonts: {
    body: `'Nunito', sans-serif`,
    heading: `'Nunito', sans-serif`,
  },
};

export const theme = extendTheme(customTheme);