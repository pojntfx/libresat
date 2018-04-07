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
  expand: "0.5rem"
};

export const paddings = {
  default: "1rem",
  button: "1rem 1.25rem",
  expand: "0.5rem 0.75rem",
  select: "0.5rem 0.75rem"
};

// Border Radiuses
export const radiuses = {
  default: "8px"
};

// Transitions
export const transitions = {
  defaultDuration: "0.25s"
};

// Shadows
export const shadows = {
  default: "0 1px 4px rgba(32, 33, 36, 0.28)",
  defaultInset: "inset 0 0px 4px rgba(68, 145, 255, 0.4)"
};

// Z-Indexes
export const zIndexes = {
  dialog: "1000"
};
