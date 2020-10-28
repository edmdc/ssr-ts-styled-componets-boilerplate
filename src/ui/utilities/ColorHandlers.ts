import { DefaultTheme, ColorPalette, ColorChoices } from "styled-components";

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

export const getColor = (theme: DefaultTheme, color: ColorChoices): string => {
  const palette = getModeColors(theme);
  return palette[color];
};

export const getDefaultTextColor = (theme: DefaultTheme): string => {
  const {
    colors: {
      mode,
      text: { dark, light },
    },
  } = theme;
  return mode === "dark" ? light : dark;
};

export const getHighlightColor = (theme: DefaultTheme): string =>
  getModeColors(theme)[theme.colors.onFocusHighlight];
