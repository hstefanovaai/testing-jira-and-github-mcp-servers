/**
 * Material 3 Design Tokens
 * Defines all design tokens as JS objects for light and dark themes
 */

export const lightTokens = {
  // Color System - Primary Palette
  primary: "#6750A4",
  onPrimary: "#FFFFFF",
  primaryContainer: "#EADDFF",
  onPrimaryContainer: "#21005D",

  // Color System - Secondary Palette
  secondary: "#625B71",
  onSecondary: "#FFFFFF",
  secondaryContainer: "#E8DEF8",
  onSecondaryContainer: "#1D192B",

  // Color System - Tertiary Palette
  tertiary: "#7D5260",
  onTertiary: "#FFFFFF",
  tertiaryContainer: "#FFD8E4",
  onTertiaryContainer: "#31111D",

  // Color System - Error Palette
  error: "#B3261E",
  onError: "#FFFFFF",
  errorContainer: "#F9DEDC",
  onErrorContainer: "#410E0B",

  // Color System - Neutral Palette
  background: "#FFFBFE",
  onBackground: "#1C1B1F",
  surface: "#FFFBFE",
  onSurface: "#1C1B1F",
  surfaceVariant: "#E7E0EC",
  onSurfaceVariant: "#49454E",
  outline: "#79747E",
  outlineVariant: "#CAC7D0",

  // Neutral colors for light theme
  scrim: "#000000",

  // Typography
  typography: {
    displayLarge: {
      fontSize: "57px",
      lineHeight: "64px",
      fontWeight: 400,
      letterSpacing: "0px",
    },
    displayMedium: {
      fontSize: "45px",
      lineHeight: "52px",
      fontWeight: 400,
      letterSpacing: "0px",
    },
    displaySmall: {
      fontSize: "36px",
      lineHeight: "44px",
      fontWeight: 400,
      letterSpacing: "0px",
    },
    headlineLarge: {
      fontSize: "32px",
      lineHeight: "40px",
      fontWeight: 400,
      letterSpacing: "0px",
    },
    headlineMedium: {
      fontSize: "28px",
      lineHeight: "36px",
      fontWeight: 400,
      letterSpacing: "0px",
    },
    headlineSmall: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 400,
      letterSpacing: "0px",
    },
    titleLarge: {
      fontSize: "22px",
      lineHeight: "28px",
      fontWeight: 500,
      letterSpacing: "0px",
    },
    titleMedium: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 500,
      letterSpacing: "0.1px",
    },
    titleSmall: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 500,
      letterSpacing: "0.1px",
    },
    bodyLarge: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 400,
      letterSpacing: "0.15px",
    },
    bodyMedium: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
      letterSpacing: "0.25px",
    },
    bodySmall: {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 400,
      letterSpacing: "0.4px",
    },
    labelLarge: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 500,
      letterSpacing: "0.1px",
    },
    labelMedium: {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 500,
      letterSpacing: "0.5px",
    },
    labelSmall: {
      fontSize: "11px",
      lineHeight: "16px",
      fontWeight: 500,
      letterSpacing: "0.5px",
    },
  },

  // Spacing scale
  spacing: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    9: "36px",
    10: "40px",
  },

  // Shape/border-radius tokens
  shape: {
    none: "0px",
    extraSmall: "4px",
    small: "8px",
    medium: "12px",
    large: "16px",
    extraLarge: "28px",
    full: "9999px",
  },

  // Elevation/shadow tokens
  elevation: {
    0: "none",
    1: "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)",
    2: "0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)",
    3: "0px 10px 20px rgba(0, 0, 0, 0.19), 0px 3px 6px rgba(0, 0, 0, 0.23)",
    4: "0px 15px 25px rgba(0, 0, 0, 0.15), 0px 5px 10px rgba(0, 0, 0, 0.05)",
    5: "0px 20px 40px rgba(0, 0, 0, 0.2)",
  },

  // State layer opacities
  stateLayer: {
    hover: 0.08,
    pressed: 0.12,
    focused: 0.12,
    dragged: 0.16,
  },
};

export const darkTokens = {
  // Color System - Primary Palette
  primary: "#D0BCFF",
  onPrimary: "#371E55",
  primaryContainer: "#4F378A",
  onPrimaryContainer: "#EADDFF",

  // Color System - Secondary Palette
  secondary: "#CCC7DB",
  onSecondary: "#332D41",
  secondaryContainer: "#4A4458",
  onSecondaryContainer: "#E8DEF8",

  // Color System - Tertiary Palette
  tertiary: "#F4AEFF",
  onTertiary: "#492532",
  tertiaryContainer: "#633B48",
  onTertiaryContainer: "#FFD8E4",

  // Color System - Error Palette
  error: "#F2B8B5",
  onError: "#601410",
  errorContainer: "#8C1D18",
  onErrorContainer: "#F9DEDC",

  // Color System - Neutral Palette
  background: "#1C1B1F",
  onBackground: "#E6E1E6",
  surface: "#1C1B1F",
  onSurface: "#E6E1E6",
  surfaceVariant: "#49454E",
  onSurfaceVariant: "#CAC7D0",
  outline: "#938F99",
  outlineVariant: "#49454E",

  // Neutral colors for dark theme
  scrim: "#000000",

  // Typography - same as light theme
  typography: {
    displayLarge: {
      fontSize: "57px",
      lineHeight: "64px",
      fontWeight: 400,
      letterSpacing: "0px",
    },
    displayMedium: {
      fontSize: "45px",
      lineHeight: "52px",
      fontWeight: 400,
      letterSpacing: "0px",
    },
    displaySmall: {
      fontSize: "36px",
      lineHeight: "44px",
      fontWeight: 400,
      letterSpacing: "0px",
    },
    headlineLarge: {
      fontSize: "32px",
      lineHeight: "40px",
      fontWeight: 400,
      letterSpacing: "0px",
    },
    headlineMedium: {
      fontSize: "28px",
      lineHeight: "36px",
      fontWeight: 400,
      letterSpacing: "0px",
    },
    headlineSmall: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 400,
      letterSpacing: "0px",
    },
    titleLarge: {
      fontSize: "22px",
      lineHeight: "28px",
      fontWeight: 500,
      letterSpacing: "0px",
    },
    titleMedium: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 500,
      letterSpacing: "0.1px",
    },
    titleSmall: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 500,
      letterSpacing: "0.1px",
    },
    bodyLarge: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 400,
      letterSpacing: "0.15px",
    },
    bodyMedium: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
      letterSpacing: "0.25px",
    },
    bodySmall: {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 400,
      letterSpacing: "0.4px",
    },
    labelLarge: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 500,
      letterSpacing: "0.1px",
    },
    labelMedium: {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 500,
      letterSpacing: "0.5px",
    },
    labelSmall: {
      fontSize: "11px",
      lineHeight: "16px",
      fontWeight: 500,
      letterSpacing: "0.5px",
    },
  },

  // Spacing scale - same as light theme
  spacing: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    9: "36px",
    10: "40px",
  },

  // Shape/border-radius tokens - same as light theme
  shape: {
    none: "0px",
    extraSmall: "4px",
    small: "8px",
    medium: "12px",
    large: "16px",
    extraLarge: "28px",
    full: "9999px",
  },

  // Elevation/shadow tokens - adjusted for dark theme
  elevation: {
    0: "none",
    1: "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)",
    2: "0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)",
    3: "0px 10px 20px rgba(0, 0, 0, 0.19), 0px 3px 6px rgba(0, 0, 0, 0.23)",
    4: "0px 15px 25px rgba(0, 0, 0, 0.15), 0px 5px 10px rgba(0, 0, 0, 0.05)",
    5: "0px 20px 40px rgba(0, 0, 0, 0.2)",
  },

  // State layer opacities - same as light theme
  stateLayer: {
    hover: 0.08,
    pressed: 0.12,
    focused: 0.12,
    dragged: 0.16,
  },
};

export default { lightTokens, darkTokens };
