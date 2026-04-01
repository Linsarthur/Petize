import { extendTheme } from "@chakra-ui/react";

interface BrandColors {
  primary: string;
  secondary: string;
  grey: string;
  colorInfoUser: string;
  borderColor: string;
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
      grey: "#A0AEC0",
      colorInfoUser: "#4A5568",
      borderColor: "#E2E8F0",
    },
  },
  fonts: {
    body: `'Nunito', sans-serif`,
    heading: `'Nunito', sans-serif`,
  },
};

export const theme = extendTheme(customTheme);
