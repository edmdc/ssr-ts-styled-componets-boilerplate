import { DefaultTheme, ColorPalette } from "styled-components";

export const getModeColors = (
  theme: DefaultTheme,
  invert?: boolean
): ColorPalette => {
  const {
    colors: { mode, dark, light },
  } = theme;
  switch (mode) {
    case "dark":
      return !invert ? dark : light;
    case "light":
      return invert ? dark : light;
  }
};
