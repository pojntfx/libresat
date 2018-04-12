// Colors
export const colors = {
  transparent: "transparent",
  bargrey: "#F5F5F5",
  lightgrey: "#DCDCDC",
  darkgrey: "#D3D3D3",
  white: "#ffffff",
  black: "#000000",
  red: "#ff3b30",
  orange: "#ff9500",
  yellow: "#ffcc00",
  green: "#4cd964",
  tealBlue: "#59c8fa",
  blue: "#007aff",
  purple: "#5755d6",
  pink: "#ff3855",
  text: {
    default: () => colors.black,
    primary: () => colors.blue,
    positive: () => colors.green,
    warning: () => colors.orange,
    negative: () => colors.red
  },
  buttons: {
    default: () => colors.blue,
    primary: () => colors.white,
    positive: () => colors.white,
    warning: () => colors.black,
    negative: () => colors.white
  },
  bars: {
    default: () => colors.bargrey
  }
};

// New color API
export const colors2 = {
  // Base
  transparent: "transparent",
  white: "#ffffff",
  black: "#000000",
  blue: "#007aff",
  green: "#4cd964",
  orange: "#ff9500",
  red: "#ff3b30",
  yellow: "#ffcc00",
  tealBlue: "#59c8fa",
  purple: "#5755d6",
  pink: "#ff3855",
  // Shades
  light: "#ffffff",
  basegrey: "#f5f5f5",
  lightgrey: "lightgrey",
  darkgrey: "darkgrey",
  dark: "#000000",
  // Context
  primary: () => colors2.blue,
  primaryLighter: "#47a0ff",
  primaryLight: "#72b6ff",
  positive: () => colors2.green,
  positiveDark: "#287d36",
  positiveLighter: "#75d885",
  positiveLight: "#9ddba8",
  warning: () => colors2.orange,
  warningDark: "#bc6e01",
  warningLighter: "#fcbb5f",
  warningLight: "#fcd092",
  negative: () => colors2.red,
  negativeDark: "#c5261d",
  negativeLighter: "#ff7770",
  negativeLight: "#ea7d77",
  // States
  buttons: {
    default: {
      light: {
        default: () => colors2.primary,
        hover: () => colors2.primary,
        active: () => colors2.primary,
        focus: () => colors2.primary
      },
      primary: {
        default: () => colors2.light,
        hover: () => colors2.light,
        active: () => colors2.light,
        focus: () => colors2.light
      }
    },
    positive: {
      light: {
        default: () => colors2.positive,
        hover: () => colors2.positive,
        active: () => colors2.positiveDark,
        focus: () => colors2.positiveDark
      },
      primary: {
        default: () => colors2.light,
        hover: () => colors2.light,
        active: () => colors2.light,
        focus: () => colors2.light
      }
    },
    warning: {
      light: {
        default: () => colors2.warning,
        hover: () => colors2.warningDark,
        active: () => colors2.warning,
        focus: () => colors2.warningLight
      },
      primary: {
        default: () => colors2.dark,
        hover: () => colors2.dark,
        active: () => colors2.dark,
        focus: () => colors2.dark
      }
    },
    negative: {
      light: {
        default: () => colors2.negative,
        hover: () => colors2.negativeDark,
        active: () => colors2.negative,
        focus: () => colors2.negative
      },
      primary: {
        default: () => colors2.light,
        hover: () => colors2.light,
        active: () => colors2.light,
        focus: () => colors2.light
      }
    }
  }
};

// New backgrounds API
export const backgrounds2 = {
  buttons: {
    default: {
      light: {
        default: () => colors2.transparent,
        hover: () => colors2.lightgrey,
        active: () => colors2.darkgrey,
        focus: () => colors2.darkgrey
      },
      primary: {
        default: () => colors2.primary,
        hover: () => colors2.primaryLight,
        active: () => colors2.primaryLighter,
        focus: () => colors2.primaryLighter
      }
    },
    positive: {
      light: {
        default: () => colors2.transparent,
        hover: () => colors2.lightgrey,
        active: () => colors2.darkgrey,
        focus: () => colors2.darkgrey
      },
      primary: {
        default: () => colors2.positive,
        hover: () => colors2.positiveLight,
        active: () => colors2.positiveLighter,
        focus: () => colors2.positiveLighter
      }
    },
    warning: {
      light: {
        default: () => colors2.transparent,
        hover: () => colors2.lightgrey,
        active: () => colors2.darkgrey,
        focus: () => colors2.darkgrey
      },
      primary: {
        default: () => colors2.warning,
        hover: () => colors2.warningLight,
        active: () => colors2.warningLighter,
        focus: () => colors2.warningLighter
      }
    },
    negative: {
      light: {
        default: () => colors2.transparent,
        hover: () => colors2.lightgrey,
        active: () => colors2.darkgrey,
        focus: () => colors2.darkgrey
      },
      primary: {
        default: () => colors2.negative,
        hover: () => colors2.negativeLight,
        active: () => colors2.negativeLighter,
        focus: () => colors2.negativeLighter
      }
    }
  },
  bars: {
    default: () => colors2.basegrey
  }
};

// Backgrounds
export const backgrounds = {
  default: () => colors.transparent,
  primary: () => colors.blue,
  positive: () => colors.green,
  warning: () => colors.orange,
  negative: () => colors.red
};

// Margins and Paddings
export const margins = {
  default: "1rem",
  labels: "1rem",
  expand: "0.5rem",
  switches: "1rem"
};

export const paddings = {
  default: "1rem",
  buttons: "1rem 1.25rem",
  button: "1rem 1.25rem",
  expand: "0.5rem 0.75rem",
  select: "0.5rem 0.75rem",
  link: "0.2rem"
};

// Border Radiuses
export const radiuses = {
  default: "8px",
  buttons: "8px",
  switches: "8px"
};

// Transitions
export const transitions = {
  defaultDuration: "0.25s ease-out",
  buttons: () => transitions.defaultDuration,
  switches: () => transitions.defaultDuration
};

// Shadows
export const shadows = {
  default: "0 1px 2px rgba(32, 33, 36, 0.28)",
  defaultInset: "inset 0 0px 2px rgba(32, 33, 36, 0.28)"
};

// Z-Indexes
export const zIndexes = {
  dialog: "1000"
};
