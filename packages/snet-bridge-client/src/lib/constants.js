// Colors
export const colors = {
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
  primary: () => colors.blue,
  primaryLighter: "#47a0ff",
  primaryLight: "#72b6ff",
  positive: () => colors.green,
  positiveDark: "#287d36",
  positiveLighter: "#75d885",
  positiveLight: "#9ddba8",
  warning: () => colors.orange,
  warningDark: "#bc6e01",
  warningLighter: "#fcbb5f",
  warningLight: "#fcd092",
  negative: () => colors.red,
  negativeDark: "#c5261d",
  negativeLighter: "#ff7770",
  negativeLight: "#ea7d77",
  // States
  buttons: {
    default: {
      light: {
        default: () => colors.primary,
        hover: () => colors.primary,
        active: () => colors.primary,
        focus: () => colors.primary
      },
      primary: {
        default: () => colors.light,
        hover: () => colors.light,
        active: () => colors.light,
        focus: () => colors.light
      }
    },
    positive: {
      light: {
        default: () => colors.positive,
        hover: () => colors.positiveDark,
        active: () => colors.positiveDark,
        focus: () => colors.positiveDark
      },
      primary: {
        default: () => colors.light,
        hover: () => colors.light,
        active: () => colors.light,
        focus: () => colors.light
      }
    },
    warning: {
      light: {
        default: () => colors.warning,
        hover: () => colors.warningDark,
        active: () => colors.warningDarker,
        focus: () => colors.warningDarker
      },
      primary: {
        default: () => colors.dark,
        hover: () => colors.dark,
        active: () => colors.dark,
        focus: () => colors.dark
      }
    },
    negative: {
      light: {
        default: () => colors.negative,
        hover: () => colors.negativeDark,
        active: () => colors.negativeDarker,
        focus: () => colors.negativeDarker
      },
      primary: {
        default: () => colors.light,
        hover: () => colors.light,
        active: () => colors.light,
        focus: () => colors.light
      }
    }
  }
};

// Backgrounds
export const backgrounds = {
  buttons: {
    default: {
      light: {
        default: () => colors.transparent,
        hover: () => colors.lightgrey,
        active: () => colors.darkgrey,
        focus: () => colors.darkgrey
      },
      primary: {
        default: () => colors.primary,
        hover: () => colors.primaryLight,
        active: () => colors.primaryLighter,
        focus: () => colors.primaryLighter
      }
    },
    positive: {
      light: {
        default: () => colors.transparent,
        hover: () => colors.lightgrey,
        active: () => colors.darkgrey,
        focus: () => colors.darkgrey
      },
      primary: {
        default: () => colors.positive,
        hover: () => colors.positiveLight,
        active: () => colors.positiveLighter,
        focus: () => colors.positiveLighter
      }
    },
    warning: {
      light: {
        default: () => colors.transparent,
        hover: () => colors.lightgrey,
        active: () => colors.darkgrey,
        focus: () => colors.darkgrey
      },
      primary: {
        default: () => colors.warning,
        hover: () => colors.warningLight,
        active: () => colors.warningLighter,
        focus: () => colors.warningLighter
      }
    },
    negative: {
      light: {
        default: () => colors.transparent,
        hover: () => colors.lightgrey,
        active: () => colors.darkgrey,
        focus: () => colors.darkgrey
      },
      primary: {
        default: () => colors.negative,
        hover: () => colors.negativeLight,
        active: () => colors.negativeLighter,
        focus: () => colors.negativeLighter
      }
    }
  },
  bars: {
    default: () => colors.basegrey
  },
  textFields: {
    default: () => colors.transparent,
    hover: () => colors.lightgrey,
    active: () => colors.light,
    focus: () => colors.light
  },
  textAreas: {
    default: () => colors.transparent,
    hover: () => colors.lightgrey,
    active: () => colors.light,
    focus: () => colors.light
  },
  sliders: {
    default: () => colors.basegrey
  },
  gridLayout: {
    default: () => colors.blue
  },
  cards: {
    default: () => colors.light
  },
  dialogs: {
    default: () => colors.light
  },
  menus: {
    default: () => colors.light
  }
};

// Margins and Paddings
export const margins = {
  default: "1rem",
  labels: "1rem",
  expands: "0.5rem",
  switches: "1rem",
  textFields: "1rem",
  textAreas: "1rem",
  sliders: "1rem",
  nav: "1rem",
  tool: "1rem"
};

export const paddings = {
  default: "1rem",
  buttons: "1rem 1.25rem",
  expands: "0.5rem 0.75rem",
  expandsBody: "0.5rem 0.75rem",
  select: "0.5rem 0.75rem",
  links: "0 0.2rem",
  textFields: "1rem",
  textAreas: "1rem"
};

// Border Radiuses
export const radiuses = {
  default: "8px",
  buttons: "8px",
  switches: "8px",
  textFields: "8px",
  textAreas: "8px",
  sliders: "8px",
  links: "8px"
};

// Transitions
export const transitions = {
  defaultDuration: "0.25s",
  buttons: () => transitions.defaultDuration,
  switches: () => transitions.defaultDuration,
  textFields: () => transitions.defaultDuration,
  textAreas: () => transitions.defaultDuration,
  sliders: () => transitions.defaultDuration,
  links: () => transitions.defaultDuration
};

// Shadows
export const shadows = {
  default: "0 1px 2px rgba(32, 33, 36, 0.28)",
  defaultInset: "inset 0 0 2px rgba(32, 33, 36, 0.28)",
  sliders: "inset 1px 0.01rem 4px rgba(32, 33, 36, 0.7)",
  links: () => shadows.defaultInset
};

// Z-Indexes
export const zIndexes = {
  dialog: "1000"
};
