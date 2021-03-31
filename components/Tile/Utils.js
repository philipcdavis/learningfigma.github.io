export const color = {
  blue: "#0099FF",
  purple: "#F04DFF",
  red: "#FF7262",
  green: "#0ACF83",
  white: "#ffffff",
  gray0: "#BBBBBB",
  gray1: "#606060",
  gray2: "#313131",
  gray3: "#181818",
  black: "#1B0B12",
  skittleYellow: "#FFC75D",
  skittleOrange: "#FF9D2F",
  skittleRed: "#FF6565",
  skittlePink: "#F88AFF",
  skittlePurple: "#BC88FF",
  skittleBlue: "#8394FF",
  skittleTeal: "#41C8FF",
  skittleCyan: "#2AFFFA",
  skittleGreen: "#37FAAF",
};

export const space = [0, 8, 16, 32, 64, 128, 256, 512];

export const fontSize = ["14px", "16px", "20px", "24px", "32px", "64px"];

export const isDarkBackground = function (color) {
  if (color) {
    if (
      color.includes("black") ||
      color.includes("gray2") ||
      color.includes("gray3")
    ) {
      return true;
    } else {
      return false;
    }
  }
};
